import styled from "styled-components"
import TotalScore from "./TotalScore"
import NumberScore from "./NumberScore"

function Gameplay() {
  return (
    <Main>
        <div className="top_section">
            <TotalScore />
            <NumberScore />
        </div>
    </Main>
  )
}

export default Gameplay



const Main=styled.div`

    /* display: felx;
    flex-direction: column;
    align-items: end; */


    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end; 
    }
`
