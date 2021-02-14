import {HeaderContainer, NavGroup, NavGroupContainer, NavLink} from "./styles";
import Image from 'next/image'

const Header = () => {

  return (
    <HeaderContainer>
      <div>
        <Image
          src={'/assets/shared/desktop/logo-dark.png'}
          alt={'logo of company'}
          width={196}
          height={24}
          quality={75}
        />
      </div>
      <NavGroupContainer>
        <NavGroup>
          <li>
            <NavLink>OUR COMPANY</NavLink>
          </li>
          <li>
            <NavLink>LOCATIONS</NavLink>
          </li>
          <li>
            <NavLink>CONTACT</NavLink>
          </li>
        </NavGroup>
      </NavGroupContainer>
    </HeaderContainer>
  )
}


export default Header;