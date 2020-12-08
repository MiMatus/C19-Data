import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.margin.xl};
  margin-right: ${({ theme }) => theme.margin.xl};
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    flex-direction: row;
  }
`

export const Description = styled.span`
  font-weight: 200;
  font-size: 20px;
  line-height: 23px;
`

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

interface StatWrapperProps {
  direction: "left" | "right"
}

export const StatWrapper = styled.div<StatWrapperProps>`
  margin-top: ${({ theme }) => theme.margin.xl};
  text-align: ${({ direction }) => (direction === "left" ? "start" : "end")};

  ${CountIconWrapper} {
    float: ${({ direction }) => (direction === "left" ? "right" : "left")};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    max-width: 45%;
    margin-top: 0px;
  }
`
