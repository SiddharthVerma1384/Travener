import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/trip.css'
import { apiRequest } from '../api/client'
import { SHAREABLE_MODE_OPTIONS } from '../utils/travel-prefill'

export default function CreateTripLive() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    source: '',
    destination: '',
    travelDate: '',
    departureTime: '',
    transportMode: 'CAB',
    availableSeats: 1,
  })
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const change = (event) =>
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))

  const submit = async (event) => {
    event.preventDefault()
    setError('')
    setBusy(true)
    try {
      const localDeparture = new Date(`${form.travelDate}T${form.departureTime}`)
      if (Number.isNaN(localDeparture.getTime())) throw new Error('Enter a valid departure date and time.')
      await apiRequest('/create-travel-offers', {
        method: 'POST',
        body: JSON.stringify({
          source: form.source,
          destination: form.destination,
          departureAt: localDeparture.toISOString(),
          transportMode: form.transportMode,
          availableSeats: Number(form.availableSeats),
        }),
      })
      navigate('/dashboard')
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="trip-page">
      <header className="dashboard-header">
        <Link to="/" className="dashboard-logo"><span className="logo-icon">T</span><span>Travener</span></Link>
        <Link to="/dashboard" className="back-dashboard">← Dashboard</Link>
      </header>
      <main className="trip-content">
        <div className="trip-heading">
          <p className="section-label">OFFER A RIDE</p>
          <h1>Create a trip</h1>
          <p>Share your route with travellers heading the same way.</p>
        </div>
        <form className="trip-form" onSubmit={submit}>
          <div className="form-section">
            <h2>Route</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="offer-source">Pickup location</label>
                <input id="offer-source" name="source" value={form.source} onChange={change} required />
              </div>
              <div className="form-group">
                <label htmlFor="offer-destination">Destination city</label>
                <input id="offer-destination" name="destination" value={form.destination} onChange={change} required />
              </div>
            </div>
          </div>
          <div className="form-section">
            <h2>Departure</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="offer-date">Date</label>
                <input id="offer-date" type="date" name="travelDate" value={form.travelDate} onChange={change} required />
              </div>
              <div className="form-group">
                <label htmlFor="offer-time">Local time</label>
                <input id="offer-time" type="time" name="departureTime" value={form.departureTime} onChange={change} required />
              </div>
            </div>
            <p className="departure-tolerance">Matches are considered within 30 minutes of your departure time.</p>
          </div>
          <div className="form-section">
            <h2>Ride and seats</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="offer-mode">Shareable ride mode</label>
                <select id="offer-mode" name="transportMode" value={form.transportMode} onChange={change}>
                  {SHAREABLE_MODE_OPTIONS.map((mode) => <option key={mode.value} value={mode.value}>{mode.label}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="offer-seats">Available seats</label>
                <input id="offer-seats" type="number" name="availableSeats" min="1" max="8" value={form.availableSeats} onChange={change} required />
              </div>
            </div>
          </div>
          {error && <p className="auth-error" role="alert">{error}</p>}
          <div className="trip-submit"><button type="submit" className="hero-btn" disabled={busy}>{busy ? 'Publishing…' : 'Offer ride →'}</button></div>
        </form>
      </main>
    </div>
  )
}
