import { GetStaticProps, NextPage } from "next"
import { InfectedByCountiesChart } from "../../components/InfectedByCountiesChart"
import {
  CountyStatsDataResponse,
  getCountyStatsData,
} from "../../utils/getCountyStatsData"

interface ChartsProps {
  countyStatsDataResponse: CountyStatsDataResponse
}

const Charts: NextPage<ChartsProps> = ({ countyStatsDataResponse }) => {
  return <InfectedByCountiesChart countyStatsData={countyStatsDataResponse} />
}

export default Charts

export const getStaticProps: GetStaticProps = async () => {
  const countyStatsDataResponse = await getCountyStatsData()

  return {
    props: {
      countyStatsDataResponse: countyStatsDataResponse,
    },
  }
}
