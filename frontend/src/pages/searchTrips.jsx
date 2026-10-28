import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/search.css'

function SearchTrips() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    travelDate: '',
    departureTime: '',
    transportMode: '',
    timeTolerance: '30'
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Temporary frontend demo.
    // Later this will call the backend API.
    console.log('Travel plan:', formData)

    navigate('/search-trips')
  }

  const handleTicketUpload = () => {
  navigate('/upload-ticket')
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


      <main className="search-content">

        {/* Heading */}
        <div className="search-heading">

          <p className="section-label">FIND A TRIP</p>

          <h1>Where are you going?</h1>

          <p>
            Enter your journey details and Travener will find
            people travelling along a similar route.
          </p>

        </div>


        {/* Journey form */}
        <form
          className="search-form"
          onSubmit={handleSubmit}
        >

          {/* Route */}
          <div className="search-form-section">

            <h2>Where are you going?</h2>

            <div className="form-row">

              <div className="form-group">

                <label>From</label>

                <input
                  type="text"
                  name="source"
                  placeholder="e.g. VIT Vellore"
                  value={formData.source}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>To</label>

                <input
                  type="text"
                  name="destination"
                  placeholder="e.g. Katpadi Railway Station"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </div>


          {/* Date and time */}
          <div className="search-form-section">

            <h2>When are you travelling?</h2>

            <div className="form-row">

              <div className="form-group">

                <label>Travel Date</label>

                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>Departure Time</label>

                <input
                  type="time"
                  name="departureTime"
                  value={formData.departureTime}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </div>


          {/* Transport */}
          <div className="search-form-section">

            <h2>How are you travelling?</h2>

            <div className="form-group">

              <label>Transport Mode</label>

              <select
                name="transportMode"
                value={formData.transportMode}
                onChange={handleChange}
                required
              >

                <option value="" disabled>
                  Select transport mode
                </option>

                <option value="BUS">
                  Bus
                </option>

                <option value="TRAIN">
                  Train
                </option>

                <option value="FLIGHT">
                  Flight
                </option>

                <option value="CAB">
                  Cab
                </option>

                <option value="OTHER">
                  Other
                </option>

              </select>

            </div>

          </div>


          {/* Arrival preference */}
          <div className="search-form-section">

            <h2>Arrival preference</h2>

            <div className="form-group">

              <label>
                How early would you like to arrive?
              </label>

              <select
                name="timeTolerance"
                value={formData.timeTolerance}
                onChange={handleChange}
              >

                <option value="15">
                  15 minutes early
                </option>

                <option value="30">
                  30 minutes early
                </option>

                <option value="45">
                  45 minutes early
                </option>

                <option value="60">
                  1 hour early
                </option>

                <option value="90">
                  1.5 hours early
                </option>

                <option value="120">
                  2 hours early
                </option>

              </select>

              <small>
                Travener uses this preference when finding
                compatible journeys.
              </small>

            </div>

          </div>


          {/* Optional ticket upload */}
          <div className="ticket-upload-section">

            <div className="ticket-upload-icon">
              📄
            </div>

            <div className="ticket-upload-content">

              <h2>Have a travel ticket?</h2>

              <p>
                Upload your ticket and Travener can
                automatically extract your journey details.
              </p>

              <button
                type="button"
                className="ticket-upload-btn"
                onClick={handleTicketUpload}
              >
                Upload Ticket
              </button>

              <small>
                Optional · PDF, JPG or PNG
              </small>

            </div>

          </div>


          {/* Submit */}
          <div className="search-submit">

            <button
              type="submit"
              className="hero-btn"
            >
              Find Matches →
            </button>

          </div>

        </form>

      </main>

    </div>
  )
}

export default SearchTrips