import React from "react"
import {
  Icon,
  MainWrapper,
  MenuItem,
  MenuList,
  MenuTitle,
  MenuWrapper,
  SubItem,
  SubItemsWrapper,
  Text,
} from "./Menu.style"
import Link from "next/link"

interface MenuProps {
  onClick: () => void
  className?: string
}

export const Menu: React.FC<MenuProps> = ({ onClick, className }) => {
  return (
    <MenuWrapper className={className}>
      <MenuTitle>Menu</MenuTitle>
      <MenuList>
        <Link href="/grafy">
          <MenuItem onClick={onClick}>
            <MainWrapper>
              <Icon src="/images/stats-icon.svg"></Icon>
              <Text>Grafy</Text>
            </MainWrapper>
            <SubItemsWrapper>
              <Link href="/grafy/pocet-testov">
                <SubItem onClick={onClick}>Počet testov</SubItem>
              </Link>
              <Link href="/grafy/nakazeny-podla-krajov">
                <SubItem onClick={onClick}>
                  Počet nakazených podľa krajov
                </SubItem>
              </Link>
              <Link href="/grafy/celkovy">
                <SubItem onClick={onClick}>Celkovy</SubItem>
              </Link>
            </SubItemsWrapper>
          </MenuItem>
        </Link>
        <Link href="/informacie">
          <MenuItem onClick={onClick}>
            <MainWrapper>
              <Icon src="/images/info-icon.svg"></Icon>
              <Text>Základné informácie</Text>
            </MainWrapper>
          </MenuItem>
        </Link>
        <Link href="/kontakt">
          <MenuItem onClick={onClick}>
            <MainWrapper>
              <Icon src="/images/phone.svg"></Icon>
              <Text>Kontakt</Text>
            </MainWrapper>
          </MenuItem>
        </Link>
      </MenuList>
    </MenuWrapper>
  )
}
