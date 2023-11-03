
import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Routes</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to='/'>HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/Recipe'>RECIPE API</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/Covid'>COVID API</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/Anime'>Anime</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
