import React from "react"
import { ListOfCharts } from "../../Shared/ListOfCharts"
import { Title, Wrapper } from "./ChartList.style"

interface ChartListProps {
  className?: string
}

export const ChartList: React.FC<ChartListProps> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Title>...v grafoch</Title>
      <ListOfCharts />
    </Wrapper>
  )
}
