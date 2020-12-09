import React from "react"
import { Pie } from "react-chartjs-2"
import { CountyStatsDataResponse } from "../../utils/getCountyStatsData"
import { ChartPage } from "../Shared/ChartPage"

interface InfectedByCountiesChartProps {
  countyStatsData: CountyStatsDataResponse
}

export const InfectedByCountiesChart: React.FC<InfectedByCountiesChartProps> = ({
  countyStatsData,
}) => {
  const data = {
    labels: countyStatsData.data.map((data) => data.title),
    datasets: [
      {
        label: "Počet nakazených",
        data: countyStatsData.data.map((data) => data.infectedCount),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(37, 168, 20, 1)",
          "rgba(156, 20, 168, 1)",
          "rgba(44, 24, 46,1)",
          "rgba(20, 168, 168,1)",
          "rgba(82, 6, 6,1)",
          "rgb(46, 22, 22)",
          "rgb(134, 121, 0)",
          "rgb(255, 0, 242)",
        ],
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
      title="Nakazený podľa krajov"
    >
      <Pie
        data={data}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: true,
            align: "start",
            position: "left",
          },
        }}
      />
    </ChartPage>
  )
}
