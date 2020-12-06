import React, { FC } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont,'Arial';
  font-size: 16px;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`

export const CustomTheme: FC = ({ children }) => {
  const styles = {}

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={styles}>{children}</ThemeProvider>
    </>
  )
}
