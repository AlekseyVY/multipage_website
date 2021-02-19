import styled from "styled-components";
import {lightPeach, white} from "../../styles/colors";


export const RelativeContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
  @media (max-width: 768px){
    width: 68.9rem;
    height: 20rem;
    overflow: unset;
    margin-bottom: 2.4rem;
  }
`

export const PromoCardContainer = styled.div`
  height: 100%;
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props => `/assets/home/desktop/${props.background}`});
  color: ${white};
  border-radius: 1.5rem;
  &:hover {
    cursor: pointer;
    opacity: 50%;
  }
  @media (max-width: 768px){
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props => `/assets/home/tablet/${props.background}`});
    background-repeat: no-repeat;
  }
`


export const LinkToProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RightArrowLink = styled.img`
  margin-left: 2.1rem;
`

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`


