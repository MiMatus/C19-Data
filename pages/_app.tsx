import React from "react"
import { CustomTheme } from "../components/CustomTheme"
import { Layout } from "../components/Layout"
import type { AppProps } from "next/app"

const CustomApp: React.FC<AppProps> = ({
  Component,
  pageProps: { headerOnScroll, ...props } = {},
}: AppProps) => {
  return (
    <CustomTheme>
      <Layout headerOnScroll={headerOnScroll ?? false}>
        <Component {...props} />
      </Layout>
    </CustomTheme>
  )
}
export default CustomApp
