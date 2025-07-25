import React from 'react'
import "./GameStarted.css"
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'
import Rules from './Rules'

function GameStarted() {
     const [selectedNumber, setSelectedNumber] = useState();
     const [currentDice,setCurrentDice]=useState(1)
     const[score,setScore]=useState(0);
     const[error,setError]=useState("")
     const [showRules, setShowRules] = useState(false);

     const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }

    const rollDice=()=>{
        
        if(!selectedNumber){
            setError("You have not selected any number")
            return;
        } 

        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice(randomNumber)

        if(selectedNumber===randomNumber){
         setScore((prev)=>prev+randomNumber)
        }

        else{
            setScore(prev=>prev-2)
        }

        setSelectedNumber(undefined)

    }

    const handleResetScore=()=>{
        setScore(0)
    }

  return (
    <main>
      <div className="container">
        <div className="row justify-content-center align-items-start">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <TotalScore score={score} /> 
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12">
            <NumberSelector selectedNumber={selectedNumber}  setSelectedNumber={setSelectedNumber} error={error} setError={setError} />
          </div>
        </div>
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice}/>
      <div className="buttons d-flex ">
        <button className='reset' onClick={handleResetScore}>Reset Score</button>
        <button className='rules mb-3'   onClick={() => setShowRules((prev) => !prev)}> Show Rules</button>
      </div>
      {showRules && <Rules />}
    </main>
  )
}

export default GameStarted
