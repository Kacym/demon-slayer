import React from 'react'
import { styled } from 'styled-components'

const DemonsDocumentation = () => {
  return (
    <MainBox>
        <StyledContainer>
            <ContainerTitle> Документация о демонах</ContainerTitle>
            <StyledLine/>
        </StyledContainer>
    </MainBox>
  )
} 

const MainBox = styled.div`
    width: 90%;
    margin: 0 auto;
    border: solid;
`
const StyledContainer = styled.div`
    border: solid;
    margin: 0 auto;
    width: 68%;
    padding: 30px;
    *{
        color: white;
    }
`

const ContainerTitle = styled.h1`
    text-align: center;
    width: 50%;
    margin: 0 auto;
` 
const StyledLine = styled.hr`
    background-color: white;
    height: 1px;
    width: 60%;
`
export default DemonsDocumentation