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
  @media (max-width: 375px){
    width: 37.5rem;
    height: 100.5rem;
  }
`

export const FooterOval_1 = styled.div`
  width: 29.2rem;
  height: 29.9rem;
  border-radius: 90%;
  background: linear-gradient(0deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  position: absolute;
  right: 0%;
  top: -50%;
  z-index: -1;
  @media (max-width: 768px) {
    right: -20%;
    top: -40%;
  }
  @media (max-width: 375px) {
    right: -10%;
    top: -30%;
  }
`
export const FooterOval_2 = styled.div`
  width: 29.2rem;
  height: 29.9rem;
  border-radius: 90%;
  background: linear-gradient(90deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  right: 26.2%;
  top: -50%;
  z-index: -1;
  position: absolute;
  @media (max-width: 768px) {
    right: 22.4%;
    top: -40%;
  }
  @media (max-width: 375px) {
    display: none;
  }
`
export const FooterOval_3 = styled.div`
  width: 29.2rem;
  height: 29.9rem;
  border-radius: 90%;
  background: linear-gradient(270deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  right: 26.2%;
  top: 52%;
  z-index: -1;
  position: absolute;
  @media (max-width: 768px) {
    right: 22.4%;
    top: 45%;
  }
  @media (max-width: 375px) {
    right: 80%;
    top: 50%;
  }
`
export const FooterOval_4 = styled.div`
  width: 29.2rem;
  height: 29.9rem;
  border-radius: 90%;
  background: linear-gradient(0deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  right: 0%;
  top: 52%;
  z-index: -1;
  position: absolute;
  @media (max-width: 768px) {
    right: -20%;
    top: 45%;
  }
  @media (max-width: 375px) {
    right: -10%;
    top: 50%;
  }
`
export const FooterOval_5 = styled.div`
  width: 29.2rem;
  height: 29.9rem;
  border-radius: 90%;
  background: linear-gradient(180deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  right: 52.5%;
  top: 52%;
  z-index: -1;
  position: absolute;
  @media (max-width: 768px) {
    right: 64.7%;
    top: 45%;
  }
  @media (max-width: 375px) {
    display: none;
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
  overflow: hidden;
  @media (max-width: 768px) {
    width: 68.9rem;
    top: 30%;
    height: 35rem;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
  }
  @media (max-width: 375px){
    width: 32.7rem;
    height: 37.9rem;
    z-index: 50;
    top: 15%;
  }
`

export const TopLeftTextContainer = styled.div`
  width: 45.9rem;
  height: 17.4rem;
  color: ${white};
  @media (max-width: 375px){
    width: 27.9rem;
    height: 16.3rem;
  }
`


export const H2text = styled.h2`
  margin: 0 0 1.8rem;
  @media (max-width: 375px){
    font-size: 3.2rem;
  }
  
`


export const FooterBottomInnerContainer = styled.div`
  height: 17.7rem;
  @media (max-width: 375px){
    width: 32.7rem;
    height: 52rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10rem;
  }
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
  @media (max-width: 375px){
    width: 37.5rem;
    height: 81.5rem;
    position: relative;
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
  @media (max-width: 375px){
    width: 32.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`



export const FooterNavGroupContainer = styled.div`
  width: 37rem;
  height: 1.4rem;
  @media (max-width: 375px){
    width: 32.7rem;
  }
`

export const FooterNavGroup = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  color: ${white};
  @media (max-width: 375px){
    flex-direction: column;
    margin-top: 3.2rem;
    font-size: 1.4rem;
    line-height: 1.4rem;
    letter-spacing: 0.2rem;
    height: 10.6rem;
  }
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
  @media (max-width: 375px){
    position: absolute;
    width: 32.7rem;
    top: 32%;
    border-bottom: 0.1rem ${lightGrey} solid;
    margin-bottom: 3.2rem;
    margin-top: 3.2rem;
  }
`

export const BottomTextBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 375px){
    flex-direction: column;
    margin-top: 4rem;
  }
`

export const BottomInnerTextBlockContainer = styled.div`
  display: flex;
  @media (max-width: 375px){
    flex-direction: column;
    justify-content: space-between;
    height: 19.6rem;
    margin-bottom: 4rem;
    margin-top: 4rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    text-align: center;
  }
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
  @media (max-width: 375px){
    margin-top: 4rem;
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
  @media (max-width: 375px){
    margin-top: 3.2rem;
  }
`;

export const SocialElement = styled.div`
  opacity: 80%;
  &:hover {
    cursor: pointer;
    opacity: unset;
  }
`

export const FooterLink = styled.div`
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 375px){
    margin-bottom: 3.2rem;
  }
`

