import styled from "styled-components";
import {peach, white} from "../colors";

export const MainContainer = styled.div`
  display: flex;
  height: 294rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px){
    height: 331.1rem;
    width: 76.8rem;
  }
`;

export const HeroContainer = styled.div`
  width: 111.1rem;
  height: 64rem;
  background: ${peach};
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px){
    width: 68.9rem;
    height: 84.3rem;
  }
`


export const Oval = styled.div`
  width: 64rem;
  height: 64rem;
  border-radius: 90%;
  background: linear-gradient(0deg, rgba(93, 2, 2, 0.01) 0%, rgba(93, 2, 2, 0.30) 100%);
  position: absolute;
  left: 28.3%;
  top: 10.7%;
`


export const ImageContainer = styled.div`
  position: absolute;
  left: 50%;
  top: -6%;
  @media (max-width: 768px) {
    left: 5%;
    top: 35%;
    z-index: 1;
  }
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
  @media (max-width: 768px){
    width: 57.3rem;
    height: 32.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5.8rem;
    margin-top: 6rem;
    text-align: center;
  }
`

export const HeroButtonContainer = styled.div`
  margin-top: 4rem;
  z-index: 2;
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
  @media (max-width: 768px){
    width: 68.9rem;
    flex-direction: column;
  }
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
  @media (max-width: 768px) {
    width: 68.9rem;
    flex-direction: column;
    height: 67rem;
    margin-bottom: 0;
  }
`
