import styled from "styled-components"
import { ChartList } from "./ChartList"
import { InTime } from "./InTime"
import { Stats } from "./Stats"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  margin-top: ${({ theme }) => theme.margin.xxl};
  margin-bottom: 0px;
  font-weight: 900;
  font-size: 64px;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
  }
`
export const TitlePart = styled.span`
  color: #f24e1e;
`

export const StyledStats = styled(Stats)`
  margin-top: ${({ theme }) => theme.margin.xxxl};
`

export const StyledInTime = styled(InTime)`
  margin-top: ${({ theme }) => theme.margin.xxxl};
`

export const StyledChartList = styled(ChartList)`
  margin-top: ${({ theme }) => theme.margin.xxxl};
  margin-left: ${({ theme }) => theme.margin.xl};
  margin-right: ${({ theme }) => theme.margin.xl};
`
