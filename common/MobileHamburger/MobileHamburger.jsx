import * as React from "react";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";



const MobileHamburger = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  )
}

export default MobileHamburger;