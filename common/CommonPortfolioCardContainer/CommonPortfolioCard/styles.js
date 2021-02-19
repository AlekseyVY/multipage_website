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
  will-change: transform;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 768px){
    width: 68.9rem;
    height: 31rem;
    flex-direction: row;
  }
`

export const TextContainer = styled.div`
  will-change: transform;
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
  @media (max-width: 768px){
    width: 37.9rem;
    height: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }
`

export const MainText = styled.h3`
  will-change: transform;
  color: ${peach};
  margin-top: 0;
`
