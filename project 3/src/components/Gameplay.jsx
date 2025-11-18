import styled from "styled-components"
import TotalScore from "./TotalScore"
import NumberScore from "./NumberScore"
import { useState } from "react"
import RollDice from "./RollDice";
import { Button, Outlinebtn } from "../button/btn";


function Gameplay() {

  const [score,setscore]=useState(0);
  const[selectedNumber,setselectedNumber]=useState();
  const [currentdice,setcurrentdice]=useState(1);
  const[error,seterror]=useState();


  
  const generaterandomNumber=()=>{
    return Math.floor(Math.random()*6+1);
  }

  function rolldice(){

    if(!selectedNumber){
      seterror("You have not selected any number")
      return 
    }

    const randomnumber=generaterandomNumber()
    setcurrentdice((prev)=>randomnumber)

    if(selectedNumber==randomnumber){
      setscore((prev)=>prev+randomnumber)
    }else{
      setscore((prev)=>prev-2)
    }

    setselectedNumber(undefined)

  }


  return (
    <Main>
        <div className="top_section">
            <TotalScore score={score}/>
            <NumberScore  seterror={seterror} error={error} setselectedNumber={setselectedNumber} selectedNumber={selectedNumber} />
        </div>

        <RollDice currentdice={currentdice} rolldice={rolldice} />

        <div className="btns">
          <Outlinebtn onClick={()=>setscore(0)}>Reset Score</Outlinebtn>
          <Button>Show Rules</Button>
        </div>

    </Main>
  )
}

export default Gameplay



const Main=styled.div`

    /* display: felx;
    flex-direction: column;
    align-items: end; */

    padding-top: 50px;


    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end; 
    }

    .btns{
      display: flex;
      margin-top: 10px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
`
