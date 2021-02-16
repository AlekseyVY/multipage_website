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
`

