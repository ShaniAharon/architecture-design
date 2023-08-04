import React from 'react'

export const Clients = () => {
  return (
    <section>
      <div className="clients-container main-container">
        <div className="clients-header-container">
          <h1 className="clients-title">What our clients say?</h1>
          <button className="btn-about">View More</button>
        </div>
        <div className="clients-info-container">
          <ul className="clients-list">
            <li>
              <div>
                <p className="clients-recommend-text">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  voluptatibus nostrum quae non eveniet autem voluptas sequi ."
                </p>
              </div>
              <div className="clients-img-container">
                <div className="client-pic">pic</div>
                <div>
                  <span className="info-title">Fabrizo Romanof</span>
                  <p className="info-text">Football Player</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <p className="clients-recommend-text">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  voluptatibus nostrum quae non eveniet autem voluptas sequi."
                </p>
              </div>
              <div className="clients-img-container">
                <div className="client-pic">pic</div>
                <div>
                  <span className="info-title">Fabrizo Romanof</span>
                  <p className="info-text">Football Player</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <p className="clients-recommend-text">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  voluptatibus nostrum quae non eveniet autem voluptas sequi."
                </p>
              </div>
              <div className="clients-img-container">
                <div className="client-pic">pic</div>
                <div>
                  <span className="info-title">Fabrizo Romanof</span>
                  <p className="info-text">Football Player</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="clients-btn-container">
          <button className="clients-btn-back clients-btn disable">
            Arrow
          </button>
          <button className="clients-btn-next clients-btn">Arrow</button>
        </div>
      </div>
    </section>
  )
}
