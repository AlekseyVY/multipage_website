import styled from "styled-components";
import {peach, white} from "../../styles/colors";


export const MainContainer = styled.div`
  display: flex;
  height: 279.6rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;


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
`


export const InnerHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainText = styled.h1`
  margin-top: 0;
`

export const ProjectCardContainer = styled.div`
  width: 111.1rem;
  height: 98.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const LinkToPortfoliContainer = styled.div`
  width: 111.1rem;
  height: 30.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26rem;
`