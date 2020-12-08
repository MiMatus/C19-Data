import React from "react"
import { CountyStatsDataResponse } from "../../utils/getCountyStatsData"
import { InfectedInTimeDataResponse } from "../../utils/getInfectedInTimeData"
import { SummaryDataResponse } from "../../utils/getSummaryData"
import {
  StyledChartList,
  StyledInTime,
  StyledStats,
  Title,
  TitlePart,
  Wrapper,
} from "./Homepage.style"
import { Map } from "./Map"

interface HomepageProps {
  countyData: CountyStatsDataResponse
  summaryData: SummaryDataResponse
  infectedInTimeData: InfectedInTimeDataResponse
}

export const Homepage: React.FC<HomepageProps> = ({
  countyData,
  summaryData,
  infectedInTimeData,
}) => {
  return (
    <Wrapper>
      <Map
        countyData={countyData}
        currentlyInfected={summaryData.data?.currentlyInfected ?? 0}
        totalDeaths={summaryData.data?.totalDeaths ?? 0}
      />
      <Title>
        Aktuálna <TitlePart>situácia</TitlePart>
      </Title>
      <StyledStats summaryData={summaryData} />
      <StyledInTime
        inTimeData={infectedInTimeData.data}
        totalInfected={summaryData.data?.totalInfected ?? 0}
      />
      <StyledChartList />
    </Wrapper>
  )
}
