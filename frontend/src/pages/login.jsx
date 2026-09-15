import { Link, useNavigate } from 'react-router-dom'
import '../styles/auth.css'

function Login() {
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()

    // Temporary demo login
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
          <h1>Welcome back!</h1>
          <p>
            Continue your journey with Travener.
          </p>
        </div>

        <form onSubmit={handleLogin}>

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
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            Log in
          </button>

        </form>

        <p className="auth-footer">
          Don't have an account?{' '}
          <Link to="/signup">
            Sign up
          </Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to home
        </Link>

      </div>

    </div>
  )
}

export default Login