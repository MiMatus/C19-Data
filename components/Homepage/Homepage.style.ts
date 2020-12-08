import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  margin-top: ${({ theme }) => theme.margin.xxl};
  margin-left: ${({ theme }) => theme.margin.xl};
  margin-bottom: 0px;
  font-weight: 900;
  font-size: 64px;
`
export const TitlePart = styled.span`
  color: #f24e1e;
`
