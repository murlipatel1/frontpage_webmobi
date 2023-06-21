import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <span class="navbar-brand mb-0 h1 text-primary">
        Incubyte
        </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item font-weight-bold">
            <a className="nav-link text-primary" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-primary" href="#">
              Our Expertise
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-primary" href="#">
              Success Stories
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-primary" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
