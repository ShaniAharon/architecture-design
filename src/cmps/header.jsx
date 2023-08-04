import React from 'react'
import {NavLink} from 'react-router-dom'

export const Header = () => {
  return (
    <header className="main-header main-container">
      <nav className="header-nav">
        <h1 className="title">Mbangoen</h1>
        <ul className="links-container">
          <li>
            <NavLink className="header-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="header-link" to="/toy">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="header-link" to="/toy">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="header-link" to="/toy">
              Project
            </NavLink>
          </li>
          <li>
            <button className="btn-contact">Contact Us</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
