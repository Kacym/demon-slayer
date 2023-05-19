import React from 'react'
import { styled } from 'styled-components'

const Button = (props) => {
    console.log(props);
  return (
    <StyledButton 
        width={props.w} 
        height={props.h} 
        color={props.bgColor} 
        disabled={props.disabled} 
        id={props.id}
        onClick={props.onClick}>{props.title}</StyledButton>
  )
}


const StyledButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    color: white;
    background-color: ${(props) => props.color};
    border: none;

    border: solid;

    font-size: 25px;
    cursor: pointer;
    &:active{
        background-color: white;
        color: #202020;
        border: none;
    }
`



export default Button