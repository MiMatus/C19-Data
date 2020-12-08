interface ReponseData {
  datum: string
  kumulativni_pocet_nakazenych: number
  kumulativni_pocet_vylecenych: number
  kumulativni_pocet_umrti: number
  kumulativni_pocet_testu: number
}

export interface SummaryInTimeData {
  totalInfected: number
  totalCured: number
  totalDeaths: number
  totalTests: number
  date: string
}

export interface SummaryInTimeDataResponse {
  error: boolean
  data: Array<SummaryInTimeData>
}

export const getSummaryInTimeData = async (): Promise<SummaryInTimeDataResponse> => {
  const response = await fetch(
    "https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/nakazeni-vyleceni-umrti-testy.json",
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }
  )

  if (!response.ok) {
    return {
      error: true,
      data: [],
    }
  }
  const responseData = (await response.json()).data as Array<ReponseData>

  return {
    error: false,
    data: responseData.map((rData) => {
      return {
        date: rData.datum,
        totalTests: rData.kumulativni_pocet_testu,
        totalCured: rData.kumulativni_pocet_vylecenych,
        totalInfected: rData.kumulativni_pocet_nakazenych,
        totalDeaths: rData.kumulativni_pocet_umrti,
      }
    }),
  }
}
