import React from 'react'
import { keyframes, styled } from 'styled-components'
import Kokushibo from "../gifs/Kokushibo.mp4"
import Yoriichi from "../gifs/Yoriichi.mp4"
import VideoTag from '../UI/video-tag/VideoTag'


const ChoiseCategory = () => {
  return (
    <Container>
        <h1>Выберите категорию</h1>
        <DemonsAndSlayers>

          <Demons>
            <VideoTag autoPlay video={Kokushibo}/>
            <CategoryTitle>Демоны</CategoryTitle>
            <StyledList>  
              <li><p>Высшие луны</p></li>
              <li><p>Низшие луны</p></li>
              <li><p>Другие демоны</p></li>
            </StyledList>

          </Demons>

          <Slayers>
            <VideoTag autoPlay video={Yoriichi}/>
            <CategoryTitle>Охотники</CategoryTitle>
            <StyledList>  
              <li><p>Столпы</p></li>
              <li><p>команда Танджиро</p></li>
              <li><p>Другие охотники</p></li>
            </StyledList>
          </Slayers>
          
        </DemonsAndSlayers>
    </Container>
  )
}

const ZoomOut = keyframes`
    from {margin-left: 1500px;}
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
`
const Demons = styled.div`
  border: solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0 auto; */
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
  display: inline-block;

  cursor: pointer;
`

const StyledList = styled.ul`
  list-style: none;
  display: inline-block;
  text-align: start;
  font-size: 30px;
  border: solid;
  li {
    cursor: pointer;
  }
`


export default ChoiseCategory