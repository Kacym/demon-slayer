import React from 'react'
import { demons } from '../../../constants/constants'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import './demons.css'
import VideoTag from '../../UI/video-tag/VideoTag'

const DemonsMainPage = () => {
  return (
    <StyledList>
        {
          demons.map((el) => (
            <Link to={el.link}>
              <StyledItem>
                <VideoTag w="200px" video={el.gif} style={{borderRadius: "25px"}}/>
                <p>{el.name}</p>
              </StyledItem>
            </Link>
          ))
        }

    </StyledList>
  )
}


const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const StyledItem = styled.li`
  /* p:nth-child(5){
    font-size: 25px;
    color: blue;
  } */
`
export default DemonsMainPage