import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/dashboard.css'
import '../styles/live.css'
import '../styles/journey-chat.css'
import '../styles/dashboard-intent.css'
import { apiRequest } from '../api/client'
import { getInitials } from '../utils/account-display'

const formatDate = (value) => new Date(value).toLocaleString()

export default function DashboardProper() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [requests, setRequests] = useState([])
  const [travelRequests, setTravelRequests] = useState([])
  const [profile, setProfile] = useState({ phoneNumber: '', gender: 'PREFER_NOT_TO_SAY' })
  const [error, setError] = useState('')
  const [cancellingId, setCancellingId] = useState('')

  const load = useCallback(async () => {
    try {
      const [account, companionResult, travelResult] = await Promise.all([
        apiRequest('/auth/current-user'),
        apiRequest('/companion-requests'),
        apiRequest('/travel-requests/mine'),
      ])
      setUser(account.data)
      setRequests(companionResult.data || [])
      setTravelRequests(travelResult.data || [])
    } catch (loadError) {
      if (loadError.message.toLowerCase().includes('unauthorized')) navigate('/login')
      else setError(loadError.message)
    }
  }, [navigate])

  useEffect(() => {
    let active = true
    Promise.all([
      apiRequest('/auth/current-user'),
      apiRequest('/companion-requests'),
      apiRequest('/travel-requests/mine'),
    ])
      .then(([account, companionResult, travelResult]) => {
        if (!active) return
        setUser(account.data)
        setRequests(companionResult.data || [])
        setTravelRequests(travelResult.data || [])
      })
      .catch((loadError) => {
        if (!active) return
        if (loadError.message.toLowerCase().includes('unauthorized')) navigate('/login')
        else setError(loadError.message)
      })
    return () => { active = false }
  }, [navigate])

  const saveProfile = async (event) => {
    event.preventDefault()
    setError('')
    try {
      await apiRequest('/profile', { method: 'PATCH', body: JSON.stringify(profile) })
      await load()
    } catch (saveError) {
      setError(saveError.message)
    }
  }

  const respond = async (id, status) => {
    setError('')
    try {
      await apiRequest(`/companion-requests/${id}/respond`, { method: 'PATCH', body: JSON.stringify({ status }) })
      await load()
    } catch (responseError) {
      setError(responseError.message)
    }
  }

  const cancelRequest = async (id) => {
    setCancellingId(id)
    setError('')
    try {
      await apiRequest(`/travel-requests/${id}/cancel`, { method: 'PATCH' })
      await load()
    } catch (cancelError) {
      setError(cancelError.message)
    } finally {
      setCancellingId('')
    }
  }

  const logout = async () => {
    setError('')
    try {
      await apiRequest('/auth/logout', { method: 'POST' })
      navigate('/')
    } catch (logoutError) {
      setError(logoutError.message)
    }
  }

  if (!user) return <div className="auth-page">Loading Travener…</div>

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <Link to="/" className="dashboard-logo">Travener</Link>
        <div className="dashboard-user">
          <span>Welcome, {user.name}</span>
          <button className="link-button" onClick={logout}>Log out</button>
        </div>
      </header>
      <main className="dashboard-content">
        <section className="account-identity" aria-label="Signed-in account">
          <div className="account-avatar" aria-hidden="true">{getInitials(user.name)}</div>
          <div className="account-details">
            <p className="section-label">YOUR ACCOUNT</p>
            <h1>{user.name || 'Travener member'}</h1>
            <p>{user.email || 'Email not available'}</p>
            <span className={`account-profile-status ${user.profileCompleted ? 'complete' : ''}`}>
              {user.profileCompleted ? 'Profile complete' : 'Profile incomplete'}
            </span>
          </div>
        </section>

        <div className="dashboard-heading">
          <p className="section-label">YOUR JOURNEY</p>
          <h2>Where are you going?</h2>
          <p>Choose your travel intent, scan a ticket, or open a confirmed conversation.</p>
        </div>

        {!user.profileCompleted && (
          <form className="profile-card" onSubmit={saveProfile}>
            <h2>Complete your profile</h2>
            <p>Finish this step before matching with companions.</p>
            <label htmlFor="profile-phone">Phone number</label>
            <input id="profile-phone" placeholder="10-digit phone number" value={profile.phoneNumber} onChange={(event) => setProfile({ ...profile, phoneNumber: event.target.value })} required />
            <label htmlFor="profile-gender">Gender</label>
            <select id="profile-gender" value={profile.gender} onChange={(event) => setProfile({ ...profile, gender: event.target.value })}>
              <option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
              <option value="FEMALE">Female</option>
              <option value="MALE">Male</option>
              <option value="NON_BINARY">Non-binary</option>
            </select>
            <button className="dashboard-btn">Save profile</button>
          </form>
        )}

        {error && <p className="auth-error" role="alert">{error}</p>}

        <div className="dashboard-actions">
          <div className="dashboard-card">
            <div className="dashboard-card-icon">+</div>
            <div><h2>I have transport</h2><p>Offer spare seats on an upcoming journey.</p></div>
            <Link to="/create-trip" className="dashboard-btn">Create offer →</Link>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-icon">⌕</div>
            <div><h2>I need transport</h2><p>Create a request and find ranked candidates.</p></div>
            <Link to="/search-trips" className="dashboard-btn">Find matches →</Link>
          </div>
        </div>

        <section className="ocr-intent-panel">
          <div><p className="section-label">TICKET OCR</p><h2>Already have your travel ticket?</h2><p>Scan it once and use the extracted destination and time for your ride search.</p></div>
          <div className="ocr-intent-buttons">
            <Link to="/upload-ticket" className="dashboard-btn">I need transport · Scan ticket</Link>
            <Link to="/upload-ticket" className="dashboard-btn secondary-btn">I have transport · Scan ticket</Link>
          </div>
        </section>

        <section className="activity">
          <div className="activity-header"><h2>Your ride requests</h2><span>{travelRequests.length} recent</span></div>
          {travelRequests.length === 0 ? (
            <div className="empty-activity"><h3>No ride requests yet</h3><p>Requests you create will appear here with their current status.</p></div>
          ) : travelRequests.map((request) => (
            <article className="request-row active-travel-request" key={request.id}>
              <div>
                <strong>{request.source} → {request.destination}</strong>
                <p>{formatDate(request.departureAt)} · {request.transportMode || 'Cab or Auto'}</p>
                <span className={`request-status request-status-${request.status.toLowerCase()}`}>{request.status}</span>
              </div>
              <div className="request-actions">
                {request.canCancel && <button className="reject-btn" onClick={() => cancelRequest(request.id)} disabled={cancellingId === request.id}>{cancellingId === request.id ? 'Cancelling…' : 'Cancel request'}</button>}
              </div>
            </article>
          ))}
        </section>

        <section className="activity">
          <div className="activity-header"><h2>Companion requests</h2><span>{requests.length} total</span></div>
          {requests.length === 0 ? (
            <div className="empty-activity"><h3>No companion requests yet</h3><p>Pending and resolved companion requests will appear here.</p></div>
          ) : requests.map((request) => (
            <article className="request-row accepted-user-row" key={request.id}>
              <div>
                <strong>{request.senderId === user.id ? 'You sent a request' : `${request.sender?.name || 'A traveller'} wants to travel with you`}</strong>
                <p>{request.offer?.source} → {request.offer?.destination} · {request.status}</p>
                {request.departureCompatibility && <p>Departure difference: {Math.round(request.departureCompatibility.differenceMinutes)} min · matching window: {request.departureCompatibility.toleranceMinutes} min</p>}
              </div>
              <div className="request-actions">
                {request.recipientId === user.id && request.status === 'PENDING' && <>
                  <button className="dashboard-btn" onClick={() => respond(request.id, 'ACCEPTED')}>Accept</button>
                  <button className="reject-btn" onClick={() => respond(request.id, 'REJECTED')}>Reject</button>
                </>}
                {request.status === 'ACCEPTED' && <Link to="/journeys" className="chat-icon-button" aria-label="Open chat" title="Open chat">💬<span>Chat</span></Link>}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
