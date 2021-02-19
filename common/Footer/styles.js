import styled from "styled-components";
import {black, lightGrey, peach, white} from "../../styles/colors";



export const FooterContainer = styled.div`
  width: 144rem;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    height: 68.7rem;
    display: flex;
    align-items: flex-end;
  }
`

export const FooterContainerTop = styled.div`
  width: 111.1rem;
  height: 29.2rem;
  background: ${peach};
  position: absolute;
  left: 50%;
  top: -20%;
  transform: translate(-50%, -50%);
  border-radius: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 68.9rem;
    top: 30%;
    height: 35rem;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
  }
`

export const TopLeftTextContainer = styled.div`
  width: 45.9rem;
  height: 17.4rem;
  color: ${white};
`


export const H2text = styled.h2`
  margin: 0 0 1.8rem;
`


export const FooterBottomInnerContainer = styled.div`
  height: 17.7rem;
`


export const FooterContainerBottom = styled.div`
  height: 39.3rem;
  background: ${black};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px){
    width: 76.8rem
  }
`

export const FooterContainerForNav = styled.div`
  width: 111.1rem;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
  margin-top: 6.4rem;
  @media (max-width: 768px){
    width: 68.9rem
  }
`

export const FooterNavContainer = styled.div`
  width: 111.1rem;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
  margin-top: 6.4rem;
  @media (max-width: 768px) {
    width: 68.9rem;
  }
`



export const FooterNavGroupContainer = styled.div`
  width: 37rem;
  height: 1.4rem;
`

export const FooterNavGroup = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  color: ${white};
`


export const FooterNavLink = styled.a`
  &:after {
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    background: ${white};
    transition: width 0.5s ease 0s, left 0.5s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
  &:hover {
    cursor: pointer;
  }
`


export const Separator = styled.div`
  width: 111.1rem;
  height: 0;
  margin-top: 4rem;
  margin-bottom: 3.1rem;
  padding: 0;
  border-bottom: 0.1rem ${lightGrey} solid;
  @media (max-width: 768px){
    width: 68.9rem
  }
`

export const BottomTextBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BottomInnerTextBlockContainer = styled.div`
  display: flex;
`

export const BottomTextBlock = styled.div`
  width: 35rem;
  height: 7.8rem;
  color: ${white};
  display: flex;
  flex-direction: column;
  @media (max-width: 768px){
    width: 22.3rem;
  }
`

export const Strong = styled.strong`
  font-weight: bold;
`


export const SocialContainer = styled.div`
  width: 18.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SocialElement = styled.div`
  &:hover {
    cursor: pointer;
  }
`

export const FooterLink = styled.div`
  &:hover {
    cursor: pointer;
  }
`

