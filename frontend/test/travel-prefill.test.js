import test from 'node:test'
import assert from 'node:assert/strict'
import { createSearchPrefill, getLocalDateTime, SHAREABLE_MODE_OPTIONS } from '../src/utils/travel-prefill.js'

test('converts an ISO departure timestamp to local date and time fields', () => {
  const expected = getLocalDateTime('2030-12-31T23:45:00.000Z')
  const date = new Date('2030-12-31T23:45:00.000Z')

  assert.equal(expected.date, `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`)
  assert.equal(expected.time, `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`)
})

test('converts offset timestamps using the browser local calendar date', () => {
  const expected = getLocalDateTime('2031-01-01T00:15:00+05:30')
  const local = new Date('2031-01-01T00:15:00+05:30')
  assert.equal(expected.date, `${local.getFullYear()}-${String(local.getMonth() + 1).padStart(2, '0')}-${String(local.getDate()).padStart(2, '0')}`)
  assert.equal(expected.time, `${String(local.getHours()).padStart(2, '0')}:${String(local.getMinutes()).padStart(2, '0')}`)
})

test('returns empty date and time for missing or invalid timestamps', () => {
  assert.deepEqual(getLocalDateTime(undefined), { date: '', time: '' })
  assert.deepEqual(getLocalDateTime('not-a-timestamp'), { date: '', time: '' })
  assert.deepEqual(createSearchPrefill(), {
    source: '',
    ticketOrigin: '',
    destination: '',
    date: '',
    time: '',
    transportMode: '',
  })
})

test('preserves confirmed route values while keeping the pickup blank', () => {
  assert.deepEqual(
    createSearchPrefill({
      source: ' Chennai ',
      destination: ' Bengaluru ',
      departureAt: 'invalid',
      transportMode: 'TRAIN',
      terminalType: 'AIRPORT',
      terminalName: 'Chennai Airport',
    }),
    {
      source: '',
      ticketOrigin: 'Chennai',
      destination: 'Bengaluru',
      date: '',
      time: '',
      transportMode: '',
    },
  )
})

test('prefers independently extracted local date and departure time over a combined timestamp', () => {
  assert.deepEqual(createSearchPrefill({
    source: 'Chennai',
    destination: 'Bengaluru',
    travelDate: '2032-03-04',
    departureTime: '07:25',
    departureAt: '2032-03-04T01:55:00.000Z',
  }), {
    source: '',
    ticketOrigin: 'Chennai',
    destination: 'Bengaluru',
    date: '2032-03-04',
    time: '07:25',
    transportMode: '',
  })
})

test('exposes only cab and auto as shareable ride modes', () => {
  assert.deepEqual(SHAREABLE_MODE_OPTIONS.map(({ value }) => value), ['CAB', 'AUTO'])
})

test('keeps ticket origin separate from a blank, user-entered pickup', () => {
  const prefill = createSearchPrefill({ source: ' Chennai Central ', destination: 'Bengaluru' })
  assert.equal(prefill.ticketOrigin, 'Chennai Central')
  assert.equal(prefill.source, '')
  assert.equal(prefill.destination, 'Bengaluru')
})

test('falls back to the combined timestamp when separate OCR date/time are invalid', () => {
  const expected = getLocalDateTime('2030-12-31T23:45:00.000Z')
  assert.deepEqual(createSearchPrefill({
    travelDate: 'not-a-date',
    departureTime: '25:99',
    departureAt: '2030-12-31T23:45:00.000Z',
  }), {
    source: '',
    ticketOrigin: '',
    destination: '',
    date: expected.date,
    time: expected.time,
    transportMode: '',
  })
})
