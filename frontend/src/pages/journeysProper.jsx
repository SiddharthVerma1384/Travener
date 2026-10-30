import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiRequest } from '../api/client'
import '../styles/dashboard.css'
import '../styles/live.css'
import '../styles/journey-chat.css'

const routeFor = (journey) => journey.companionRequest?.offer || journey.companionRequest?.travelRequest || {}
const displayStatus = (status) => status.replaceAll('_', ' ')

export default function JourneysProper() {
  const navigate = useNavigate()
  const [journeys, setJourneys] = useState([])
  const [selected, setSelected] = useState(null)
  const [messages, setMessages] = useState([])
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(true)
  const [chatLoading, setChatLoading] = useState(false)
  const [sending, setSending] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState('')
  const [stars, setStars] = useState(5)
  const [comment, setComment] = useState('')
  const [reason, setReason] = useState('')
  const endRef = useRef(null)
  const selectedId = selected?.id

  const loadJourneys = useCallback(async () => {
    try {
      const result = await apiRequest('/journeys')
      const next = result.data || []
      setJourneys(next)
      setSelected((current) => {
        if (!current) return current
        const refreshed = next.find((item) => item.id === current.id)
        return refreshed ? { ...current, ...refreshed } : null
      })
    } catch (loadError) {
      if (loadError.message.toLowerCase().includes('unauthorized')) navigate('/login')
      else setError(loadError.message)
    } finally {
      setLoading(false)
    }
  }, [navigate])

  const loadMessages = useCallback(async (journeyId, silent = false) => {
    try {
      const result = await apiRequest(`/journeys/${journeyId}/messages`)
      setMessages(result.data || [])
    } catch (loadError) {
      if (!silent) setError(loadError.message)
    } finally {
      if (!silent) setChatLoading(false)
    }
  }, [])

  useEffect(() => {
    let active = true
    apiRequest('/journeys')
      .then((result) => {
        if (!active) return
        const next = result.data || []
        setJourneys(next)
        setSelected((current) => {
          if (!current) return current
          const refreshed = next.find((item) => item.id === current.id)
          return refreshed ? { ...current, ...refreshed } : null
        })
      })
      .catch((loadError) => {
        if (!active) return
        if (loadError.message.toLowerCase().includes('unauthorized')) navigate('/login')
        else setError(loadError.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => { active = false }
  }, [navigate])

  useEffect(() => {
    if (!selectedId) return undefined
    let active = true
    const fetchMessages = () => apiRequest(`/journeys/${selectedId}/messages`)
      .then((result) => {
        if (active) setMessages(result.data || [])
      })
      .catch((loadError) => {
        if (active) setError(loadError.message)
      })
      .finally(() => {
        if (active) setChatLoading(false)
      })
    void fetchMessages()
    const timer = window.setInterval(fetchMessages, 5000)
    return () => {
      active = false
      window.clearInterval(timer)
    }
  }, [selectedId])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages.length])

  const send = async (event) => {
    event.preventDefault()
    const text = body.trim()
    if (!text || !selected || sending) return
    setSending(true)
    setError('')
    try {
      await apiRequest(`/journeys/${selected.id}/messages`, { method: 'POST', body: JSON.stringify({ body: text }) })
      setBody('')
      await loadMessages(selected.id, true)
    } catch (sendError) {
      setError(sendError.message)
    } finally {
      setSending(false)
    }
  }

  const update = async (status) => {
    if (!selected || updating) return
    setUpdating(true)
    setError('')
    try {
      await apiRequest(`/journeys/${selected.id}`, { method: 'PATCH', body: JSON.stringify({ status }) })
      await loadJourneys()
    } catch (updateError) {
      setError(updateError.message)
    } finally {
      setUpdating(false)
    }
  }

  const submitRating = async (event) => {
    event.preventDefault()
    try {
      await apiRequest(`/journeys/${selected.id}/rating`, { method: 'POST', body: JSON.stringify({ stars: Number(stars), comment: comment.trim() }) })
      setComment('')
      setError('Rating submitted.')
    } catch (ratingError) {
      setError(ratingError.message)
    }
  }

  const submitReport = async (event) => {
    event.preventDefault()
    try {
      const result = await apiRequest(`/journeys/${selected.id}/report`, { method: 'POST', body: JSON.stringify({ reason: reason.trim() }) })
      setReason('')
      setError(`Report submitted — ${result.data.status}.`)
    } catch (reportError) {
      setError(reportError.message)
    }
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <Link to="/dashboard" className="dashboard-logo">Travener</Link>
        <Link to="/dashboard" className="back-dashboard">← Dashboard</Link>
      </header>
      <main className="dashboard-content">
        <div className="dashboard-heading">
          <p className="section-label">YOUR JOURNEYS</p>
          <h1>Confirmed companions</h1>
          <p>Accepted requests become confirmed journeys. Move them through the trip stages as they happen.</p>
        </div>
        {error && <p className="auth-error" role="status">{error}</p>}
        {loading ? (
          <div className="empty-activity"><p>Loading journeys…</p></div>
        ) : (
          <section className="activity journey-grid">
            <div className="journey-list">
              {journeys.length === 0 ? (
                <div className="empty-activity"><h3>No confirmed journeys</h3><p>Accepted companion requests will appear here.</p></div>
              ) : journeys.map((journey) => {
                const route = routeFor(journey)
                return (
                  <button className={`journey-item ${selected?.id === journey.id ? 'active' : ''}`} key={journey.id} onClick={() => { setError(''); setSelected(journey); setMessages([]); setChatLoading(true) }}>
                    <strong>{route.source} → {route.destination}</strong>
                    <span>{displayStatus(journey.status)}</span>
                    <small>{route.departureAt ? new Date(route.departureAt).toLocaleString() : 'Departure pending'}</small>
                  </button>
                )
              })}
            </div>
            {selected && (
              <section className="chat-window">
                <div className="chat-header">
                  <div>
                    <h2>{routeFor(selected).source} → {routeFor(selected).destination}</h2>
                    <p>{displayStatus(selected.status)}</p>
                    {selected.companionRequest?.departureCompatibility && <p>Departure difference: {Math.round(selected.companionRequest.departureCompatibility.differenceMinutes)} min · matching window: {selected.companionRequest.departureCompatibility.toleranceMinutes} min</p>}
                  </div>
                  <button className="chat-close" onClick={() => setSelected(null)} aria-label="Close chat">×</button>
                </div>
                <div className="chat-messages" aria-live="polite">
                  {chatLoading ? <p className="chat-state">Loading messages…</p> : messages.length === 0 ? <p className="chat-state">No messages yet. Say hello.</p> : messages.map((message) => (
                    <div className={`chat-message ${message.senderId === selected.companionRequest?.senderId ? 'mine' : 'theirs'}`} key={message.id}>
                      <span>{message.sender?.name || 'Companion'}</span>
                      <p>{message.body}</p>
                      <time>{new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>
                    </div>
                  ))}
                  <div ref={endRef} />
                </div>
                <form className="chat-composer" onSubmit={send}>
                  <input value={body} onChange={(event) => setBody(event.target.value)} placeholder="Write a message…" maxLength={1000} disabled={sending || ['COMPLETED', 'CANCELLED'].includes(selected.status)} />
                  <button className="dashboard-btn" disabled={!body.trim() || sending || ['COMPLETED', 'CANCELLED'].includes(selected.status)}>{sending ? 'Sending…' : 'Send'}</button>
                </form>
                <div className="journey-actions">
                  {selected.status === 'CONFIRMED' && <button className="dashboard-btn" onClick={() => update('IN_PROGRESS')} disabled={updating}>{updating ? 'Updating…' : 'Start journey'}</button>}
                  {selected.status === 'IN_PROGRESS' && <button className="dashboard-btn" onClick={() => update('COMPLETED')} disabled={updating}>{updating ? 'Updating…' : 'Mark complete'}</button>}
                  {['CONFIRMED', 'IN_PROGRESS'].includes(selected.status) && <button className="reject-btn" onClick={() => update('CANCELLED')} disabled={updating}>Cancel journey</button>}
                  {selected.status === 'COMPLETED' && (
                    <div className="chat-followups">
                      <form onSubmit={submitRating}>
                        <h3>Rate companion</h3>
                        <select value={stars} onChange={(event) => setStars(event.target.value)}><option value="5">5 stars</option><option value="4">4 stars</option><option value="3">3 stars</option><option value="2">2 stars</option><option value="1">1 star</option></select>
                        <input value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Optional comment" />
                        <button className="dashboard-btn">Submit rating</button>
                      </form>
                      <form onSubmit={submitReport}>
                        <h3>Report an issue</h3>
                        <input value={reason} onChange={(event) => setReason(event.target.value)} placeholder="Describe the issue" required />
                        <button className="reject-btn">Report</button>
                      </form>
                    </div>
                  )}
                </div>
              </section>
            )}
          </section>
        )}
      </main>
    </div>
  )
}
