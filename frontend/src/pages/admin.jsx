import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiRequest } from '../api/client'
import '../styles/dashboard.css'

export default function Admin() {
  const [reports, setReports] = useState([]); const [error, setError] = useState('')
  useEffect(() => { apiRequest('/journeys/admin/reports').then((result) => setReports(result.data)).catch((err) => setError(err.message)) }, [])
  return <div className="dashboard"><header className="dashboard-header"><Link to="/dashboard" className="dashboard-logo">Travener Admin</Link></header><main className="dashboard-content"><div className="dashboard-heading"><p className="section-label">ADMIN</p><h1>Reports queue</h1><p>Review safety reports submitted by Travener users.</p></div>{error && <p className="auth-error">{error}</p>}<section className="activity">{reports.length === 0 ? <div className="empty-activity"><h3>No reports</h3></div> : reports.map((report) => <article className="request-row" key={report.id}><div><strong>{report.reason}</strong><p>Filed by {report.author.name} against {report.subject.name} · {report.status}</p><small>{new Date(report.createdAt).toLocaleString()}</small></div></article>)}</section></main></div>
}
