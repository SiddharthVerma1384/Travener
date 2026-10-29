import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/auth.css'
import '../styles/live.css'
import { apiRequest } from '../api/client'
import { API_BASE_URL } from '../api/config'

export default function LoginLive() {
  const navigate = useNavigate(); const popup = useRef(null); const [form, setForm] = useState({ email: '', password: '' }); const [error, setError] = useState(''); const [oauthLoading, setOauthLoading] = useState(false)
  const submit = async (event) => { event.preventDefault(); setError(''); try { await apiRequest('/auth/login', { method: 'POST', body: JSON.stringify(form) }); navigate('/dashboard') } catch (err) { setError(err.message) } }
  const googleLogin = () => { setError(''); setOauthLoading(true); popup.current = window.open(`${API_BASE_URL}/auth/google`, 'travener-google-login', 'width=520,height=680'); }
  useEffect(() => { if (!oauthLoading) return undefined; const timer = window.setInterval(async () => { try { await apiRequest('/auth/current-user'); window.clearInterval(timer); setOauthLoading(false); if (popup.current && !popup.current.closed) popup.current.close(); navigate('/dashboard') } catch { if (popup.current?.closed) { window.clearInterval(timer); setOauthLoading(false); setError('Google sign-in was cancelled or could not be completed.') } } }, 1000); return () => window.clearInterval(timer) }, [oauthLoading, navigate])
  return <div className="auth-page"><div className="auth-card"><Link to="/" className="auth-logo"><div className="logo-icon">T</div><span>Travener</span></Link><div className="auth-heading"><h1>Welcome back!</h1><p>Continue your journey with Travener.</p></div><button type="button" className="oauth-btn" onClick={googleLogin} disabled={oauthLoading}>{oauthLoading ? 'Waiting for Google…' : 'Continue with Google'}</button><div className="auth-divider"><span>or use email</span></div><form onSubmit={submit}><div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></div><div className="form-group"><label>Password</label><input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required /></div>{error && <p className="auth-error">{error}</p>}<button type="submit" className="auth-btn">Log in</button></form><p className="auth-footer">Don't have an account? <Link to="/signup">Sign up</Link></p></div></div>
}
