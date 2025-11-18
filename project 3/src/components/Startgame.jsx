import styled from "styled-components"
import { Button } from "../button/btn"

const Startgame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="./images/dice.png" alt="dice image"/>
        </div>
        <div  className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Startgame

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;

  .content h1{
    font-size: 96px;
    white-space: nowrap;
  }
`

