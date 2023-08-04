import React from 'react'
// import img from '../assets/img/react2.svg'
import leftImg from '../assets/imgs/exp-img-blue.avif'

export const Discover = () => {
  return (
    <section>
      <div className="discover-container main-container">
        <div className="discover-header-container">
          <h1 className="discover-title">Discover our projects</h1>
          <button className="btn-about">View More</button>
        </div>
        <div className="discover-img-grid">
          <div className="dis-img-left-container">
            <img className="dis-img-left grid-img" src={leftImg} alt="" />
            <button className="btn-view-dis">View Details</button>
          </div>
          <img className="dis-img-mid-bottom grid-img" src={leftImg} alt="" />
          <img className="dis-img-right-bottom grid-img" src={leftImg} alt="" />
          <img className="dis-img-top-right grid-img" src={leftImg} alt="" />
        </div>
      </div>
    </section>
  )
}
