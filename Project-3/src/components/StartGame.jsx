import React from 'react'
import './StartGame.css'

function StartGame({toggle}) {
  return (
    <div className="container start-game-container">
      <div className="row align-items-center">
        {/* Dice image */}
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0 text-center">
          <img src="/Images/dices.png" alt="Dices" className="img-fluid" />
        </div>

        {/* Content Section */}
        <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start content">
          <h1>DICE GAME</h1>
          <button onClick={toggle}>Play Now</button>
        </div>
      </div>
    </div>
  )
}

export default StartGame
