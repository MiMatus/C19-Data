import { NextPage } from "next"
import Head from "next/head"
import { ChartPage } from "../../components/Chart"

const Charts: NextPage = () => {
  return (
    <>
      <Head>
        <title key="title">C19-Data - Grafy</title>
      </Head>
      <ChartPage />
    </>
  )
}

export default Charts
