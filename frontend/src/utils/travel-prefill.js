const SHAREABLE_MODES = new Set(['CAB', 'AUTO'])
export const SHAREABLE_MODE_OPTIONS = Object.freeze([
  { value: 'CAB', label: 'Cab' },
  { value: 'AUTO', label: 'Auto' },
])

export function getLocalDateTime(value) {
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) return { date: '', time: '' }

  return {
    date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
    time: `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`,
  }
}

export function createSearchPrefill(confirmed = {}) {
  const localDeparture = getLocalDateTime(confirmed.departureAt)
  const date = typeof confirmed.travelDate === 'string' ? confirmed.travelDate.trim() : ''
  const time = typeof confirmed.departureTime === 'string' ? confirmed.departureTime.trim() : ''
  const dateIsValid = /^\d{4}-\d{2}-\d{2}$/.test(date) &&
    !Number.isNaN(new Date(`${date}T00:00:00Z`).getTime()) &&
    new Date(`${date}T00:00:00Z`).toISOString().startsWith(date)
  const timeIsValid = /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(time)

  return {
    source: '',
    ticketOrigin: typeof confirmed.source === 'string' ? confirmed.source.trim() : '',
    destination: typeof confirmed.destination === 'string' ? confirmed.destination.trim() : '',
    date: dateIsValid ? date : localDeparture.date,
    time: timeIsValid ? time : localDeparture.time,
    transportMode: SHAREABLE_MODES.has(confirmed.transportMode) ? confirmed.transportMode : '',
  }
}
