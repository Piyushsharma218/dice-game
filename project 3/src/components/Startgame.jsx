import styled from "styled-components"

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

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
    width: 220px;
    border: 1px solid transparent;
    font-size: 16px;
    height: 44px;

    &:hover{
        background-color: white;
        cursor: pointer;
        border: 1px solid black;
        color: black;
        transition: 0.2s ease-in;

    }
`