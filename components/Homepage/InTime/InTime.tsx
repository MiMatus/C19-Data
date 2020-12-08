import React, { useEffect, useState } from "react"
import {
  Count,
  CountIconWrapper,
  CountTitle,
  CountWrapper,
  Delimiter,
  Icon,
  Row,
  Title,
  TitlePart,
  Wrapper,
} from "./InTime.style"

const Counts = [
  { date: new Date(), count: 10 },
  { date: new Date(), count: 50 },
  { date: new Date(), count: 500 },
  { date: new Date(), count: 1000 },
]

export const InTime: React.FC = ({}) => {
  const [index, setIndex] = useState<number>(0)
  const [count, setCount] = useState<number>(0)
  const [intervalRef, setIntervalRef] = useState<number | undefined>()

  useEffect(() => {
    clearInterval(intervalRef)
    if (index >= Counts.length - 1) {
      return
    }
    const nextCount = Counts[Math.min(index + 1, Counts.length - 1)].count
    const nextSpeed = 5000 / (nextCount - Counts[index].count)
    setIntervalRef(
      setInterval(() => {
        setCount((prevCount) => prevCount + 1)
      }, nextSpeed)
    )
    return () => clearInterval(intervalRef)
  }, [index])

  useEffect(() => {
    const nextCount = Counts[Math.min(index + 1, Counts.length - 1)].count
    if (count >= nextCount) {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }, [count])

  useEffect(() => {
    setIndex(0)
  }, [])

  return (
    <Wrapper>
      <Title>
        Nakazený <TitlePart>v čase</TitlePart>
      </Title>
      <Row>
        <CountIconWrapper>
          <Icon src="/images/yesterday-icon.svg"></Icon>
          <CountWrapper>
            <CountTitle>Smrtnost v procentech</CountTitle>
            <Count>100 000</Count>
          </CountWrapper>
        </CountIconWrapper>
        <Delimiter></Delimiter>
        <CountIconWrapper>
          <CountWrapper>
            <CountTitle>{`${Counts[index].date.getUTCDate()}.${Counts[
              index
            ].date.getUTCMonth()}.${Counts[
              index
            ].date.getUTCFullYear()}`}</CountTitle>
            <Count>{count}</Count>
          </CountWrapper>
        </CountIconWrapper>
      </Row>
    </Wrapper>
  )
}
