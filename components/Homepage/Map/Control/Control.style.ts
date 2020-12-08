import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 180px;
  flex-direction: column;
`
export const LargeLogo = styled.img`
  max-width: 100%;
`

export const Description = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.margin.sm};
  border-bottom: 2px dashed #000;
`

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const NavIcon = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;
`
