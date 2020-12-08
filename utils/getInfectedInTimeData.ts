interface ReponseData {
  datum: string
  prirustkovy_pocet_nakazenych: number
  kumulativni_pocet_nakazenych: number
}

export interface InfectedInTimeData {
  totalInfected: number
  date: string
}

export interface InfectedInTimeDataResponse {
  error: boolean
  data: Array<InfectedInTimeData>
}

export const getInfectedInTimeData = async (): Promise<InfectedInTimeDataResponse> => {
  const response = await fetch(
    "https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/nakaza.json",
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
        totalInfected: rData.kumulativni_pocet_nakazenych,
      }
    }),
  }
}
