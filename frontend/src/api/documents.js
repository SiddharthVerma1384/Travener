import { API_BASE_URL } from './config'

export async function uploadTicket(file, token) {
  const formData = new FormData()

  formData.append('file', file)
  formData.append('documentType', 'TICKET')

  const response = await fetch(
    `${API_BASE_URL}/travel-documents`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    }
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.message || 'Failed to upload ticket.'
    )
  }

  return data
}


export async function confirmOCR(
  documentId,
  corrections,
  token
) {
  const body = {
    confirmed: true
  }

  if (corrections && Object.keys(corrections).length > 0) {
    body.corrections = corrections
  }

  const response = await fetch(
    `${API_BASE_URL}/travel-documents/${documentId}/confirm`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    }
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.message || 'Failed to confirm ticket information.'
    )
  }

  return data
}