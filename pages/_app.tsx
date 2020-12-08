import React from "react"
import { CustomTheme } from "../components/CustomTheme"
import { Layout } from "../components/Layout"
import type { AppProps } from "next/app"

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomTheme>
      <Layout headerOnScroll={pageProps.headerOnScroll ?? false}>
        <Component {...pageProps} />
      </Layout>
    </CustomTheme>
  )
}
export default CustomApp
