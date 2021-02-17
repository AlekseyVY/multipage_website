import styled from "styled-components";
import {peach, white} from "../../styles/colors";


export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${white};
`

export const FormInnerContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const InputWrapper = styled.div`
  position: relative;
  width: 38rem;
  height: 3.8rem;
  margin-bottom: 2.5rem;
`

export const LabelWrapper = styled.div`
  position: absolute;
  left: 5%;
  top: -50%;
`


export const InputInnerWrapper = styled.input`
  background: ${peach} !important;
  background-color: ${peach};
  outline: none;
  width: 38rem;
  height: 3.8rem;
  border: none;
  border-bottom: 1px solid ${white};
  color: ${white};

  input:-webkit-autofill {
    background-color: ${peach} !important;
    -webkit-box-shadow: 0 0 0 50px white inset;
  }
`


export const AreaInnerWrapper = styled.textarea`
  background: ${peach};
  background-color: ${peach};
  outline: none;
  width: 38rem;
  height: 10.2rem;
  resize: none;
  border: none;
  border-bottom: 1px solid ${white};
  color: ${white};
`

export const ButtonWrapper = styled.div`
  margin-top: 6rem;
`