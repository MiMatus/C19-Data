import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 40px;
  border-bottom: 2px dashed rgba(26, 188, 254, 1);
  width: fit-content;
  margin: 0px;
  margin-bottom: ${({ theme }) => theme.margin.xl};
`

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
