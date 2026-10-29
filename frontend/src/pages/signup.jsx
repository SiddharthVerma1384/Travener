import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/auth.css'
import { apiRequest } from '../api/client'

function Signup() {
  const navigate = useNavigate(); const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' }); const [error, setError] = useState('')
  const submit = async (event) => { event.preventDefault(); if (form.password !== form.confirmPassword) return setError('Passwords do not match.'); try { await apiRequest('/auth/register', { method: 'POST', body: JSON.stringify({ name: form.name, email: form.email, password: form.password }) }); navigate('/login') } catch (err) { setError(err.message) } }
  return <div className="auth-page"><div className="auth-card"><Link to="/" className="auth-logo">Travener</Link><h1>Start your journey</h1><form onSubmit={submit}><div className="form-group"><label>Full Name</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div><div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></div><div className="form-group"><label>Password</label><input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required /></div><div className="form-group"><label>Confirm Password</label><input type="password" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} required /></div>{error && <p className="auth-error">{error}</p>}<button type="submit" className="auth-btn">Create Account</button></form><p className="auth-footer">Already have an account? <Link to="/login">Log in</Link></p></div></div>
}

export default Signup
