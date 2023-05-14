import React from 'react'
import { styled } from 'styled-components'

const AudioTag = (props) => {
  return (
    <StyledAudio 
      autoPlay={props.autoPlay}
      controls={props.controls} 
      loop={props.loop} 
      src={props.src}></StyledAudio>
  )
}

const StyledAudio = styled.audio`
    width: 300px;
`

export default AudioTag