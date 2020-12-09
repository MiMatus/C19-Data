import React from "react"
import {
  ChartIcon,
  ChartItemWrapper,
  ChartTitle,
  ListWrapper,
} from "./ListOfCharts.style"
import Link from "next/link"

interface ListOfChartsProps {
  className?: string
}

export const ListOfCharts: React.FC<ListOfChartsProps> = ({ className }) => {
  return (
    <ListWrapper className={className}>
      <Link href="/grafy/pocet-testov">
        <ChartItemWrapper available>
          <ChartTitle>Počet testov</ChartTitle>
          <ChartIcon src="/images/line-chart.svg"></ChartIcon>
        </ChartItemWrapper>
      </Link>
      <Link href="/grafy/nakazeny-podla-krajov">
        <ChartItemWrapper available>
          <ChartTitle>Nakazený podľa krajov</ChartTitle>
          <ChartIcon src="/images/pie-chart.svg"></ChartIcon>
        </ChartItemWrapper>
      </Link>
      <Link href="/grafy/celkovy">
        <ChartItemWrapper available>
          <ChartTitle>Vyléčení/Zesnulý/Pozitívni</ChartTitle>
          <ChartIcon src="/images/chart.svg"></ChartIcon>
        </ChartItemWrapper>
      </Link>
      <ChartItemWrapper>
        <ChartTitle>Pripravujeme</ChartTitle>
        <ChartIcon src="/images/chart.svg"></ChartIcon>
      </ChartItemWrapper>
      <ChartItemWrapper>
        <ChartTitle>Pripravujeme</ChartTitle>
        <ChartIcon src="/images/chart.svg"></ChartIcon>
      </ChartItemWrapper>
    </ListWrapper>
  )
}
