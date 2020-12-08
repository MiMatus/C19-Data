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
  console.log(infectedInTimeDataResponse)
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

  console.log(infectedInTimeDataResponse)
  return {
    props: {
      headerOnScroll: true,
      countyDataResponse: countyDataResponse,
      summaryDataResponse: summaryDataResponse,
      infectedInTimeDataResponse: infectedInTimeDataResponse,
    },
  }
}
