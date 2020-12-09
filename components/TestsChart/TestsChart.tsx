import React from "react"
import { Line } from "react-chartjs-2"
import { TestsInTimeDataResponse } from "../../utils/getTestsInTimeData"
import { ChartPage } from "../Shared/ChartPage"

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

interface TestsChartProps {
  testsInTimeData: TestsInTimeDataResponse
}

export const TestsChart: React.FC<TestsChartProps> = ({ testsInTimeData }) => {
  const data = {
    labels: testsInTimeData.data.map((data) => data.date),
    datasets: [
      {
        label: "Počet testov",
        data: testsInTimeData.data.map((data) => data.totalTests),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
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
      title="Počet vykonaných testov"
    >
      <Line data={data} options={options} />
    </ChartPage>
  )
}
