import React from "react"
import { MenuItem, MenuList, MenuTitle, MenuWrapper } from "./Menu.style"

interface MenuProps {
  className?: string
}

export const Menu: React.FC<MenuProps> = ({ className }) => {
  return (
    <MenuWrapper className={className}>
      <MenuTitle>Menu</MenuTitle>
      <MenuList>
        <MenuItem>Situacia v číslach</MenuItem>
        <MenuItem>Situacia v číslach</MenuItem>
        <MenuItem>Situacia v číslach</MenuItem>
      </MenuList>
    </MenuWrapper>
  )
}
