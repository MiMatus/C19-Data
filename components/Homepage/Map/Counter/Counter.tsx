import React from "react"
import { CountsWrapper, CountRow, Count, Title } from "./Counter.style"

interface CounterProps {
  className?: string
}

export const Counter: React.FC<CounterProps> = ({ className }) => {
  return (
    <CountsWrapper className={className}>
      <CountRow color="red">
        <Count>150 000</Count>
        <Title>
          Aktuálne
          <br />
          nakažených
        </Title>
      </CountRow>
      <CountRow color="black">
        <Count>8000</Count>
        <Title>Mŕtvych</Title>
      </CountRow>
    </CountsWrapper>
  )
}
