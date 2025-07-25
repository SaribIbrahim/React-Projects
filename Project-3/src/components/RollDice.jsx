import React from 'react'
import "./RollDice.css"
function RollDice({currentDice,rollDice}) {
  

  return (
    <div className='dice-wrapper'>
        <div className='dice' onClick={rollDice}>
            <img src={`/Images/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
    </div>
  )
}

export default RollDice