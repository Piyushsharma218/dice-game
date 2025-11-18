import styled from "styled-components";

export const Button = styled.button`
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

export const Outlinebtn=styled(Button)`

    border: 1px solid black;
    background-color: white;
    color: black;

 &:hover{
        background-color: black;
        cursor: pointer;
        border: 1px solid black;
        color: white;
    }
`