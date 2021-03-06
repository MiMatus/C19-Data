import styled from "styled-components"

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    flex-direction: row;
  }
`

interface ChartItemWrapperProps {
  available?: boolean
}

export const ChartItemWrapper = styled.div<ChartItemWrapperProps>`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 200px;
  height: 200px;
  margin: ${({ theme }) => theme.margin.xl};
  opacity: ${({ available }) => (available ? 1 : 0.5)};
  cursor: pointer;
`

export const ChartTitle = styled.h4`
  font-weight: 900;
  font-size: 12px;
  margin: 0px;
`

export const ChartIcon = styled.img``
