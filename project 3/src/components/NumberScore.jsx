import React, { use } from 'react'
import styled from 'styled-components'
import { useState } from 'react'




const NumberScore = () => {
const[selectedNumber,setselectedNumber]=useState();
const arr=[1,2,3,4,5,6]

  return (
    <Container>
        <div className='flex'>
        {arr.map((num,i)=>(
            <Box key={i} onClick={()=> setselectedNumber(num)} isselected={num===selectedNumber}>
                {num}
            </Box>
        ))}
    </div>
    <p>
        Select Number
    </p>
    </Container>
  )
}

export default NumberScore

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 5px;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
`

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=>(props.isselected ? 'black' : 'white')};
color: ${(props)=>(!props.isselected ? 'black' : 'white')};
cursor: pointer;
`