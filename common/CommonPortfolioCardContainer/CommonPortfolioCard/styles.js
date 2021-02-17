import styled from "styled-components";
import {black, peach} from "../../../styles/colors";


export const PortfolioCardContainer = styled.div`
  width: 35.1rem;
  height: 47.8rem;
  background-image: url(${props => props.icon});
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 1.5rem;
  &:hover {
    cursor: pointer;
    transform:  scale(1.02);
    -webkit-box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.5);
    transition: 0.3s;
  }
`

export const TextContainer = styled.div`
  height: 15.8rem;
  background: #FDF3F0;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${black};
`

export const MainText = styled.h3`
  color: ${peach};
  margin-top: 0;
`
