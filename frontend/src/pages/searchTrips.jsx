import { Link } from 'react-router-dom'
import '../styles/search.css'

const trips = [
  {
    id: 1,
    name: 'Rahul',
    source: 'VIT Vellore',
    destination: 'Katpadi Railway Station',
    date: '20 Sep 2026',
    time: '5:30 PM',
    mode: 'Cab',
    compatibility: '95%'
  },
  {
    id: 2,
    name: 'Ananya',
    source: 'VIT Vellore',
    destination: 'Katpadi Railway Station',
    date: '20 Sep 2026',
    time: '5:45 PM',
    mode: 'Cab',
    compatibility: '91%'
  },
  {
    id: 3,
    name: 'Arjun',
    source: 'Vellore',
    destination: 'Katpadi Railway Station',
    date: '20 Sep 2026',
    time: '6:00 PM',
    mode: 'Bus',
    compatibility: '86%'
  }
]

function SearchTrips() {

  const handleConnect = (name) => {
    alert(`Connection request sent to ${name}!`)
  }

  return (
    <div className="trip-page">

      {/* Header */}
      <header className="dashboard-header">

        <Link to="/" className="dashboard-logo">
          <div className="logo-icon">T</div>
          <span>Travener</span>
        </Link>

        <Link
          to="/dashboard"
          className="back-dashboard"
        >
          ← Dashboard
        </Link>

      </header>


      {/* Main content */}
      <main className="search-content">

        <div className="search-heading">

          <p className="section-label">
            FIND A JOURNEY
          </p>

          <h1>
            People travelling your way
          </h1>

          <p>
            We found journeys that are compatible
            with your travel plans.
          </p>

        </div>


        {/* Search summary */}
        <div className="search-summary">

          <div>
            <span>FROM</span>
            <strong>VIT Vellore</strong>
          </div>

          <div className="route-arrow">
            →
          </div>

          <div>
            <span>TO</span>
            <strong>Katpadi Railway Station</strong>
          </div>

          <div>
            <span>DATE</span>
            <strong>20 Sep 2026</strong>
          </div>

        </div>


        {/* Results */}
        <div className="results">

          <div className="results-header">

            <h2>
              3 compatible journeys
            </h2>

            <span>
              Sorted by compatibility
            </span>

          </div>


          {trips.map((trip) => (

            <div
              className="trip-result"
              key={trip.id}
            >

              {/* Traveller */}
              <div className="traveller">

                <div className="traveller-avatar">
                  {trip.name.charAt(0)}
                </div>

                <div>
                  <h3>{trip.name}</h3>

                  <span>
                    Travener member
                  </span>
                </div>

              </div>


              {/* Route */}
              <div className="result-route">

                <div>
                  <span>FROM</span>
                  <strong>{trip.source}</strong>
                </div>

                <div className="small-arrow">
                  →
                </div>

                <div>
                  <span>TO</span>
                  <strong>{trip.destination}</strong>
                </div>

              </div>


              {/* Details */}
              <div className="result-details">

                <div>
                  <span>DATE</span>
                  <strong>{trip.date}</strong>
                </div>

                <div>
                  <span>TIME</span>
                  <strong>{trip.time}</strong>
                </div>

                <div>
                  <span>MODE</span>
                  <strong>{trip.mode}</strong>
                </div>

              </div>


              {/* Match score */}
              <div className="match-score">

                <span>MATCH</span>

                <strong>
                  {trip.compatibility}
                </strong>

              </div>


              {/* Connect */}
              <button
                className="connect-btn"
                onClick={() => handleConnect(trip.name)}
              >
                Connect →
              </button>

            </div>

          ))}

        </div>

      </main>

    </div>
  )
}

export default SearchTrips