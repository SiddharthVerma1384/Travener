import { Link } from 'react-router-dom'
import '../styles/dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Dashboard Header */}
      <header className="dashboard-header">

        <Link to="/" className="dashboard-logo">
          <div className="logo-icon">T</div>
          <span>Travener</span>
        </Link>

        <div className="dashboard-user">
          <span>Welcome back!</span>

          <Link to="/">
            Log out
          </Link>
        </div>

      </header>


      {/* Main Content */}
      <main className="dashboard-content">

        <div className="dashboard-heading">
          <p className="section-label">
            YOUR JOURNEY
          </p>

          <h1>
            Where are you going?
          </h1>

          <p>
            Create a trip or find people travelling
            along a similar route.
          </p>
        </div>


        {/* Main Actions */}
        <div className="dashboard-actions">

          <div className="dashboard-card create-card">

            <div className="dashboard-card-icon">
              +
            </div>

            <div>
              <h2>Create a Trip</h2>

              <p>
                Tell us where and when you're travelling.
                Travener will help you find suitable companions.
              </p>
            </div>

          <Link
  to="/create-trip"
  className="dashboard-btn"
>
  Create Trip →
</Link>

          </div>


          <div className="dashboard-card search-card">

            <div className="dashboard-card-icon">
              ⌕
            </div>

            <div>
              <h2>Find a Trip</h2>

              <p>
                Search for people travelling your way
                and discover potential travel companions.
              </p>
            </div>

            <Link to="/search-trips" className="dashboard-btn">
  Search Trips →
</Link>

          </div>

        </div>


        {/* Activity */}
        <section className="activity">

          <div className="activity-header">
            <h2>Your Activity</h2>
            <span>Recent</span>
          </div>

          <div className="empty-activity">

            <div className="empty-icon">
              ✈
            </div>

            <h3>
              No journeys yet
            </h3>

            <p>
              Your trips and travel connections will
              appear here.
            </p>

          </div>

        </section>

      </main>

    </div>
  )
}

export default Dashboard