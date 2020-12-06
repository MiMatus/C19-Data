import React, { useState } from "react"
import { Device } from "../Device"

import {
  HeaderWrapper,
  LargeLogo,
  LogoWrapper,
  StyledMenuIcon,
} from "./Header.style"

import { Menu } from "./Menu"

export const Header: React.FC = ({}) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Device device="desktop">
          <LargeLogo src="/images/logo-large.png"></LargeLogo>
        </Device>
        <Device device="mobile">
          <LargeLogo src="/images/logo-small.png"></LargeLogo>
        </Device>
      </LogoWrapper>
      <StyledMenuIcon
        onClick={() => setMenuOpened(!menuOpened)}
        opened={menuOpened}
      ></StyledMenuIcon>
      {menuOpened && <Menu />}
    </HeaderWrapper>
  )
}
