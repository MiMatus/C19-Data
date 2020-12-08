import styled from "styled-components"
import { Control } from "./Control"
import { Counter } from "./Counter"

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

export const StyledCounter = styled(Counter)`
  position: absolute;
  z-index: 10;
  top: ${({ theme }) => theme.margin.xl};
  left: ${({ theme }) => theme.margin.xl};
`

export const StyledControl = styled(Control)`
  position: absolute;
  left: 0px;
  top: ${({ theme }) => theme.margin.xl};
  right: 0px;
  margin: auto;
  z-index: 10;
`
