import {NavGroup, NavGroupContainer, NavLink, NavLogo} from "./styles";
import {FooterNavContainer} from "../Footer/styles";
import Link from 'next/link'

const Header = () => {

  return (
    <FooterNavContainer>
      <div>
        <Link href={'/'}>
          <NavLogo
            src={'/assets/shared/desktop/logo-dark.png'}
            alt={'logo of company'}
          />
        </Link>
      </div>
      <NavGroupContainer>
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
    </FooterNavContainer>
  )
}


export default Header;