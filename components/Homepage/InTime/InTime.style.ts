import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  margin-top: ${({ theme }) => theme.margin.xxl};
  margin-bottom: 0px;
  font-weight: 900;
  font-size: 56px;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    text-align: start;
  }
`
export const TitlePart = styled.span`
  color: #f24e1e;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.margin.xxl};
  flex-direction: column;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    flex-direction: row;
  }
`

export const CountIconWrapper = styled.div`
  display: flex;
`

export const Icon = styled.img`
  height: 70px;
  width: 70px;
`

export const CountWrapper = styled.div``

export const CountTitle = styled.div`
  font-weight: 900;
  font-size: 15px;
  color: "#000";
`

export const Count = styled.span`
  font-weight: 900;
  font-size: 56px;
  white-space: nowrap;
`

export const Delimiter = styled.span`
  font-weight: 900;
  font-size: 64px;
  margin-left: ${({ theme }) => theme.margin.xxl};
  margin-right: ${({ theme }) => theme.margin.xxl};

  &::before {
    display: block;
    content: "||";
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    &::before {
      display: block;
      content: "/";
    }
  }
`
