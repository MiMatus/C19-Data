import React, { useEffect, useState } from "react"
import { Device } from "../Device"
import Link from "next/link"
import { useRouter } from "next/router"

import {
  HeaderWrapper,
  LargeLogo,
  LogoWrapper,
  SmallLogo,
  StyledMenuIcon,
} from "./Header.style"

import { Menu } from "./Menu"

export const Header: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)
  const [hidden, setHidden] = useState<boolean>(false)
  const router = useRouter()

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setHidden(false)
      return
    }
    setHidden(true)
    setMenuOpened(false)
  }

  useEffect(() => {
    const pathname = router.pathname
    setHidden(false)

    if (!["/", ""].includes(pathname)) {
      return
    }
    setHidden(true)
    setMenuOpened(false)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [router.pathname])

  if (hidden) {
    return null
  }

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link href="/">
          <LargeLogo src="/images/logo-large.png"></LargeLogo>
        </Link>
        <Link href="/">
          <SmallLogo src="/images/logo-small.png"></SmallLogo>
        </Link>
      </LogoWrapper>
      <StyledMenuIcon
        onClick={() => setMenuOpened(!menuOpened)}
        opened={menuOpened}
      ></StyledMenuIcon>
      {menuOpened && <Menu onClick={() => setMenuOpened(false)} />}
    </HeaderWrapper>
  )
}
