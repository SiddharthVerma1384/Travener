import { API_BASE_URL } from './config'

export async function apiRequest(path, options = {}, canRefresh = true) {
  const response = await fetch(`${API_BASE_URL}${path}`, { credentials: 'include', headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options })
  const payload = await response.json().catch(() => ({}))
  if (response.status === 401 && canRefresh && !path.startsWith('/auth/')) {
    const refreshed = await fetch(`${API_BASE_URL}/auth/refresh-token`, { method: 'POST', credentials: 'include' })
    if (refreshed.ok) return apiRequest(path, options, false)
  }
  const validationMessage = Array.isArray(payload.errors)
    ? payload.errors.flatMap((error) => Object.values(error || {})).find((message) => typeof message === 'string')
    : undefined
  if (!response.ok) {
    const error = new Error(validationMessage || payload.message || 'Something went wrong')
    error.details = payload.errors
    throw error
  }
  return payload
}
