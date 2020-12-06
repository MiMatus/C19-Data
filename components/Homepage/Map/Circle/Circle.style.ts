import styled from "styled-components"

interface CircleWrapperProps {
  size: number
  deaths: number
  infected: number
}

export const MessageWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.border.color};
  background: #fff;
  padding: ${({ theme }) => theme.padding.sm};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;
  border-radius: 15px;
  white-space: nowrap;
  position: absolute;
  top: 0px;

  &::before {
    display: block;
    content: "";
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #fff;
    position: absolute;
    bottom: -10px;
    left: 0px;
    right: 0px;
    margin: auto;
  }
`

export const Row = styled.div``

export const CircleWrapper = styled.div<CircleWrapperProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ size }) => `${100 / size}px`};
  width: ${({ size }) => `${100 / size}px`};
  border-radius: 50%;
  position: relative;
  top: ${({ size }) => `-${50 / size}px`};
  left: ${({ size }) => `-${50 / size}px`};

  &::before {
    border-radius: 50%;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(242, 78, 30, 0.55);
  }
  &::after {
    border-radius: 50%;
    display: block;
    content: "";
    width: 30%;
    height: 30%;
    position: absolute;
    background: rgba(0, 0, 0, 0.55);
  }
`
