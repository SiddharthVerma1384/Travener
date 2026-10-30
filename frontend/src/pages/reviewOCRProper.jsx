import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { confirmOCR } from '../api/documents'
import { createSearchPrefill, getLocalDateTime } from '../utils/travel-prefill'
import '../styles/ocr.css'

export default function ReviewOCRProper() {
  const location = useLocation(); const navigate = useNavigate(); const data = location.state?.ocrData
  const fallbackDeparture = getLocalDateTime(data?.departureAt)
  const [form, setForm] = useState({
    source: data?.source || '',
    destination: data?.destination || '',
    travelDate: typeof data?.travelDate === 'string' ? data.travelDate : fallbackDeparture.date,
    departureTime: typeof data?.departureTime === 'string' ? data.departureTime : fallbackDeparture.time,
    transportType: data?.transportMode || '',
  })
  const [busy, setBusy] = useState(false); const [error, setError] = useState('')
  if (!data) return <main className="ocr-content"><div className="review-card"><h1>No ticket data found</h1><p>Upload a ticket before opening the review.</p><Link to="/upload-ticket" className="hero-btn">Upload Ticket →</Link></div></main>
  const change = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  const submit = async (event) => {
    event.preventDefault(); setBusy(true); setError('')
    try {
      const localDeparture = new Date(`${form.travelDate}T${form.departureTime}`)
      if (Number.isNaN(localDeparture.getTime())) throw new Error('Enter a valid departure date and time.')
      const result = await confirmOCR(data.documentId, { corrections: { source: form.source, destinationHub: { name: form.destination }, travelDate: form.travelDate, departureTime: form.departureTime, departureAt: localDeparture.toISOString(), transportType: form.transportType } })
      navigate('/search-trips', {
        state: {
          prefill: createSearchPrefill({
            ...result.data,
            travelDate: form.travelDate,
            departureTime: form.departureTime,
          }),
        },
      })
    } catch (err) { setError(err.message) } finally { setBusy(false) }
  }
  return <div className="ocr-page"><header className="dashboard-header"><Link to="/" className="dashboard-logo">Travener</Link><Link to="/search-trips" className="back-dashboard">← Find a Trip</Link></header><main className="ocr-content"><div className="ocr-heading"><p className="section-label">REVIEW YOUR JOURNEY</p><h1>Check your travel details</h1><p>OCR is an assistant. Confirm every field before continuing.</p></div><form className="review-card" onSubmit={submit}><div className="form-group"><label htmlFor="ocr-source">Ticket origin</label><input id="ocr-source" name="source" value={form.source} onChange={change} required /></div><div className="form-group"><label htmlFor="ocr-destination">Destination city</label><input id="ocr-destination" name="destination" value={form.destination} onChange={change} required />{!form.destination && <small>Destination was not detected. Enter it manually.</small>}</div><div className="form-row"><div className="form-group"><label htmlFor="ocr-date">Travel date</label><input id="ocr-date" type="date" name="travelDate" value={form.travelDate} onChange={change} required />{!form.travelDate && <small>Departure date was not detected. Choose it manually.</small>}</div><div className="form-group"><label htmlFor="ocr-time">Departure time</label><input id="ocr-time" type="time" name="departureTime" value={form.departureTime} onChange={change} required />{!form.departureTime && <small>Departure time was not detected. Choose it manually.</small>}</div></div><div className="form-group"><label htmlFor="ocr-transport">Ticket transport mode</label><select id="ocr-transport" name="transportType" value={form.transportType} onChange={change} required><option value="">Select mode</option><option value="BUS">Bus</option><option value="TRAIN">Train</option><option value="FLIGHT">Flight</option><option value="CAB">Cab</option><option value="AUTO">Auto</option><option value="CAR">Car</option><option value="OTHER">Other</option></select><small>This is the mode printed on your ticket; ride sharing supports cab or auto.</small></div>{error && <p className="ocr-error" role="alert">{error}</p>}<div className="review-actions"><Link to="/upload-ticket" className="review-cancel-btn">Upload Another</Link><button className="ocr-upload-btn" disabled={busy}>{busy ? 'Confirming...' : 'Confirm & Continue →'}</button></div></form></main></div>
}
