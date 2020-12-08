import NutsDetails from "./nutsDetails"

interface TestData {
  nutsCode: string
  lat: number
  lng: number
  title: string
  infectedCount: number
  deathCount: number
}

export interface CountyStatsDataResponse {
  error: boolean
  data: Array<TestData>
}

interface TestsDataSet {
  datum: string
  kraj_nuts_kod: string
  okres_lau_kod: string
  kumulativni_pocet_nakazenych: number
  kumulativni_pocet_vylecenych: number
  kumulativni_pocet_umrti: number
}

const getParsedTestsData = (
  testsData: Array<TestsDataSet>
): Array<TestData> => {
  const parsedData = {}
  for (const testData of testsData) {
    if (typeof NutsDetails[testData.kraj_nuts_kod] === "undefined") {
      continue
    }
    if (
      typeof parsedData[testData.kraj_nuts_kod] === "undefined" ||
      parsedData[testData.kraj_nuts_kod].deathCount <
        testData.kumulativni_pocet_umrti
    ) {
      parsedData[testData.kraj_nuts_kod] = {
        nutsCode: testData.kraj_nuts_kod,
        lat: NutsDetails[testData.kraj_nuts_kod].lat,
        lng: NutsDetails[testData.kraj_nuts_kod].lng,
        title: NutsDetails[testData.kraj_nuts_kod].title,
        infectedCount: testData.kumulativni_pocet_nakazenych,
        deathCount: testData.kumulativni_pocet_umrti,
      }
    }
  }
  return Object.values(parsedData)
}

export const getCountyStatsData = async (): Promise<CountyStatsDataResponse> => {
  const response = await fetch(
    "https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/kraj-okres-nakazeni-vyleceni-umrti.json",
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
  return {
    error: false,
    data: getParsedTestsData((await response.json()).data),
  } // parses JSON response into native JavaScript objects
}
