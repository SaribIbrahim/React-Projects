import { useState } from "react"
import StartGame from "./components/StartGame"
import GameStarted from "./components/GameStarted"


function App() {
  
   const [isGameStarted,setIsGameStarted]=useState(false)

   const toggleGamePlay=  ()=>{
    setIsGameStarted(prev=>!prev)
   }

  return (
    <>
    {
      isGameStarted? <GameStarted/>:<StartGame toggle={toggleGamePlay}/>
    }
      
    </>
  )
}

export default App
