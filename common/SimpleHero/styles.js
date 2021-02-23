import styled from "styled-components";
import {peach, white} from "../../styles/colors";


export const InnerHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainText = styled.h1`
  margin-top: 0;
  @media (max-width: 375px){
    font-size: 3.2rem;
    line-height: 3.6rem;
  }
`

export const HeroContainer = styled.div`
  width: 111.1rem;
  height: 25.2rem;
  background: ${peach};
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  border-radius: 1.5rem;
  color: ${white};
  position: relative;
  overflow: hidden;
  z-index: -2;
  @media (max-width: 768px){
    width: 68.9rem;
    height: 25.2rem;
    margin-top: 6.4rem;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 32rem;
    border-radius: unset;
  }
`

export const SimpleHeroOval_1 = styled.div`
  width: 29.2rem;
  height: 29.9rem;
  border-radius: 90%;
  background: linear-gradient(180deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  position: absolute;
  right: 0%;
  top: -65%;
  z-index: -1;
  @media (max-width: 768px) {
    right: -20%;
    top: -70%;
  }
  @media (max-width: 375px) {
    display: none;
  }
`
export const SimpleHeroOval_2 = styled.div`
  width: 29.2rem;
  height: 29.9rem;
  border-radius: 90%;
  background: linear-gradient(270deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  right: 26.2%;
  top: -65%;
  z-index: -1;
  position: absolute;
  @media (max-width: 768px) {
    right: 22.4%;
    top: -70%;
  }
  @media (max-width: 375px) {
    display: none;
  }
`
export const SimpleHeroOval_3 = styled.div`
  width: 29.2rem;
  height: 29.9rem;
  border-radius: 90%;
  background: linear-gradient(270deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  right: 26.2%;
  top: 53.8%;
  z-index: -1;
  position: absolute;
  @media (max-width: 768px) {
    right: 22%;
    top: 49%;
  }
  @media (max-width: 375px) {
    right: 79%;
    top: 0%;
  }
`
export const SimpleHeroOval_4 = styled.div`
  width: 29.2rem;
  height: 29.9rem;
  border-radius: 90%;
  background: linear-gradient(180deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  right: 0%;
  top: 53.8%;
  z-index: -1;
  position: absolute;
  @media (max-width: 768px) {
    right: -20%;
    top: 48%;
  }
  @media (max-width: 375px) {
    right: 0%;
    top: 0%;
  }
`
export const SimpleHeroOval_5 = styled.div`
  width: 29.2rem;
  height: 29.9rem;
  border-radius: 90%;
  background: linear-gradient(0deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  right: 52.5%;
  top: -65%;
  z-index: -1;
  position: absolute;
  @media (max-width: 768px) {
    right: 64.7%;
    top: -70%;
  }
  @media (max-width: 375px) {
    display: none;
  }
`



export const TextBlock = styled.div`
  @media (max-width: 375px){
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`