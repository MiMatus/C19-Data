import styled from "styled-components"

export const CountIconWrapper = styled.div`
  display: flex;
`

export const Icon = styled.img`
  height: 40px;
  width: 40px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    height: 70px;
    width: 70px;
  }
`

export const CountWrapper = styled.div``

interface TitleProps {
  color?: "green" | undefined
}

export const Title = styled.div<TitleProps>`
  font-weight: 900;
  font-size: 12px;
  color: ${({ color }) => (color === "green" ? "#0ACF83" : "#000")};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    font-size: 15px;
  }
`

export const Count = styled.span`
  font-weight: 900;
  font-size: 36px;
  white-space: nowrap;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    font-size: 56px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  ${CountIconWrapper} {
    margin: ${({ theme }) => theme.margin.sm};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    ${CountIconWrapper} {
      margin: ${({ theme }) => theme.margin.xl};
    }
  }
`
