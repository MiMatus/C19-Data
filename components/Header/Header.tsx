import React, { useEffect, useState } from "react"
import { Device } from "../Device"

import {
  HeaderWrapper,
  LargeLogo,
  LogoWrapper,
  StyledMenuIcon,
} from "./Header.style"

import { Menu } from "./Menu"

interface HeaderProps {
  onScroll: boolean
}

export const Header: React.FC<HeaderProps> = ({ onScroll }) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)
  const [hidden, setHidden] = useState<boolean>(false)

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setHidden(false)
      return
    }
    setHidden(true)
    setMenuOpened(false)
  }

  useEffect(() => {
    console.log(onScroll)
    if (!onScroll || typeof window === "undefined") {
      return
    }
    setHidden(true)
    setMenuOpened(false)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (hidden) {
    return null
  }

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
