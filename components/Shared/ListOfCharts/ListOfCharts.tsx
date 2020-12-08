import React from "react"
import {
  ChartIcon,
  ChartItemWrapper,
  ChartTitle,
  ListWrapper,
} from "./ListOfCharts.style"

interface ListOfChartsProps {
  className?: string
}

export const ListOfCharts: React.FC<ListOfChartsProps> = ({ className }) => {
  return (
    <ListWrapper className={className}>
      <ChartItemWrapper available>
        <ChartTitle>Počet testov</ChartTitle>
        <ChartIcon src="/images/line-chart.svg"></ChartIcon>
      </ChartItemWrapper>
      <ChartItemWrapper available>
        <ChartTitle>Nakažení dle KHS</ChartTitle>
        <ChartIcon src="/images/pie-chart.svg"></ChartIcon>
      </ChartItemWrapper>
      <ChartItemWrapper available>
        <ChartTitle>Vyléčení/Zesnulý/Pozitívni</ChartTitle>
        <ChartIcon src="/images/chart.svg"></ChartIcon>
      </ChartItemWrapper>
      <ChartItemWrapper>
        <ChartTitle>Vyléčení/Zesnulý/Pozitívni</ChartTitle>
        <ChartIcon src="/images/chart.svg"></ChartIcon>
      </ChartItemWrapper>
      <ChartItemWrapper>
        <ChartTitle>Vyléčení/Zesnulý/Pozitívni</ChartTitle>
        <ChartIcon src="/images/chart.svg"></ChartIcon>
      </ChartItemWrapper>
    </ListWrapper>
  )
}
