import { useState } from "react"
import Startgame from "./components/Startgame"
import Gameplay from "./components/Gameplay"


function App() {

  const [isgamestarted,setisgamestarted]=useState(true)

  const tooglegameplay=()=>{
    setisgamestarted((prev) => !prev)
  }

  return (
    <>
    {isgamestarted ? <Gameplay /> : <Startgame toggle={tooglegameplay} />}
    </>
  )
}

export default App
