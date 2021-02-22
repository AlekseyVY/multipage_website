import {
  HamburgerLine,
  HeaderContainer,
  MenuToggle, MenuToggleInput,
  MobileNav,
  NavGroup,
  NavGroupContainer,
  NavLink,
  NavLogo
} from "./styles";
import Link from 'next/link'
import MobileHamburger from "../MobileHamburger/MobileHamburger";

const Header = () => {

  return (
    <HeaderContainer>
      <div>
        <Link href={'/'}>
          <NavLogo
            src={'/assets/shared/desktop/logo-dark.png'}
            alt={'logo of company'}
          />
        </Link>
      </div>
      <NavGroupContainer>
        <MobileNav>
          <MobileHamburger />
        </MobileNav>
        <NavGroup>
          <li>
            <Link href={'/About'}>
              <NavLink>OUR COMPANY</NavLink>
            </Link>
          </li>
          <li>
            <Link href={'/Locations'}>
              <NavLink>LOCATIONS</NavLink>
            </Link>
          </li>
          <li>
            <Link href={'/Contact'}>
              <NavLink>CONTACT</NavLink>
            </Link>
          </li>
        </NavGroup>
      </NavGroupContainer>
    </HeaderContainer>
  )
}


export default Header;