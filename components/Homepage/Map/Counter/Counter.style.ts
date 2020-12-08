import styled from "styled-components"

export const CountsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`
interface CountRowProps {
  color: "black" | "red"
}

export const CountRow = styled.div<CountRowProps>`
  display: flex;
  align-items: flex-end;
  color: ${({ theme, color }) =>
    color === "black" ? "#000" : theme.error.color};
`

export const Count = styled.span`
  font-size: 34px;
  font-weight: bold;
`

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-left: ${({ theme }) => theme.margin.sm};
`
