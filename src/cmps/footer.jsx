import React from 'react'

export const Footer = () => {
  return (
    <section className="footer-container">
      <div className="content-container">
        <div className="footer-info-container">
          <div className="footer-title-info-container">
            <h1>Mbangoen</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              aspernatur cumque doloremque culpa unde repellat dolorem nulla
            </p>
          </div>
          <div className="social-icons-container">
            <ul>
              <li>Pic</li>
              <li>Pic</li>
              <li>Pic</li>
              <li>Pic</li>
            </ul>
          </div>
        </div>

        <div className="links-container">
          <div>
            <h1>Company</h1>
            <a href="#">About Us</a>
            <a href="#">Projects</a>
            <a href="#">Careers</a>
          </div>
          <div>
            <h1>Company</h1>
            <a href="#">About Us</a>
            <a href="#">Projects</a>
            <a href="#">Careers</a>
          </div>
          <div>
            <h1>Company</h1>
            <a href="#">About Us</a>
            <a href="#">Projects</a>
            <a href="#">Careers</a>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="rights-reserved">
        <span>@2013-2023Mbangoen All rights reserved</span>
      </div>
    </section>
  )
}
