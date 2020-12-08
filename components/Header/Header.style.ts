import styled from "styled-components"
import { MenuIcon } from "./MenuIcon"

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  z-index: 100;
  position: sticky;
  top: 0px;
  flex: 0 0 auto;
`

export const LogoWrapper = styled.div`
  display: flex;
  height: 60%;
  margin-left: ${({ theme }) => theme.margin.xl};
`

export const LargeLogo = styled.img`
  max-height: 100%;
`
export const StyledMenuIcon = styled(MenuIcon)`
  margin-right: ${({ theme }) => theme.margin.xl};
`
