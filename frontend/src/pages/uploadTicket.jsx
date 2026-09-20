import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { uploadTicket } from '../api/documents'
import '../styles/ocr.css'

function UploadTicket() {
  const navigate = useNavigate()

  const [selectedFile, setSelectedFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  

  const handleFileChange = (event) => {
    const file = event.target.files[0]

    setError('')

    if (!file) {
      return
    }

    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png'
    ]

    if (!allowedTypes.includes(file.type)) {
      setSelectedFile(null)
      setError('Please select a PDF, JPG, or PNG file.')
      return
    }

    setSelectedFile(file)
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a ticket first.')
      return
    }

    setError('')
    setUploading(true)

    try {
      // Temporary token retrieval.
      // We will connect this to the real authentication
      // system when backend authentication is integrated.
      const token = localStorage.getItem('token')

      if (!token) {
        throw new Error(
          'You need to be logged in to upload a ticket.'
        )
      }
      
      const result = await uploadTicket(
  selectedFile,
  token
)

console.log('OCR response:', result)

if (result?.data?.ocrStatus !== 'COMPLETED') {
  throw new Error(
    'The ticket could not be processed yet. Please try again.'
  )
}

navigate('/review-ocr', {
  state: {
    ocrData: {
      documentId: result.data.documentId,
      ocrStatus: result.data.ocrStatus,
      ...result.data.extractedData
    }
  }
})
    } catch (error) {
      setError(error.message)
    } finally {
      setUploading(false)
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
            UPLOAD TICKET
          </p>

          <h1>Let Travener read your ticket</h1>

          <p>
            Upload your travel ticket and we'll use the
            extracted journey information to help you
            find compatible travellers.
          </p>

        </div>


        <div className="upload-card">

          <div className="upload-icon">
            📄
          </div>

          <h2>Upload your ticket</h2>

          <p>
            Choose a PDF, JPG, or PNG file containing
            your travel ticket.
          </p>


          <label className="file-select-btn">

            Choose Ticket

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              hidden
            />

          </label>


          {selectedFile && (
            <div className="selected-file">

              <span>📎</span>

              <div>
                <strong>
                  {selectedFile.name}
                </strong>

                <small>
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </small>
              </div>

            </div>
          )}


          {error && (
            <p className="ocr-error">
              {error}
            </p>
          )}


          <button
            type="button"
            className="ocr-upload-btn"
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
          >
            {uploading
              ? 'Processing ticket...'
              : 'Upload & Extract Details →'}
          </button>


          <small className="upload-note">
            Your ticket information will be reviewed
            before creating your travel plan.
          </small>

        </div>

      </main>

    </div>
  )
}

export default UploadTicket