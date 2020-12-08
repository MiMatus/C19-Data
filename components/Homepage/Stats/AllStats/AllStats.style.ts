import styled from "styled-components"

export const CountIconWrapper = styled.div`
  display: flex;
`

export const Icon = styled.img`
  height: 70px;
  width: 70px;
`

export const CountWrapper = styled.div``

interface TitleProps {
  color?: "green" | undefined
}

export const Title = styled.div<TitleProps>`
  font-weight: 900;
  font-size: 15px;
  color: ${({ color }) => (color === "green" ? "#0ACF83" : "#000")};
`

export const Count = styled.span`
  font-weight: 900;
  font-size: 56px;
  white-space: nowrap;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  ${CountIconWrapper} {
    margin-left: ${({ theme }) => theme.margin.xl};
    margin-right: ${({ theme }) => theme.margin.xl};
    margin-bottom: ${({ theme }) => theme.margin.xl};
  }

  ${CountIconWrapper}:first-child {
    margin-left: 0px;
  }

  ${CountIconWrapper}:last-child {
    margin-right: 0px;
  }
`
