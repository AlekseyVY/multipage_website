import styled from "styled-components";
import {white} from "../../../styles/colors";



export const PromoCardContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props => props.background});
  color: ${white};
  border-radius: 1.5rem;
  &:hover {
    cursor: pointer;
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