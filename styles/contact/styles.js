import styled from "styled-components";
import {peach, white} from "../colors";


export const MainContainer = styled.div`
  display: flex;
  height: 164rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px){
    width: 76.8rem;
    height: 267.3rem;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 250rem;
  }
`;

export const ContactFormContainer = styled.div`
  width: 111.1rem;
  height: 48rem;
  border-radius: 1.5rem;
  background: ${peach};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px){
    width: 68.9rem;
    height: 71.1rem;
    flex-direction: column;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 76.4rem;
border-radius: unset;
  }
`

export const FooterWrapper = styled.div`
  height: 32.1rem;
  @media (max-width: 768px){
    height: 33.7rem;
    margin-top: -40rem;
  }
  @media (max-width: 375px){
    margin-top: -10rem;
  }
`

export const ContactFormLeft = styled.div`
  width: 54rem;
  height: 18.4rem;
  color: ${white};
  @media (max-width: 768px){
    margin-top: -8rem;
    margin-bottom: 5rem;
  }
  @media (max-width: 375px){
    width: 32.7rem;
  }
`

export const ContactFormRight = styled.div`
  width: 38rem;
  height: 37.1rem;
  @media (max-width: 768px){
    width: 57.3rem;
    height: 29.1rem;
  }
  @media (max-width: 375px){
    width: 32.7rem;
  }
`

export const HWrapper = styled.h1`
margin-top: 0;
  @media (max-width: 375px){
    font-size: 3.2rem;
    line-height: 3.6rem;
    text-align: center;
  }
`

export const ContactFormSecText = styled.div`
  width: 44.5rem;
  @media (max-width: 375px){
    width: 32.7rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-align: center;
  }
`