import styled from "styled-components";
import {peach, white} from "../styles/colors";



export const HeroContainer = styled.div`
  width: 111.1rem;
  height: 64rem;
  background: ${peach};
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
`


export const Oval = styled.div`
  width: 64rem;
  height: 64rem;
  border-radius: 90%;
  background: linear-gradient(0deg, rgba(93, 2, 2, 0.01) 0%, rgba(93, 2, 2, 0.63) 100%);
  position: absolute;
  left: 42.5%;
`


export const ImageContainer = styled.div`
  position: absolute;
  left: 50%;
  top: -6%;
`

export const HeroImage = styled.img`
  box-sizing: content-box;
`

export const HeroTextContainer = styled.div`
  width: 54rem;
  height: 35rem;
  color: ${white};
  display: flex;
  flex-direction: column;
  margin-top: 14.5rem;
  margin-left: 9.5rem;
`

export const HeroButtonContainer = styled.div`
  margin-top: 4rem;
`

export const HeroPTextContainer = styled.div`
  width: 44.5rem;
`

export const H1Hero = styled.h1`
  margin-top: 0;
`


export const CardContainer = styled.div`
  width: 111.1rem;
  height: 64rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InnerCardContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`


export const MottoContainer = styled.div`
  width: 111.1rem;
  height: 41.2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 26rem;
`