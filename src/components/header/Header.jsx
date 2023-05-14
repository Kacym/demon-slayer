import React from 'react'
import { styled } from 'styled-components'
import Button from '../UI/button/Button'
import AudioTag from '../tools/audio-tag/AudioTag'
import BackgroundMusic from "../../audio/background-music.mp3"
import { Link } from 'react-router-dom'

const Header = ({changeState, isVisible, showModal}) => {

  return (
    <StyledHeader>
        <HeaderContainer>
            {isVisible && <Button w="150px" h="40px" bgColor="red" title="Выход" onClick={showModal}/>}

            <>
      <AudioTag src={BackgroundMusic} controls="controls" autoPlay="autoPlay" loop></AudioTag>
            </>

            <NavBar>
                <LinkList>
                    <li><Link to="#"></Link></li>
                    <li><Link to="#"></Link></li>
                    <li><Link to="#">О манге</Link></li>
                </LinkList>
            </NavBar>

        </HeaderContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    background-color: gray;
    opacity: 10%;
    transition: .9s;
    &:hover {
        opacity: 80%;
        transition: .9s;
        margin-bottom: 50px;
    }
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 20px 0px 20px 0px;
    margin: 0 auto;
`

const NavBar = styled.nav`
    
`

const LinkList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    list-style: none;

`
export default Header