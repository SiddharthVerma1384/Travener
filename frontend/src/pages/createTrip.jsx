import { Link, useNavigate } from 'react-router-dom'
import '../styles/trip.css'
function CreateTrip() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    // Temporary
    navigate('/search-trips')
  }

  return (
    <div className="trip-page">

      {/* Header */}
      <header className="dashboard-header">

        <Link to="/" className="dashboard-logo">
          <div className="logo-icon">T</div>
          <span>Travener</span>
        </Link>

        <Link to="/dashboard" className="back-dashboard">
          ← Dashboard
        </Link>

      </header>


      {/* Form */}
      <main className="trip-content">

        <div className="trip-heading">

          <p className="section-label">
            CREATE A JOURNEY
          </p>

          <h1>
            Tell us about your trip
          </h1>

          <p>
            Add your travel details and Travener will
            help you find compatible companions.
          </p>

        </div>


        <form
          className="trip-form"
          onSubmit={handleSubmit}
        >

          {/* Route */}
          <div className="form-section">

            <h2>Where are you going?</h2>

            <div className="form-row">

              <div className="form-group">
                <label>Source</label>

                <input
                  type="text"
                  placeholder="e.g. VIT Vellore"
                  required
                />
              </div>

              <div className="form-group">
                <label>Destination</label>

                <input
                  type="text"
                  placeholder="e.g. Katpadi Railway Station"
                  required
                />
              </div>

            </div>

          </div>


          {/* Date & Time */}
          <div className="form-section">

            <h2>When are you travelling?</h2>

            <div className="form-row">

              <div className="form-group">
                <label>Travel Date</label>

                <input
                  type="date"
                  required
                />
              </div>

              <div className="form-group">
                <label>Departure Time</label>

                <input
                  type="time"
                  required
                />
              </div>

            </div>

          </div>


          {/* Transport */}
          <div className="form-section">

            <h2>How are you travelling?</h2>

            <div className="form-group">

              <label>Transport Mode</label>

              <select required defaultValue="">
                <option value="" disabled>
                  Select transport mode
                </option>

                <option value="BUS">Bus</option>
                <option value="TRAIN">Train</option>
                <option value="FLIGHT">Flight</option>
                <option value="CAB">Cab</option>
                <option value="OTHER">Other</option>
              </select>

            </div>

          </div>


          {/* Arrival preference */}
          <div className="form-section">

            <h2>Arrival preference</h2>

            <div className="form-group">

              <label>
                How early would you like to arrive?
              </label>

              <select defaultValue="30">
                <option value="15">15 minutes early</option>
                <option value="30">30 minutes early</option>
                <option value="45">45 minutes early</option>
                <option value="60">1 hour early</option>
                <option value="90">1.5 hours early</option>
                <option value="120">2 hours early</option>
              </select>

              <small>
                Travener uses this preference when finding compatible journeys.
              </small>

            </div>

          </div>


          {/* Coordination */}
          <div className="form-section">

            <h2>What are you looking for?</h2>

            <div className="coordination-options">

              <label className="coordination-card">

                <input
                  type="radio"
                  name="coordination"
                  value="LOOKING_FOR_RIDE"
                  defaultChecked
                />

                <div>
                  <strong>I'm looking for a ride</strong>
                  <p>
                    Find someone who can share their ride with me.
                  </p>
                </div>

              </label>


              <label className="coordination-card">

                <input
                  type="radio"
                  name="coordination"
                  value="HAS_RIDE"
                />

                <div>
                  <strong>I have a ride</strong>
                  <p>
                    I have seats available and want to share my journey.
                  </p>
                </div>

              </label>

            </div>

          </div>


          {/* Submit */}
          <div className="trip-submit">

            <button
              type="submit"
              className="hero-btn"
            >
              Find Travel Companions →
            </button>

          </div>

        </form>

      </main>

    </div>
  )
}

export default CreateTrip