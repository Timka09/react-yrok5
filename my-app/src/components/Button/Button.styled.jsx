import styled from "styled-components";

export const Button = styled.button`
    color: white;
    background-color: black;
    margin: 1em;
    padding: 15px;
    border: none;
    border-radius: 20%;

    &:hover {
        background-color: green;
        color: black;
    }
    ${props => {
    console.log(props)
    }}
`

export const ButtonCancel = styled(Button)`

    &:hover{
      background-color: red;  
    }
`