import React from 'react'
import { styled } from 'styled-components'
import Button from '../UI/button/Button'
import AudioTag from '../audio-tag/AudioTag'
import BackgroundMusic from "../../audio/background-music.mp3"

const Header = ({changeState, isVisible}) => {

  return (
    <StyledHeader>
        <HeaderContainer>
            {isVisible && <Button w="150px" h="40px" bgColor="red" title="Выход" onClick={changeState}/>}

            <>
      <AudioTag src={BackgroundMusic} controls="controls" loop></AudioTag>
            </>

        </HeaderContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    background-color: gray;
    opacity: 0%;
    transition: .3s;
    &:hover {
        opacity: 80%;
        transition: .3s
    }
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 20px 0px 20px 0px;
    margin: 0 auto;
`
export default Header