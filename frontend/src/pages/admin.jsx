import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiRequest } from '../api/client'
import '../styles/dashboard.css'

const nextStatuses = {
  OPEN: ['REVIEWED', 'RESOLVED', 'DISMISSED'],
  REVIEWED: ['RESOLVED', 'DISMISSED'],
  RESOLVED: [],
  DISMISSED: [],
}

export default function Admin() {
  const [reports, setReports] = useState([])
  const [statusChoices, setStatusChoices] = useState({})
  const [error, setError] = useState('')
  const [savingId, setSavingId] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    apiRequest('/journeys/admin/reports')
      .then((result) => {
        if (active) setReports(result.data || [])
      })
      .catch((loadError) => {
        if (active) setError(loadError.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => { active = false }
  }, [])

  const updateStatus = async (reportId) => {
    const status = statusChoices[reportId]
    if (!status || savingId) return
    setSavingId(reportId)
    setError('')
    try {
      const result = await apiRequest(`/journeys/admin/reports/${reportId}`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      })
      setReports((current) => current.map((report) => report.id === reportId ? result.data : report))
      setStatusChoices((current) => ({ ...current, [reportId]: '' }))
    } catch (updateError) {
      setError(updateError.message)
    } finally {
      setSavingId('')
    }
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <Link to="/dashboard" className="dashboard-logo">Travener Admin</Link>
        <Link to="/dashboard" className="back-dashboard">← Dashboard</Link>
      </header>
      <main className="dashboard-content">
        <div className="dashboard-heading">
          <p className="section-label">ADMIN</p>
          <h1>Reports queue</h1>
          <p>Review reports and record their current status.</p>
        </div>
        {error && <p className="auth-error" role="alert">{error}</p>}
        <section className="activity">
          {loading ? (
            <div className="empty-activity"><p>Loading reports…</p></div>
          ) : reports.length === 0 ? (
            <div className="empty-activity"><h3>No reports</h3><p>Submitted safety reports will appear here.</p></div>
          ) : reports.map((report) => {
            const options = nextStatuses[report.status] || []
            return (
              <article className="request-row" key={report.id}>
                <div>
                  <strong>{report.reason}</strong>
                  <p>Filed by {report.author.name} against {report.subject.name}</p>
                  <small>{new Date(report.createdAt).toLocaleString()}</small>
                  <p><span className={`request-status request-status-${report.status.toLowerCase()}`}>{report.status}</span></p>
                </div>
                {options.length > 0 && (
                  <div className="request-actions">
                    <label htmlFor={`report-status-${report.id}`}>Update status</label>
                    <select id={`report-status-${report.id}`} value={statusChoices[report.id] || ''} onChange={(event) => setStatusChoices((current) => ({ ...current, [report.id]: event.target.value }))}>
                      <option value="">Choose status</option>
                      {options.map((status) => <option value={status} key={status}>{status}</option>)}
                    </select>
                    <button className="dashboard-btn" onClick={() => updateStatus(report.id)} disabled={!statusChoices[report.id] || savingId === report.id}>
                      {savingId === report.id ? 'Saving…' : 'Save status'}
                    </button>
                  </div>
                )}
              </article>
            )
          })}
        </section>
      </main>
    </div>
  )
}
