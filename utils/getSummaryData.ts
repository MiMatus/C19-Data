export interface SummaryData {
  currentlyInfected: number
  totalInfected: number
  lastDayInfected: number
  totalCured: number
  totalDeaths: number
  totalTests: number
}

export interface SummaryDataResponse {
  error: boolean
  data?: SummaryData
}

export const getSummaryData = async (): Promise<SummaryDataResponse> => {
  const response = await fetch(
    "https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/zakladni-prehled.json",
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
      data: null,
    }
  }
  const responseData = (await response.json()).data[0]
  return {
    error: false,
    data: {
      currentlyInfected: responseData.aktivni_pripady ?? 0,
      lastDayInfected: responseData.potvrzene_pripady_vcerejsi_den ?? 0,
      totalInfected: responseData.potvrzene_pripady_celkem ?? 0,
      totalCured: responseData.vyleceni ?? 0,
      totalDeaths: responseData.umrti ?? 0,
      totalTests: responseData.provedene_testy_celkem ?? 0,
    },
  }
}
