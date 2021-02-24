import styled from "styled-components";
import {peach, white} from "../colors";

export const MainContainer = styled.div`
  display: flex;
  height: 294rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 768px){
    height: 331.1rem;
    width: 76.8rem;
  }
  @media (max-width: 375px){
    height: 449.9rem;
    width: 37.5rem;
  }
`;

export const BigOval = styled.div`
  position: absolute;
  width: 100.6rem;
  height: 59.4rem;
  background: #F1F3F5;
  border-radius: 297% 297% 297% 0;
  opacity: 50.23%;
  top: 18%;
  left: 0%;
  z-index: -1;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
`

export const BigOvalCopy = styled.div`
  position: absolute;
  width: 100.6rem;
  height: 59.4rem;
  background: #F1F3F5;
  border-radius: 297% 297% 297% 0;
  transform: rotate(180deg);
  top: 63%;
  right: 0%;
  z-index: -1;
  @media (max-width: 375px) {
    display: none;
  }
`

export const HeroContainer = styled.div`
  width: 111.1rem;
  height: 64rem;
  background: ${peach};
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 768px){
    width: 68.9rem;
    height: 84.3rem;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 84.3rem;  
    border-radius: 0;
  }
`


export const Oval = styled.div`
  width: 64rem;
  height: 64rem;
  border-radius: 90%;
  background: linear-gradient(0deg, rgba(93, 2, 2, 0.01) 0%, rgba(93, 2, 2, 0.30) 100%);
  position: absolute;
  opacity: ;
  right: 0%;
  top: 0%;
  z-index: -1;
  @media (max-width: 768px){
    right: -18%;
    top: 11%;
  }
  @media (max-width: 375px){
    left: -1%;
    top: 11.5%;
  }
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
  @media (max-width: 375px) {
    left: -33%;
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
  @media (max-width: 375px){
    width: 32.7rem;
    height: 31.2rem;
    margin-top: 8rem;
    margin-left: 2.4rem;
  }
`

export const HeroButtonContainer = styled.div`
  margin-top: 4rem;
  z-index: 2;
`

export const HeroPTextContainer = styled.div`
  width: 44.5rem;
  @media (max-width: 375px){
    width: 32.7rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`

export const H1Hero = styled.h1`
  margin-top: 0;
  @media (max-width: 375px){
    font-size: 3.2rem;
    line-height: 3.6rem;
    letter-spacing: 0;
  }
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
  @media (max-width: 375px){
    width: 37.5rem;  
    height: 79.8rem;
  }
`

export const InnerCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  @media (max-width: 375px){
    width: 32.7rem;
    height: 129.6rem;
    margin-bottom: 30rem;
    margin-top: 3.2rem;
  }
`
