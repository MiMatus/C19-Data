import React from "react"
import {
  Description,
  LargeLogo,
  NavIcon,
  NavigationWrapper,
  Wrapper,
} from "./Control.style"

interface ControlProps {
  className?: string
}

export const Control: React.FC<ControlProps> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <LargeLogo src="/images/logo-large.png" />
      <Description>Data & Čisla trochu inak</Description>
      <NavigationWrapper>
        <NavIcon src="/images/stats-icon.svg"></NavIcon>
        <NavIcon src="/images/info-icon.svg"></NavIcon>
        <NavIcon src="/images/menu-icon.svg"></NavIcon>
      </NavigationWrapper>
    </Wrapper>
  )
}
