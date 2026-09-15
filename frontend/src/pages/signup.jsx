import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()

  const handleSignup = (event) => {
    event.preventDefault()

    // Temporary demo signup
    // Later this will call your backend API.
    navigate('/dashboard')
  }

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* Logo */}
        <Link to="/" className="auth-logo">
          <div className="logo-icon">T</div>
          <span>Travener</span>
        </Link>

        <div className="auth-heading">
          <h1>Start your journey</h1>
          <p>
            Create an account and travel smarter.
          </p>
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
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              required
            />
          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            Create Account
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login">
            Log in
          </Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to home
        </Link>

      </div>

    </div>
  )
}

export default Signup