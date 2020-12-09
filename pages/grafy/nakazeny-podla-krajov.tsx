import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { InfectedByCountiesChart } from "../../components/InfectedByCountiesChart"
import {
  CountyStatsDataResponse,
  getCountyStatsData,
} from "../../utils/getCountyStatsData"

interface ChartsProps {
  countyStatsDataResponse: CountyStatsDataResponse
}

const Charts: NextPage<ChartsProps> = ({ countyStatsDataResponse }) => {
  return (
    <>
      <Head>
        <title key="title">C19-Data - Grafy - Nakazaný podľa okresov</title>
      </Head>
      <InfectedByCountiesChart countyStatsData={countyStatsDataResponse} />
    </>
  )
}

export default Charts

export const getStaticProps: GetStaticProps = async () => {
  const countyStatsDataResponse = await getCountyStatsData()

  return {
    props: {
      countyStatsDataResponse: countyStatsDataResponse,
    },
    revalidate: 3600,
  }
}
