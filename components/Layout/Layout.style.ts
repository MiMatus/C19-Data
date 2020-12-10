import styled from "styled-components"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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

export const Footer = styled.footer`
  height: 75px;
  background: #ffffff;
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.25);
  z-index: 100;
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #c2c2c2;
  padding: 5px 40px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    height: 50px;
  }
`
