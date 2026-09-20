import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/trip.css'

function CreateTrip() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    travelDate: '',
    departureTime: '',
    availableSeats: '1'
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
    const ride = {
      source: formData.source,
      destination: formData.destination,
      travelDate: formData.travelDate,
      departureTime: formData.departureTime,
      availableSeats: Number(formData.availableSeats),
      coordination: 'HAS_RIDE'
    }

    localStorage.setItem('myTrip', JSON.stringify(ride))

    navigate('/dashboard')
  }

  return (
    <div className="trip-page">

      <header className="dashboard-header">
        <Link to="/" className="dashboard-logo">
          <div className="logo-icon">T</div>
          <span>Travener</span>
        </Link>

        <Link to="/dashboard" className="back-dashboard">
          ← Dashboard
        </Link>
      </header>

      <main className="trip-content">

        <div className="trip-heading">
          <p className="section-label">OFFER A RIDE</p>

          <h1>Create a Trip</h1>

          <p>
            Already booked a cab? Share your journey and let other
            travellers know that seats are available.
          </p>
        </div>

        <form className="trip-form" onSubmit={handleSubmit}>

          {/* Route */}
          <div className="form-section">

            <h2>Where is your cab going?</h2>

            <div className="form-row">

              <div className="form-group">
                <label>Source</label>

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
                <label>Destination</label>

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
          <div className="form-section">

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

          {/* Seats */}
          <div className="form-section">

            <h2>Available seats</h2>

            <div className="form-group">

              <label>How many seats can you offer?</label>

              <select
                name="availableSeats"
                value={formData.availableSeats}
                onChange={handleChange}
                required
              >
                <option value="1">1 seat</option>
                <option value="2">2 seats</option>
                <option value="3">3 seats</option>
                <option value="4">4 seats</option>
              </select>

              <small>
                Only include seats that are actually available for other
                Travener users.
              </small>

            </div>

          </div>

          {/* Submit */}
          <div className="trip-submit">

            <button type="submit" className="hero-btn">
              Offer Ride →
            </button>

          </div>

        </form>

      </main>
    </div>
  )
}

export default CreateTrip