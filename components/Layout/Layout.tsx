import Head from "next/head"
import React from "react"
import { Header } from "../Header"

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main></main>
      {children}
      <footer></footer>
    </>
  )
}
