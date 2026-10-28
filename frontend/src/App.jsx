import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import UploadTicket from './pages/uploadTicket'
import ReviewOCR from './pages/reviewOCR'

import Login from './pages/login'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import CreateTrip from './pages/createTrip'
import SearchTrips from './pages/searchTrips'

function LandingPage() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          <div className="logo-icon">T</div>
          <span>Travener</span>
        </div>

        <div className="nav-links">
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
          
        </div>

        <div className="nav-actions">
          <Link to="/login" className="login-btn">
  Log in
</Link>

          <Link to="/signup" className="signup-btn">
  Sign up
</Link>
        </div>

      </nav>


      {/* Hero */}
      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            TRAVEL TOGETHER
          </p>

          <h1>
            Commute smarter.
            <br />
            <span>Pool together.</span>
          </h1>

          <p className="hero-description">
            Joy of a Shared Journey! Make efficient and
            environment friendly choice for your commute.
          </p>

          <Link to="/signup" className="hero-btn">
  Get Started →
</Link>

        </div>


        <div className="hero-visual">

          <div className="road"></div>

          <div className="person person-one">
            <div className="person-head"></div>
            <div className="person-body"></div>
          </div>

          <div className="person person-two">
            <div className="person-head"></div>
            <div className="person-body"></div>
          </div>

          <div className="car">
            <div className="car-window"></div>

            <div className="car-wheel wheel-one"></div>
            <div className="car-wheel wheel-two"></div>
          </div>

          <div className="match-bubble">
            ✓ Match found
          </div>

        </div>

      </section>


      {/* How It Works */}
      <section
        className="how-it-works"
        id="how-it-works"
      >

        <div className="section-heading">

          <p className="section-label">
            HOW IT WORKS
          </p>

          <h2>
            A smarter way to travel
          </h2>

          <p>
            Travener connects people heading in the same
            direction so they can share resources and
            travel together.
          </p>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <h3>
              Plan your journey
            </h3>

            <p>
              Enter your source, destination and travel details.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <h3>
              Find your match
            </h3>

            <p>
              Travener finds people travelling along a similar route.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <h3>
              Travel together
            </h3>

            <p>
              Connect with your match and share the journey.
            </p>

          </div>

        </div>

      </section>


      {/* Benefits */}
      <section
        className="benefits"
        id="about"
      >

        <div className="section-heading">

          <p className="section-label">
            WHY TRAVENER
          </p>

          <h2>
            More than just a ride
          </h2>

        </div>


        <div className="benefit-cards">

          <div className="benefit-card">

            <div className="benefit-icon">
              ↔
            </div>

            <h3>
              Share Resources
            </h3>

            <p>
              Make better use of available transportation
              by travelling together.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-icon">
              ⏱
            </div>

            <h3>
              Save Time & Cost
            </h3>

            <p>
              Find suitable travel companions and make
              your commute more efficient.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-icon">
              🌱
            </div>

            <h3>
              Build a Better Tomorrow
            </h3>

            <p>
              Fewer individual journeys can mean fewer
              resources consumed.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section
        className="cta"
        id="contact"
      >

        <h2>
          Your next journey could be shared.
        </h2>

        <p>
          Find people going your way with Travener.
        </p>

       <Link to="/signup" className="hero-btn">
  Get Started →
</Link>

      </section>


      {/* Footer */}
      <footer className="footer">

        <div className="logo">

          <div className="logo-icon">
            T
          </div>

          <span>
            Travener
          </span>

        </div>

        <p>
          Commute smarter. Pool together.
        </p>

      </footer>

    </div>
  )
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
         path="/upload-ticket" 
         element={<UploadTicket />} 
        />

        <Route
  path="/review-ocr"
  element={<ReviewOCR />}
/>

        <Route
  path="/create-trip"
  element={<CreateTrip />}
/>
       <Route
  path="/search-trips"
  element={<SearchTrips />}
/>

      </Routes>

    </BrowserRouter>
  )
}


export default App