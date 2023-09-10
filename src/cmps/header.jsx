import React from 'react'
import {NavLink} from 'react-router-dom'

import iconImg from '../assets/imgs/open-menu.png'

const toggleMenu = () => {
  document.body.classList.toggle('menu-open')
}

export const Header = () => {
  return (
    <header className="main-header main-container flex space-between align-center">
      <div>
        <h1 className="title">Mbangoen</h1>
      </div>
      <nav className="main-nav-container header-nav">
        <ul className="main-nav flex clean-list links-container">
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
      <button className="btn-toggle-menu" onClick={toggleMenu}>
        <img className="hamburger-icon" src={iconImg} alt="" srcset="" />
      </button>
    </header>
  )
}
