import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { TestsChart } from "../../components/TestsChart"
import {
  getTestsInTimeData,
  TestsInTimeDataResponse,
} from "../../utils/getTestsInTimeData"

interface ChartsProps {
  testsInTimeDataResponse: TestsInTimeDataResponse
}

const Charts: NextPage<ChartsProps> = ({ testsInTimeDataResponse }) => {
  return (
    <>
      <Head>
        <title key="title">C19-Data - Grafy - Pocet testov</title>
      </Head>
      <TestsChart testsInTimeData={testsInTimeDataResponse} />
    </>
  )
}

export default Charts

export const getStaticProps: GetStaticProps = async () => {
  const testsInTimeDataResponse = await getTestsInTimeData()

  return {
    props: {
      testsInTimeDataResponse: testsInTimeDataResponse,
    },
    revalidate: 3600,
  }
}
