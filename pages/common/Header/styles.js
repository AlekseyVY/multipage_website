import styled from "styled-components";
import {black} from "../../../styles/colors";


export const HeaderContainer = styled.div`
  width: 111.1rem;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
  margin-top: 6.4rem;
`



export const NavGroupContainer = styled.div`
  width: 37rem;
  height: 1.4rem;
`

export const NavGroup = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
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
`


export const NavLogo = styled.img`
  width: 19.6rem;
  height: 2.4rem;
  &:hover {
    cursor: pointer;
  }
`



const a = () => {return (<></>)}
export default a