import React from 'react'
// import img from '../assets/img/react2.svg'
// import leftImg from '../assets/imgs/exp-left-img.png'
import leftImg from '../assets/imgs/exp-img-blue.avif'

export const Experince = () => {
  return (
    <section>
      <div className="exp-container main-container">
        <img className="exp-left-img" src={leftImg} alt="" />
        <div className="exp-info-container">
          <h1 className="exp-title">We Are The Best in our craft</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, magni
            commodi, odio sed necessitatibus dolor beatae, assumenda rerum
            cupiditate voluptatibus laborum? Dolorum minus enim hic reiciendis
            rem assumenda inventore ullam?
          </p>
          <ul className="exp-list">
            <li>
              <span className="info-num">10+</span>
              <p>Years of experience</p>
            </li>
            <li>
              <span className="info-num">20K+</span>
              <p>Years of experience</p>
            </li>
            <li>
              <span className="info-num">150K+</span>
              <p>Years of experience</p>
            </li>
          </ul>
          <button className="btn-about">About Us</button>
        </div>
      </div>
    </section>
  )
}
