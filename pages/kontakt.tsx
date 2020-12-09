import { NextPage } from "next"
import Head from "next/head"
import { Contact as ContactComponent } from "../components/Contact"

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title key="title">C19-Data - Kontakt</title>
      </Head>
      <ContactComponent />
    </>
  )
}

export default Contact
