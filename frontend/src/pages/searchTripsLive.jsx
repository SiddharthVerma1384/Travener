import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../styles/search.css'
import '../styles/live.css'
import { apiRequest } from '../api/client'
import { createSearchPrefill, SHAREABLE_MODE_OPTIONS } from '../utils/travel-prefill'

const getExistingRequest = (error) =>
  error.details?.find((detail) => detail.existingRequest)?.existingRequest

export default function SearchTripsLive() {
  const location = useLocation()
  const navigate = useNavigate()
  const [fromTicket] = useState(Boolean(location.state?.prefill))
  const [form, setForm] = useState(() => createSearchPrefill(location.state?.prefill))
  const [matches, setMatches] = useState([])
  const [requestId, setRequestId] = useState('')
  const [error, setError] = useState('')
  const [existingRequest, setExistingRequest] = useState(null)
  const [existingCompanionRequest, setExistingCompanionRequest] = useState(false)
  const [pending, setPending] = useState('')
  const [busy, setBusy] = useState(false)
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    if (location.state?.prefill) {
      navigate(location.pathname, { replace: true, state: null })
    }
  }, [location.pathname, location.state, navigate])

  const loadMatches = async (id) => {
    const result = await apiRequest(`/travel-requests/${id}/matches`)
    setRequestId(id)
    setMatches(result.data.offers)
    setSearched(true)
    setError('')
  }

  const submit = async (event) => {
    event.preventDefault()
    setBusy(true)
    setError('')
    setExistingRequest(null)
    setExistingCompanionRequest(false)
    setMatches([])
    setSearched(false)

    try {
      const localDeparture = new Date(`${form.date}T${form.time}`)
      if (Number.isNaN(localDeparture.getTime())) throw new Error('Enter a valid departure date and time.')
      const created = await apiRequest('/travel-requests', {
        method: 'POST',
        body: JSON.stringify({
          source: form.source,
          destination: form.destination,
          departureAt: localDeparture.toISOString(),
          transportMode: form.transportMode || null,
          passengersRequired: 1,
        }),
      })
      await loadMatches(created.data.id)
    } catch (requestError) {
      const duplicate = getExistingRequest(requestError)
      if (duplicate) setExistingRequest(duplicate)
      setError(requestError.message)
    } finally {
      setBusy(false)
    }
  }

  const continueExisting = async () => {
    if (!existingRequest) return
    setBusy(true)
    try {
      await loadMatches(existingRequest.id)
      setExistingRequest(null)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setBusy(false)
    }
  }

  const requestCompanion = async (offerId) => {
    setError('')
    try {
      await apiRequest('/companion-requests', {
        method: 'POST',
        body: JSON.stringify({ travelRequestId: requestId, offerId }),
      })
      setPending(offerId)
    } catch (requestError) {
      setError(requestError.message)
      setExistingCompanionRequest(requestError.details?.some((detail) => detail.existingCompanionRequest) || false)
    }
  }

  const field = (name) => (event) =>
    setForm((current) => ({ ...current, [name]: event.target.value }))

  return (
    <div className="trip-page">
      <header className="dashboard-header">
        <Link to="/" className="dashboard-logo"><span className="logo-icon">T</span><span>Travener</span></Link>
        <Link to="/dashboard" className="back-dashboard">← Dashboard</Link>
      </header>
      <main className="search-content">
        <div className="search-heading">
          <p className="section-label">FIND A TRIP</p>
          <h1>Where are you going?</h1>
          <p>Find a ride that matches your route and departure time.</p>
        </div>

        <form className="search-form" onSubmit={submit}>
          <div className="search-form-section">
            <h2>Route</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="search-source">Pickup location</label>
                <input id="search-source" value={form.source} onChange={field('source')} autoComplete="address-level2" placeholder="Where should the ride pick you up?" required />
                {fromTicket && <small>{form.ticketOrigin ? `Ticket origin: ${form.ticketOrigin}. Enter where you actually need pickup; ticket origin is not used as pickup.` : 'Enter where you actually need pickup; ticket origin is not used as pickup.'}</small>}
              </div>
              <div className="form-group">
                <label htmlFor="search-destination">Destination city</label>
                <input id="search-destination" value={form.destination} onChange={field('destination')} autoComplete="address-level2" placeholder="Enter your destination city" required />
                {fromTicket && !form.destination && <small>Ticket destination was not detected. Enter it manually.</small>}
              </div>
            </div>
          </div>

          <div className="search-form-section">
            <h2>Departure</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="search-date">Date</label>
                <input id="search-date" type="date" value={form.date} onChange={field('date')} required />
                {fromTicket && !form.date && <small>Ticket departure date was not detected. Choose a date.</small>}
              </div>
              <div className="form-group">
                <label htmlFor="search-time">Local time</label>
                <input id="search-time" type="time" value={form.time} onChange={field('time')} required />
                {fromTicket && !form.time && <small>Ticket departure time was not detected. Choose a time.</small>}
              </div>
            </div>
            <p className="departure-tolerance">Matches are considered within 30 minutes of your departure time.</p>
          </div>

          <div className="search-form-section">
            <h2>Ride preference</h2>
            <div className="form-group">
              <label htmlFor="search-mode">Shareable ride mode</label>
              <select id="search-mode" value={form.transportMode} onChange={field('transportMode')}>
                <option value="">Cab or Auto</option>
                {SHAREABLE_MODE_OPTIONS.map((mode) => <option key={mode.value} value={mode.value}>{mode.label}</option>)}
              </select>
              {fromTicket && <small>Prefilled from your ticket where compatible. You can change this at any time.</small>}
            </div>
          </div>

          {error && <div className="search-error" role="alert"><p>{error}</p>{existingRequest && <div className="existing-request"><strong>Your active request</strong><p>{existingRequest.source} → {existingRequest.destination} · {new Date(existingRequest.departureAt).toLocaleString()}</p><button type="button" className="dashboard-btn" onClick={continueExisting} disabled={busy}>{busy ? 'Loading matches…' : 'Continue with this request'}</button></div>}{existingCompanionRequest && <p>A request for this ride is already pending. <Link to="/journeys">View your journeys and requests</Link>.</p>}</div>}
          <button type="submit" className="hero-btn" disabled={busy}>{busy ? 'Finding matches…' : 'Find Matches →'}</button>
        </form>

        {searched && (
          <section className="matches" aria-live="polite">
            <h2>Matching rides</h2>
            {matches.length === 0 && <div className="empty-matches"><h3>No matching rides yet</h3><p>Try adjusting your departure time or ride preference.</p></div>}
            {matches.map((offer) => (
              <article className="match-card" key={offer.id}>
                <div className="match-card-details">
                  <h3>{offer.owner.name}</h3>
                  <p>{offer.source} → {offer.destination}</p>
                  <p>{new Date(offer.departureAt).toLocaleString()} · {offer.transportMode} · {offer.availableSeats} seats</p>
                  {offer.departureCompatibility && <p>Departure differs by {Math.round(offer.departureCompatibility.differenceMinutes)} minutes (within the {offer.departureCompatibility.toleranceMinutes}-minute matching window).</p>}
                </div>
                <button className="dashboard-btn" onClick={() => requestCompanion(offer.id)} disabled={pending === offer.id}>
                  {pending === offer.id ? 'Request sent' : 'Request companion'}
                </button>
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  )
}
