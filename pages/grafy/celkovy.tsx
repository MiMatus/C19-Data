import { GetStaticProps, NextPage } from "next"
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
  return <SummaryChart summaryInTimeData={summaryInTimeDataResponse} />
}

export default SummaryChartPage

export const getStaticProps: GetStaticProps = async () => {
  const summaryInTimeDataResponse = await getSummaryInTimeData()

  return {
    props: {
      summaryInTimeDataResponse: summaryInTimeDataResponse,
    },
  }
}
