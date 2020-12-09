import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { SummaryChart } from "../../components/SummaryChart"
import {
  getSummaryInTimeData,
  SummaryInTimeDataResponse,
} from "../../utils/getSummaryInTimeData"

interface SummaryChartProps {
  summaryInTimeDataResponse: SummaryInTimeDataResponse
}

const SummaryChartPage: NextPage<SummaryChartProps> = ({
  summaryInTimeDataResponse,
}) => {
  return (
    <>
      <Head>
        <title key="title">C19-Data - Grafy - Celkový prehľad</title>
      </Head>
      <SummaryChart summaryInTimeData={summaryInTimeDataResponse} />
    </>
  )
}

export default SummaryChartPage

export const getStaticProps: GetStaticProps = async () => {
  const summaryInTimeDataResponse = await getSummaryInTimeData()

  return {
    props: {
      summaryInTimeDataResponse: summaryInTimeDataResponse,
    },
    revalidate: 3600,
  }
}
