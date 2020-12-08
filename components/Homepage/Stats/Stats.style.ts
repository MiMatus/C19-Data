import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.margin.xl};
  margin-right: ${({ theme }) => theme.margin.xl};
`
export const Title = styled.h3`
  font-weight: 900;
  font-size: 40px;
  border-bottom: 2px dashed rgba(26, 188, 254, 1);
  width: fit-content;
  margin: 0px;
  margin-bottom: ${({ theme }) => theme.margin.xl};
`

export const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const LeftSlideIcon = styled.img`
  height: 25px;
  width: 28px;
  flex: 0 0 auto;
  cursor: pointer;
`

export const RightSlideIcon = styled(LeftSlideIcon)`
  transform: rotate(180deg);
`

interface ProgressCircleProps {
  active: boolean
}

export const ProgressCircle = styled.div<ProgressCircleProps>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#000" : "#fff")};
  border: 1px solid ${({ theme }) => theme.border.color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const SliderProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.margin.xl};

  ${ProgressCircle} {
    margin-left: ${({ theme }) => theme.margin.xl};
    margin-right: ${({ theme }) => theme.margin.xl};
  }

  ${ProgressCircle}:first-child {
    margin-left: 0px;
  }

  ${ProgressCircle}:last-child {
    margin-right: 0px;
  }
`
