import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { uploadTicket } from '../api/documents'
import '../styles/ocr.css'

export default function UploadTicketLive() {
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const choose = (event) => {
    const next = event.target.files[0]
    setError('')
    if (!next) return
    if (!['application/pdf', 'image/jpeg', 'image/png', 'image/webp'].includes(next.type)) return setError('Choose a PDF, JPG, PNG, or WEBP ticket.')
    if (next.size > 10 * 1024 * 1024) return setError('Ticket file must be smaller than 10 MB.')
    setFile(next)
  }
  const submit = async () => {
    if (!file) return setError('Choose a ticket first.')
    setBusy(true); setError('')
    try {
      const result = await uploadTicket(file)
      if (result.data.ocrStatus !== 'COMPLETED') throw new Error('OCR did not complete.')
      navigate('/review-ocr', { state: { ocrData: { documentId: result.data.documentId, ...result.data.extractedData } } })
    } catch (err) { setError(err.message) } finally { setBusy(false) }
  }
  return <div className="ocr-page"><header className="dashboard-header"><Link to="/" className="dashboard-logo"><div className="logo-icon">T</div><span>Travener</span></Link><Link to="/search-trips" className="back-dashboard">← Find a Trip</Link></header><main className="ocr-content"><div className="ocr-heading"><p className="section-label">UPLOAD TICKET</p><h1>Let Travener read your ticket</h1><p>Upload a ticket, review the extracted journey and continue to matching.</p></div><div className="upload-card"><div className="upload-icon">📄</div><h2>Upload your ticket</h2><p>PDF, JPG, PNG, or WEBP · max 10 MB</p><label className="file-select-btn">Choose Ticket<input type="file" accept=".pdf,.jpg,.jpeg,.png,.webp" onChange={choose} hidden /></label>{file && <div className="selected-file"><span>📎</span><strong>{file.name}</strong></div>}{error && <p className="ocr-error">{error}</p>}<button className="ocr-upload-btn" onClick={submit} disabled={!file || busy}>{busy ? 'Processing ticket...' : 'Upload & Extract Details →'}</button></div></main></div>
}
