import React from "react"
import { Line } from "react-chartjs-2"
import { SummaryInTimeDataResponse } from "../../utils/getSummaryInTimeData"
import { ChartPage } from "../Shared/ChartPage"

const options = {
  maintainAspectRatio: false,
  responsive: true,
  tooltips: {
    mode: "index",
    intersect: false,
  },
  hover: {
    mode: "nearest",
    intersect: true,
  },
  scales: {
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Value",
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
    type: "line",
    labels: summaryInTimeData.data.map((data) => data.date),
    datasets: [
      {
        label: "Počet nakazených",
        data: summaryInTimeData.data.map((data) => data.totalInfected),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
      },
      {
        hidden: true,
        label: "Počet testov",
        data: summaryInTimeData.data.map((data) => data.totalTests),
        fill: false,
        backgroundColor: "#c2c2c2",
        borderColor: "#c2c2c2",
      },
      {
        label: "Počet vyliečených",
        data: summaryInTimeData.data.map((data) => data.totalCured),
        fill: false,
        backgroundColor: "#0ACF83",
        borderColor: "#0ACF83",
      },
      {
        label: "Počet úmrtí",
        data: summaryInTimeData.data.map((data) => data.totalDeaths),
        fill: false,
        backgroundColor: "#000",
        borderColor: "#000",
      },
    ],
  }

  return (
    <ChartPage
      description="        Celkový počet osob dosud pozitivně testovaných na původce onemocnění
    COVID‑19 (kumulativně od 1. 3. 2020) dle hlášení KHS a dle pozitivních
    nálezů laboratoří, které jsou určeny pro další šetření. S ohledem na
    fakt, že u publikovaných dat probíhá validace a průběžné doplňování
    hlášení, jsou přehledy osob s laboratorně prokázaným onemocněním
    COVID‑19 dle hlášení KHS a laboratoří uváděny k datu hlášení do systému
    a historicky se nemění (případné opravy tedy nejsou do již publikovaných
    výstupů promítnuty)."
      title="Celkový prehľad"
    >
      <Line data={data} options={options} />
    </ChartPage>
  )
}
