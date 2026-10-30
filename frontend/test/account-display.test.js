import test from 'node:test'
import assert from 'node:assert/strict'
import { getInitials } from '../src/utils/account-display.js'

test('creates an initials avatar from the authenticated account name', () => {
  assert.equal(getInitials('Sadaf Khan'), 'SK')
  assert.equal(getInitials('  Sadaf   '), 'S')
  assert.equal(getInitials(''), '?')
})
