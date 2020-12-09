import styled from "styled-components"

export const PageTitle = styled.h1`
  color: #000;
  font-size: 45px;
  font-weight: 900;
  margin: 0px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["mobile"]}px) {
    font-size: 65px;
  }
`
