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
            <h2>Демоны</h2>
          </Demons>
          <Slayers>
            <VideoTag autoPlay video={Yoriichi}/>
            <h2>Охотники</h2>
          </Slayers>
          
        </DemonsAndSlayers>
    </Container>
  )
}

const ZoomOut = keyframes`
    from {margin-left: 2000px;}
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
`
const Slayers = styled.div`
  border: solid blue;
`
const DemonsAndSlayers = styled.div`

  display: flex;
  justify-content: space-between;
  div {
    cursor: pointer;
    width: 49%;
  }
  div:hover{
    color: white;
    font-weight: 400;
  }
`


export default ChoiseCategory