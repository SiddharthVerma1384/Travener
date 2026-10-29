import test from 'node:test'
import assert from 'node:assert/strict'
import { extractTicketFields } from '../src/utils/ticket-ocr.js'

test('extracts route, date, time, and train mode from ticket text', () => {
  const result = extractTicketFields('From: Vellore\nTo: Chennai\nDate: 31/12/2030\nDeparture: 18:45\nIndian Railway')
  assert.equal(result.source, 'Vellore')
  assert.equal(result.destination, 'Chennai')
  assert.equal(result.transportMode, 'TRAIN')
  assert.equal(result.departureAt.getHours(), 18)
  assert.equal(result.departureAt.getMinutes(), 45)
  assert.equal(result.departureAt.getFullYear(), 2030)
  assert.equal(result.departureAt.getMonth(), 11)
  assert.equal(result.departureAt.getDate(), 31)
})

test('normalizes AM/PM flight times', () => {
  const result = extractTicketFields('Origin: Delhi\nDestination: Mumbai\nTravel date: 2027-01-03\nTime: 7:05 PM\nAIRLINE')
  assert.equal(result.source, 'Delhi')
  assert.equal(result.destination, 'Mumbai')
  assert.equal(result.transportMode, 'FLIGHT')
  assert.equal(result.departureAt.getHours(), 19)
  assert.equal(result.departureAt.getMinutes(), 5)
})

test('keeps missing fields explicit for review correction', () => {
  const result = extractTicketFields('BUS TICKET\nDate: 2028-04-01')
  assert.equal(result.source, null)
  assert.equal(result.destination, null)
  assert.equal(result.transportMode, 'BUS')
  assert.equal(result.departureAt.getFullYear(), 2028)
  assert.equal(result.departureAt.getMonth(), 3)
  assert.equal(result.departureAt.getDate(), 1)
})

test('extracts Indian railway e-ticket station labels', () => {
  const result = extractTicketFields('IRCTC e-Ticket\nPNR: 1234567890\nTrain: 12627 Karnataka Express\nFrom Station: Bengaluru (SBC)\nTo Station: New Delhi (NDLS)\nDate of Journey: 15/08/2030\nDeparture: 21:10')
  assert.equal(result.source, 'Bengaluru (SBC)')
  assert.equal(result.destination, 'New Delhi (NDLS)')
  assert.equal(result.transportMode, 'TRAIN')
  assert.equal(result.departureAt.getHours(), 21)
  assert.equal(result.departureAt.getMinutes(), 10)
})

test('extracts station pairs when OCR puts route on one line', () => {
  const result = extractTicketFields('TRAIN E-TICKET\nBengaluru (SBC) to Chennai Central (MAS)\nJourney Date: 2029-11-02')
  assert.equal(result.source, 'Bengaluru (SBC)')
  assert.equal(result.destination, 'Chennai Central (MAS)')
  assert.equal(result.transportMode, 'TRAIN')
})

test('recovers duplicated railway columns and ignores the To label as source', () => {
  const result = extractTicketFields('From\nTo\nDestination\nKATPADI JN. (KPD) KATPADI JN. (KPD) DANAPUR (DNR)\nDate of Journey: 18.04.2029\nDeparture Time: 21.35')
  assert.equal(result.source, 'KATPADI JN. (KPD)')
  assert.equal(result.destination, 'DANAPUR (DNR)')
  assert.equal(result.departureAt.getDate(), 18)
  assert.equal(result.departureAt.getMonth(), 3)
  assert.equal(result.departureAt.getHours(), 21)
  assert.equal(result.departureAt.getMinutes(), 35)
})
