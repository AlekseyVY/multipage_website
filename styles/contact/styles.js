import styled from "styled-components";
import {peach, white} from "../colors";


export const MainContainer = styled.div`
  display: flex;
  height: 164rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const ContactFormContainer = styled.div`
  width: 111.1rem;
  height: 48rem;
  border-radius: 1.5rem;
  background: ${peach};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterWrapper = styled.div`
  height: 32.1rem;
`

export const ContactFormLeft = styled.div`
  width: 54rem;
  height: 18.4rem;
  color: ${white};
`

export const ContactFormRight = styled.div`
  width: 38rem;
  height: 37.1rem;
`

export const HWrapper = styled.h1`
margin-top: 0;
`

export const ContactFormSecText = styled.div`
  width: 44.5rem;
`