import { GetStaticProps, NextPage } from "next"
import { TestsChart } from "../../components/TestsChart"
import {
  getTestsInTimeData,
  TestsInTimeDataResponse,
} from "../../utils/getTestsInTimeData"

interface ChartsProps {
  testsInTimeDataResponse: TestsInTimeDataResponse
}

const Charts: NextPage<ChartsProps> = ({ testsInTimeDataResponse }) => {
  return <TestsChart testsInTimeData={testsInTimeDataResponse} />
}

export default Charts

export const getStaticProps: GetStaticProps = async () => {
  const testsInTimeDataResponse = await getTestsInTimeData()

  return {
    props: {
      testsInTimeDataResponse: testsInTimeDataResponse,
    },
  }
}
