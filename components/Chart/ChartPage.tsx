import React from "react"
import { ListOfCharts } from "../Shared/ListOfCharts"
import { PageTitle } from "../Shared/PageTitle"
import { ChartPageWrapper, Text } from "./ChartPage.style"

export const ChartPage: React.FC = ({}) => {
  return (
    <ChartPageWrapper>
      <PageTitle>Grafy</PageTitle>
      <Text>Jednoducho a prehľadne zobrazené tie najdoležitejšie čísla</Text>
      <ListOfCharts></ListOfCharts>
    </ChartPageWrapper>
  )
}
