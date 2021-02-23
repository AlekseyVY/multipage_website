import styled from "styled-components";
import {black, white} from "../../../styles/colors";


export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${black};
  transform: ${({ open }) => open ? 'translateY(20%)' : 'translateY(-320%)'};
  height: 23.5rem;
  margin-top: 3.4rem;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 4;
  width: 37.5rem;
  -webkit-box-shadow: 0 23rem 0 20rem rgba(0,0,0,0.50);
  -moz-box-shadow: 0 23rem 0 20rem rgba(0,0,0,0.50);
  box-shadow: 0 23rem 0 20rem rgba(0,0,0,0.50);

  a {
    color: ${white};
    font-size: 2.4rem;
    line-height: 2.5rem;
    letter-spacing: 0.2rem;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      
    }
  }
`

export const NavMenuExpandCont = styled.div`
  width: 33.5rem;
  height: 13.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`