import React from 'react'
import { styled } from 'styled-components'

const VideoTag = (props) => {

  const StyledVideo = styled.video`
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    border: ${(props) => props.border}
  `

  return (
    <StyledVideo style={props.style} width={props.w} autoPlay loop src={props.video}/>

  )
}

export default VideoTag