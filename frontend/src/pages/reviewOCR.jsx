import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { confirmOCR } from '../api/documents'
import '../styles/ocr.css'

function ReviewOCR() {
  const location = useLocation()
  const navigate = useNavigate()

  const ocrData = location.state?.ocrData

  const [formData, setFormData] = useState({
    destination: ocrData?.destinationHub?.name || '',
    travelDate: ocrData?.travelDate || '',
    departureTime: ocrData?.departureTime || '',
    transportType: ocrData?.transportType || ''
  })

  const [confirming, setConfirming] = useState(false)
  const [error, setError] = useState('')

  // If someone opens /review-ocr directly
  // without uploading a ticket first.
  if (!ocrData) {
    return (
      <div className="ocr-page">

        <header className="dashboard-header">
          <Link to="/" className="dashboard-logo">
            <div className="logo-icon">T</div>
            <span>Travener</span>
          </Link>

          <Link
            to="/search-trips"
            className="back-dashboard"
          >
            ← Find a Trip
          </Link>
        </header>

        <main className="ocr-content">

          <div className="review-card">

            <div className="review-icon">
              !
            </div>

            <h1>No ticket data found</h1>

            <p>
              Please upload a ticket first before
              reviewing the extracted information.
            </p>

            <Link
              to="/upload-ticket"
              className="hero-btn"
            >
              Upload Ticket →
            </Link>

          </div>

        </main>

      </div>
    )
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  const handleConfirm = async (event) => {
    event.preventDefault()

    setError('')
    setConfirming(true)

    try {
      const token = localStorage.getItem('token')

      if (!token) {
        throw new Error(
          'You need to be logged in to confirm your ticket.'
        )
      }

      const corrections = {}

      if (
        formData.destination !==
        (ocrData.destinationHub?.name || '')
      ) {
        corrections.destinationHub = {
          name: formData.destination,
          type:
            ocrData.destinationHub?.type ||
            'OTHER'
        }
      }

      if (
        formData.travelDate !== ocrData.travelDate
      ) {
        corrections.travelDate = formData.travelDate
      }

      if (
        formData.departureTime !==
        ocrData.departureTime
      ) {
        corrections.departureTime =
          formData.departureTime
      }

      if (
        formData.transportType !==
        ocrData.transportType
      ) {
        corrections.transportType =
          formData.transportType
      }

      const result = await confirmOCR(
        ocrData.documentId,
        corrections,
        token
      )

      console.log('OCR confirmation response:', result)

      alert(
        'Your travel details have been confirmed!'
      )

      navigate('/search-trips')

    } catch (error) {
      setError(error.message)
    } finally {
      setConfirming(false)
    }
  }

  return (
    <div className="ocr-page">

      <header className="dashboard-header">

        <Link to="/" className="dashboard-logo">
          <div className="logo-icon">T</div>
          <span>Travener</span>
        </Link>

        <Link
          to="/search-trips"
          className="back-dashboard"
        >
          ← Find a Trip
        </Link>

      </header>


      <main className="ocr-content">

        <div className="ocr-heading">

          <p className="section-label">
            REVIEW YOUR JOURNEY
          </p>

          <h1>Check your travel details</h1>

          <p>
            We've extracted these details from your
            ticket. Review them and correct anything
            that needs to be changed.
          </p>

        </div>


        <form
          className="review-card"
          onSubmit={handleConfirm}
        >

          <div className="review-success">

            <span>✓</span>

            <div>
              <strong>
                Ticket information extracted
              </strong>

              <p>
                Please verify the information below.
              </p>
            </div>

          </div>


          {/* Destination */}

          <div className="form-group">

            <label>Destination</label>

            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            />

          </div>


          {/* Date */}

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


          {/* Departure */}

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


          {/* Transport */}

          <div className="form-group">

            <label>Transport Mode</label>

            <select
              name="transportType"
              value={formData.transportType}
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


          {error && (
            <p className="ocr-error">
              {error}
            </p>
          )}


          <div className="review-actions">

            <Link
              to="/upload-ticket"
              className="review-cancel-btn"
            >
              Upload Another
            </Link>

            <button
              type="submit"
              className="ocr-upload-btn"
              disabled={confirming}
            >
              {confirming
                ? 'Confirming...'
                : 'Confirm & Continue →'}
            </button>

          </div>

        </form>

      </main>

    </div>
  )
}

export default ReviewOCR