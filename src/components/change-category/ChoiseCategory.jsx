import React from 'react'
import { keyframes, styled } from 'styled-components'
import Kokushibo from "../tools/gifs/Kokushibo.mp4"
import Yoriichi from "../tools/gifs/Yoriichi.mp4"
import VideoTag from '../UI/video-tag/VideoTag'

import { Link } from 'react-router-dom'


const ChoiseCategory = () => {
  return (
    <>
    <Link to='choise-category'></Link>
    <Container>
        <h1>Выберите категорию</h1>
        <DemonsAndSlayers>

          <Demons>
            <VideoTag autoPlay video={Kokushibo}/>
            <CategoryTitle><Link to='/demons-main-page'>Демоны</Link></CategoryTitle>
            <StyledList> 
              <li><Link to='/first-demon'>Первый демон</Link></li>
              <li><Link to='/upper-moons'>Высшие луны</Link></li>
              <li><Link to='/lower-moons'>Низшие луны</Link></li>
              <li><Link to='/other-demons'>Другие демоны</Link></li>
              <li><Link to='/demons-documentation'>Документация</Link></li>
              
            </StyledList>

          </Demons>

          <Slayers>
            <VideoTag autoPlay video={Yoriichi}/>
            <CategoryTitle><Link to='/slayers-main-page'>Охотники</Link></CategoryTitle>
            <StyledList> 
            <li><Link to="/first-slayer">Первый охотник</Link></li>               
              <li><Link to="/hashira">Столпы</Link></li>
              <li><Link to="/Tanjiro-team">команда Танджиро</Link></li>
              <li><Link to="/other-slayers">Другие охотники</Link></li>
              <li><Link to="/slayers-documentation">Документация</Link></li>
            </StyledList>
          </Slayers>
          
        </DemonsAndSlayers>
    </Container>

          {/* <Routes>
            <Route exact path='/demons-main-page' Component={DemonsMainPage}/>
            <Route exact path='/slayers-main-page' Component={DemonsMainPage}/>
          </Routes> */}
    </>
  )
}

const ZoomOut = keyframes`
    from {margin-left: 1000px;}
    to {margin-left: 0px}
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: solid;
  transition: 1s;
  animation-duration: 5s;
  text-align: center;
  animation-name: ${ZoomOut};

  *{
    text-decoration: none;
  }
`
const Demons = styled.div`
  border: solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Slayers = styled.div`
  border: solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DemonsAndSlayers = styled.div`

  display: flex;
  justify-content: space-between;
  div {
    width: 50%;
  }
  *:hover{
    color: white;
    font-weight: 400;
  }
`

const CategoryTitle = styled.h1`
  border: solid;
  font-size: 40px;
  text-align: center;
  margin-bottom: 0;
  width: 60%;
  cursor: pointer;
  a {
    text-decoration: none;
  }
`

const StyledList = styled.ul`
  list-style: none;
  display: inline-block;
  text-align: start;
  font-size: 30px;
  width: 60%;
  border: solid;
  li {
    cursor: pointer;
    margin-bottom: 20px;
  }
`


export default ChoiseCategory