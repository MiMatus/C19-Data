import styled from "styled-components"

export const MenuWrapper = styled.div`
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 60px;
  left: 0px;
  z-index: -1;
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.padding.md};
  color: #fff;
`

export const MenuTitle = styled.div`
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
  border-bottom: 1px solid #fff;
  padding-bottom: ${({ theme }) => theme.padding.sm};
  font-size: ${({ theme }) => theme.font.size.md};
`

export const MenuList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const MenuItem = styled.div`
  font-weight: bold;
  margin-top: ${({ theme }) => theme.margin.sm};
  font-size: ${({ theme }) => theme.font.size.xl};
`
