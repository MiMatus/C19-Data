import styled from "styled-components"

export const ChartPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.padding.xl};
`

export const BackButton = styled.div`
  font-weight: 900;
  font-size: 20px;
  margin-bottom: ${({ theme }) => theme.margin.xl};
  cursor: pointer;
`

export const Text = styled.p`
  color: #000;
  font-weight: 100;
  margin: 0px;
  font-size: 16px;
  max-width: 80%;
`

export const ChartWrapper = styled.div`
  height: 400px;
  position: relative;
`
