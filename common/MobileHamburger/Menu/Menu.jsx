import {NavMenuExpandCont, StyledMenu} from "./styles";
import Link from "next/link";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavMenuExpandCont>
        <Link href={'/About'}>
          <a>
            OUR COMPANY
          </a>
        </Link>
        <Link href={'/Locations'}>
          <a>
            LOCATIONS
          </a>
        </Link>
        <Link href={'/Contact'}>
          <a>
            CONTACT
          </a>
        </Link>
      </NavMenuExpandCont>
    </StyledMenu>
  )
}

export default Menu