import styled from 'styled-components'
import { useState } from 'react'

const RollDice = ({currentdice,rolldice}) => {



 

  return (
    <Dicecaontainer>
      <div className='dice' onClick={rolldice}>
        <img src={`/images/dice/dice_${currentdice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </Dicecaontainer>
  )
}

export default RollDice

const Dicecaontainer=styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice{
    cursor: pointer;
  }
  
  
`