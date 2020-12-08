import styled from "styled-components"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const MainContent = styled.main`
  flex: 1 0 auto;
  display: flex;

  & > * {
    flex: 1 0 auto;
    max-width: 100%;
  }
`
