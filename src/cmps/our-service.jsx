import React from 'react'
// import img from '../assets/img/react2.svg'
import leftImg from '../assets/imgs/exp-img-blue.avif'

export const OurService = () => {
  return (
    <section>
      <div className="services-container main-container">
        <div className="services-info-container">
          <h1 className="services-title">Our Services</h1>

          <ul className="services-list">
            <li>
              <div className="service-icon">pic</div>
              <div>
                <span className="info-title">Residential</span>
                <p className="info-text">
                  Designing your dream house, customized to your unique
                  lifestyle and preferences living spaces
                </p>
              </div>
            </li>
            <li>
              <div className="service-icon">pic</div>
              <div>
                <span className="info-title">Commercial</span>
                <p className="info-text">
                  Designing functional and neat spaces for your business needs
                  to make optimize employee performance
                </p>
              </div>
            </li>
            <li>
              <div className="service-icon">pic</div>
              <div>
                <span className="info-title">Interior Design</span>
                <p className="info-text">
                  Crafting an interior that combines aesthetics and
                  functionality. feels stunnig in every corner
                </p>
              </div>
            </li>
          </ul>
          <button className="btn-about">View More</button>
        </div>
        <div className="service-img-grid">
          <img className="img-left-top grid-img" src={leftImg} alt="" />
          <img className="img-left-bottom grid-img" src={leftImg} alt="" />
          <img className="img-right grid-img" src={leftImg} alt="" />
        </div>
      </div>
    </section>
  )
}
