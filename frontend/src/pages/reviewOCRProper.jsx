import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { confirmOCR } from '../api/documents'
import '../styles/ocr.css'

const localDate = (value) => {
  const date = value ? new Date(value) : null
  if (!date || Number.isNaN(date.getTime())) return ''
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}
const localTime = (value) => {
  const date = value ? new Date(value) : null
  if (!date || Number.isNaN(date.getTime())) return ''
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
}

export default function ReviewOCRProper() {
  const location = useLocation(); const navigate = useNavigate(); const data = location.state?.ocrData
  const [form, setForm] = useState({ source: data?.source || '', destination: data?.destination || '', travelDate: localDate(data?.departureAt), departureTime: localTime(data?.departureAt), transportType: data?.transportMode || '' })
  const [busy, setBusy] = useState(false); const [error, setError] = useState('')
  if (!data) return <main className="ocr-content"><div className="review-card"><h1>No ticket data found</h1><p>Upload a ticket before opening the review.</p><Link to="/upload-ticket" className="hero-btn">Upload Ticket →</Link></div></main>
  const change = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  const submit = async (event) => {
    event.preventDefault(); setBusy(true); setError('')
    try {
      const result = await confirmOCR(data.documentId, { corrections: { source: form.source, destinationHub: { name: form.destination }, travelDate: form.travelDate, departureTime: form.departureTime, transportType: form.transportType } })
      navigate('/search-trips', { state: { prefill: { source: result.data.source, destination: result.data.destination, departureAt: result.data.departureAt, transportMode: result.data.transportMode } } })
    } catch (err) { setError(err.message) } finally { setBusy(false) }
  }
  return <div className="ocr-page"><header className="dashboard-header"><Link to="/" className="dashboard-logo">Travener</Link><Link to="/search-trips" className="back-dashboard">← Find a Trip</Link></header><main className="ocr-content"><div className="ocr-heading"><p className="section-label">REVIEW YOUR JOURNEY</p><h1>Check your travel details</h1><p>OCR is an assistant. Confirm every field before continuing.</p></div><form className="review-card" onSubmit={submit}><div className="form-group"><label>From</label><input name="source" value={form.source} onChange={change} required /></div><div className="form-group"><label>Destination</label><input name="destination" value={form.destination} onChange={change} required /></div><div className="form-group"><label>Travel date</label><input type="date" name="travelDate" value={form.travelDate} onChange={change} required /></div><div className="form-group"><label>Departure time</label><input type="time" name="departureTime" value={form.departureTime} onChange={change} required /></div><div className="form-group"><label>Transport mode</label><select name="transportType" value={form.transportType} onChange={change} required><option value="">Select mode</option><option value="BUS">Bus</option><option value="TRAIN">Train</option><option value="FLIGHT">Flight</option><option value="CAB">Cab</option><option value="CAR">Car</option><option value="OTHER">Other</option></select></div>{error && <p className="ocr-error">{error}</p>}<div className="review-actions"><Link to="/upload-ticket" className="review-cancel-btn">Upload Another</Link><button className="ocr-upload-btn" disabled={busy}>{busy ? 'Confirming...' : 'Confirm & Continue →'}</button></div></form></main></div>
}
