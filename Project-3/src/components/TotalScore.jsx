import React from 'react'
import "./TotalScore.css"

function TotalScore({score}) {
    return (
        
                <div className="score col-5">
                <h2>{score}</h2>
                <p>Total Score</p>
            </div>
     
    )
}

export default TotalScore