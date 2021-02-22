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
  @media (max-width: 375px){
    width: 32.7rem;
    height: 25rem;
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
  @media (max-width: 375px){
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props => `/assets/home/mobile/${props.background}`});
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
  @media (max-width: 375px) {
    align-items: center;
  }
`
export const PromoH2 = styled.h2`
  @media (max-width: 375px) {
    font-size: 2.8rem;
    line-height: 3.6rem;
    letter-spacing: 0.14rem;
  }
`

export const PromoText = styled.div`
  @media (max-width: 375px) {
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
  }
`