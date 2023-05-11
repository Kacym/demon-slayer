import React from 'react'
import { styled } from 'styled-components'

const AudioTag = (props) => {
  return (
    <StyledAudio controls={props.controls} loop={props.loop} src={props.src}></StyledAudio>
  )
}

const StyledAudio = styled.audio`
    
`

export default AudioTag