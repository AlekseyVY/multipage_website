import {black, lightPeach, peach, white} from "../../../styles/colors";
import styled from "styled-components";

export const TextStyle = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
`;

// Light theme Button
export const ButtonContainerLight = styled.div`
  width: 15.2rem;
  height: 5.6rem;
  background: ${white};
  color: ${black};
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background: ${lightPeach};
  color: ${white};
    cursor: pointer;
  }
`;

//Dark Theme Button

export const ButtonContainerDark = styled.div`
  width: 15.2rem;
  height: 5.6rem;
  background: ${peach};
  color: ${white};
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background: ${lightPeach};
  color: ${white};
    cursor: pointer;
  }
`;