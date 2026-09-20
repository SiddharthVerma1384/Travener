import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/auth.css'

function Signup() {
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    const vitEmailPattern = /^[a-zA-Z]+\.[a-zA-Z]+\d{4}@vitstudent\.ac\.in$/
    return vitEmailPattern.test(email)
  }

  const validatePassword = (password) => {
    const hasMinimumLength = password.length >= 8
    const hasDigit = /\d/.test(password)
    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password)

    return hasMinimumLength && hasDigit && hasSpecialCharacter
  }

  const handleSignup = (event) => {
    event.preventDefault()
    setError('')

    // Check VIT email format
    if (!validateEmail(email)) {
      setError(
        'Please use your VIT email in the format firstname.surnameYYYY@vit.ac.in'
      )
      return
    }

    // Check password requirements
    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters long and contain at least one digit and one special character.'
      )
      return
    }

    // Check password confirmation
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    // Temporary demo signup
    // Later this will call the backend registration API.
    navigate('/dashboard')
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <Link to="/" className="auth-logo">
          <div className="logo-icon">T</div>
          <span>Travener</span>
        </Link>

        <div className="auth-heading">
          <h1>Start your journey</h1>
          <p>Create an account and travel smarter.</p>
        </div>

        <form onSubmit={handleSignup}>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>VIT Email</label>
            <input
              type="email"
              placeholder="Please enter your student mail-id"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <small>
              Use your VIT student email address.
            </small>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <small>
              Minimum 8 characters, including a digit and a special character.
            </small>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          {error && (
            <p className="auth-error">
              {error}
            </p>
          )}

          <button type="submit" className="auth-btn">
            Create Account
          </button>

        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to home
        </Link>

      </div>
    </div>
  )
}

export default Signup