const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1'

export async function apiRequest(path, options = {}, canRefresh = true) {
  const response = await fetch(`${API_BASE_URL}${path}`, { credentials: 'include', headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options })
  const payload = await response.json().catch(() => ({}))
  if (response.status === 401 && canRefresh && !path.startsWith('/auth/')) {
    const refreshed = await fetch(`${API_BASE_URL}/auth/refresh-token`, { method: 'POST', credentials: 'include' })
    if (refreshed.ok) return apiRequest(path, options, false)
  }
  if (!response.ok) throw new Error(payload.message || payload.errors?.[0]?.msg || 'Something went wrong')
  return payload
}
