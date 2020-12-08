import React from "react"
import { Line } from "react-chartjs-2"
import { SummaryInTimeDataResponse } from "../../utils/getSummaryInTimeData"
import { PageTitle } from "../Shared/PageTitle"
import {
  BackButton,
  ChartPageWrapper,
  ChartWrapper,
  Text,
} from "./SummaryChart.style"

const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
      },
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
}

interface SummaryChartProps {
  summaryInTimeData: SummaryInTimeDataResponse
}

export const SummaryChart: React.FC<SummaryChartProps> = ({
  summaryInTimeData,
}) => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "# of No Votes",
        data: [1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-2",
      },
    ],
  }

  return (
    <ChartPageWrapper>
      <BackButton>{"< Späť na zoznam grafov"}</BackButton>
      <Text>
        Celkový počet osob dosud pozitivně testovaných na původce onemocnění
        COVID‑19 (kumulativně od 1. 3. 2020) dle hlášení KHS a dle pozitivních
        nálezů laboratoří, které jsou určeny pro další šetření. S ohledem na
        fakt, že u publikovaných dat probíhá validace a průběžné doplňování
        hlášení, jsou přehledy osob s laboratorně prokázaným onemocněním
        COVID‑19 dle hlášení KHS a laboratoří uváděny k datu hlášení do systému
        a historicky se nemění (případné opravy tedy nejsou do již publikovaných
        výstupů promítnuty).
      </Text>
      <PageTitle>Celkový prehľad</PageTitle>
      <ChartWrapper>
        <Line data={data} options={options} />
      </ChartWrapper>
    </ChartPageWrapper>
  )
}
