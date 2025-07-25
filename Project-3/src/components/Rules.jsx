import React from 'react'
import "./Rules.css"

function Rules() {
  return (
    <div className='container rules-wrapper'>
        <h2 className='rules-heading'>How to play dice game</h2>
        <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>After dice is clicked, if selected number is equal to dice number you will get one point as dice </li>
            <li>If guess is wrong then 2 point will be deducted from score </li>
        </ul>
    </div>
  )
}

export default Rules