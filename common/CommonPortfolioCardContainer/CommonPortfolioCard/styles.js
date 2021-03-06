import styled from "styled-components";
import {black, peach, white} from "../../../styles/colors";


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
  &:hover div{
    cursor: pointer;
    background: ${peach};
    color: ${white};
  }
  &:hover h3{
    color: ${white};
  }
  @media (max-width: 768px){
    width: 68.9rem;
    height: 31rem;
    flex-direction: row;
  }
  @media (max-width: 375px){
    width: 32.7rem;
    height: 47.8rem;
    flex-direction: column;
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
  &:hover {
    cursor: pointer;
    background: ${peach};
    color: ${white};
  }
  &:hover h3{
    color: ${white};
  }
  @media (max-width: 768px) {
    width: 37.9rem;
    height: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }
  @media (max-width: 375px) {
    width: 32.7rem;
    height: 18rem;
    border-radius: 0 0 1.5rem 1.5rem ;
  }
`

export const MainText = styled.h3`
  will-change: transform;
  color: ${peach};
  margin-top: 0;
`
