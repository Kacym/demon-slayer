import React from 'react'
import { keyframes, styled } from 'styled-components'
import Button from '../UI/button/Button';


const MainMenu = ( {changeState} ) => {
    console.log(changeState);
  return (
    <StyledMainMenu>
    <Title>Demon slayer</Title>

    <WarningAndInstrumental>

        <WarningContainer>
            <h2>Внимание</h2>
            <Paragraph>
            Данная информация только мнение автора и не стоит быть уверенным в то, что это истинная информация
            спасибо за понимание
            </Paragraph>
        </WarningContainer>
        
        <Instrumental>
            <h2>Прочие</h2>
            <Paragraph>Материал взят с <a href="#">этих каналов</a></Paragraph>
        </Instrumental>
    </WarningAndInstrumental>
    <Buttons>
        <Button bgColor='#202020;' w="250px" h="60px" onClick={changeState} title="Вперед"/>
    </Buttons>
        
    </StyledMainMenu>
  )
}

const ZoomOut = keyframes`
    0% {transform: scale(15); overflow: hidden;};
    50% {transform: scale(1.5)};
    70% {transform: scale(1.5)}
    100% {transform: scale(1)}
`
const StyledMainMenu = styled.div`
    overflow-y: hidden;
    transition: 10s;
    animation-duration: 6s;
    animation-name: ${ZoomOut};
`
const Title = styled.h1`
    font-family: Kanit;
    font-weight: 700;
    font-size: 48px;
    text-align: center;
`
const WarningAndInstrumental = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    height: 500px;
    border: solid;

    div{
        border: solid white;
        width: 500px;
        height: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border: solid white;
    }
    h2 {
        margin-bottom: 0;
    }
`
const WarningContainer = styled.div`
    justify-content: center;
    align-self: flex-end;

    h2{
        color: red;

        text-transform: uppercase;
        font-family: "Russo One";
        font-weight: 400;
    }
` 
const Paragraph = styled.p`
    width: 90%;
    display: inline-block;

    color: white;
    line-height: 30px;
    font-weight: 400;
    font-size: 22px;
`
const Instrumental = styled.div`
    h2 {
        color: white;
        font-weight: 200;
    }
`
const Buttons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    border: solid;
`

export default MainMenu