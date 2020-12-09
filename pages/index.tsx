import { GetStaticProps, NextPage } from "next"

import { Homepage as HomepageComponent } from "../components/Homepage"
import {
  CountyStatsDataResponse,
  getCountyStatsData,
} from "../utils/getCountyStatsData"
import { getSummaryData, SummaryDataResponse } from "../utils/getSummaryData"
import {
  getInfectedInTimeData,
  InfectedInTimeDataResponse,
} from "../utils/getInfectedInTimeData"

interface HomePageProps {
  countyDataResponse: CountyStatsDataResponse
  summaryDataResponse: SummaryDataResponse
  infectedInTimeDataResponse: InfectedInTimeDataResponse
}

const HomePage: NextPage<HomePageProps> = ({
  countyDataResponse,
  summaryDataResponse,
  infectedInTimeDataResponse,
}) => {
  return (
    <HomepageComponent
      countyData={countyDataResponse}
      summaryData={summaryDataResponse}
      infectedInTimeData={infectedInTimeDataResponse}
    ></HomepageComponent>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  const countyDataResponse = await getCountyStatsData()
  const summaryDataResponse = await getSummaryData()
  const infectedInTimeDataResponse = await getInfectedInTimeData()

  return {
    props: {
      countyDataResponse: countyDataResponse,
      summaryDataResponse: summaryDataResponse,
      infectedInTimeDataResponse: infectedInTimeDataResponse,
    },
    revalidate: 3600,
  }
}
