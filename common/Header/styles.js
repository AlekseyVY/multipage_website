import styled from "styled-components";
import {black} from "../../styles/colors";


export const HeaderContainer = styled.div`
  width: 111.1rem;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
  margin-top: 6.4rem;
  @media (max-width: 768px) {
    width: 68.9rem;
  }
  @media (max-width: 375px) {
    width: 37.5rem;
    justify-content: space-around;
    margin-top: 3.5rem;
  }
`



export const NavGroupContainer = styled.div`
  width: 37rem;
  height: 1.4rem;
  @media (max-width: 375px){
    width: 2.4rem;
  }
`

export const MobileNav = styled.div`
  display: none;
  @media (max-width: 375px) {
    display: block;
  }
`


export const NavGroup = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 375px) {
    display: none;
  }
`


export const NavLink = styled.a`
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    background: ${black};
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
  @media (max-width: 375px) {
    display: none;
  }
`


export const NavLogo = styled.img`
  width: 20.2rem;
  height: 2.7rem;
  &:hover {
    cursor: pointer;
  }
`


