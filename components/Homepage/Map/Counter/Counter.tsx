import React from "react"
import { CountsWrapper, CountRow, Count, Title } from "./Counter.style"

interface CounterProps {
  currentlyInfected: number
  totalDeaths: number
  className?: string
}

export const Counter: React.FC<CounterProps> = ({
  className,
  totalDeaths,
  currentlyInfected,
}) => {
  return (
    <CountsWrapper className={className}>
      <CountRow color="red">
        <Count>{currentlyInfected}</Count>
        <Title>
          Aktuálne
          <br />
          nakažených
        </Title>
      </CountRow>
      <CountRow color="black">
        <Count>{totalDeaths}</Count>
        <Title>Mŕtvych</Title>
      </CountRow>
    </CountsWrapper>
  )
}
