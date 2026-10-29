import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/auth.css'
import { apiRequest } from '../api/client'

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const submit = async (event) => {
    event.preventDefault()
    try { await apiRequest('/auth/login', { method: 'POST', body: JSON.stringify(form) }); navigate('/dashboard') } catch (err) { setError(err.message) }
  }
  return <div className="auth-page"><div className="auth-card"><Link to="/" className="auth-logo">Travener</Link><h1>Welcome back!</h1><form onSubmit={submit}><div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></div><div className="form-group"><label>Password</label><input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required /></div>{error && <p className="auth-error">{error}</p>}<button type="submit" className="auth-btn">Log in</button></form><p className="auth-footer">Don't have an account? <Link to="/signup">Sign up</Link></p></div></div>
}

export default Login
