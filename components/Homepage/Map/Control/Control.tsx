import React from "react"
import {
  Description,
  LargeLogo,
  NavIcon,
  NavigationWrapper,
  Wrapper,
} from "./Control.style"
import Link from "next/link"

interface ControlProps {
  className?: string
}

export const Control: React.FC<ControlProps> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <LargeLogo src="/images/logo-large.png" />
      <Description>Data & Čisla trochu inak</Description>
      <NavigationWrapper>
        <Link href="/grafy">
          <NavIcon src="/images/stats-icon.svg"></NavIcon>
        </Link>
        <Link href="/informacie">
          <NavIcon src="/images/info-icon.svg"></NavIcon>
        </Link>
        <Link href="/kontakt">
          <NavIcon src="/images/phone.svg"></NavIcon>
        </Link>
      </NavigationWrapper>
    </Wrapper>
  )
}
