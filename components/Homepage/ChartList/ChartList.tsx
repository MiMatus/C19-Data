import React from "react"
import {
  ChartIcon,
  ChartItemWrapper,
  ChartTitle,
  ListWrapper,
  Title,
  Wrapper,
} from "./ChartList.style"

interface ChartListProps {
  className?: string
}

export const ChartList: React.FC<ChartListProps> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Title>...v grafoch</Title>
      <ListWrapper>
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
    </Wrapper>
  )
}
