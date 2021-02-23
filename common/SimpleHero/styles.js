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

export const TextBlock = styled.div`
  @media (max-width: 375px){
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`