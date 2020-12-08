import styled from "styled-components"
import { ChartList } from "./ChartList"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  margin-top: ${({ theme }) => theme.margin.xxl};
  margin-left: ${({ theme }) => theme.margin.xl};
  margin-bottom: 0px;
  font-weight: 900;
  font-size: 64px;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    margin-left: ${({ theme }) => theme.margin.xl};
    text-align: start;
  }
`
export const TitlePart = styled.span`
  color: #f24e1e;
`

export const StyledChartList = styled(ChartList)`
  margin-top: ${({ theme }) => theme.margin.xl};
  margin-left: ${({ theme }) => theme.margin.xl};
  margin-right: ${({ theme }) => theme.margin.xl};
`
