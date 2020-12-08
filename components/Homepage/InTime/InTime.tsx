import React, { useEffect, useState } from "react"
import { InfectedInTimeData } from "../../../utils/getInfectedInTimeData"
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

interface InTimeProps {
  className?: string
  inTimeData: Array<InfectedInTimeData>
  totalInfected: number
}

export const InTime: React.FC<InTimeProps> = ({
  className,
  inTimeData: Counts,
  totalInfected,
}) => {
  const [index, setIndex] = useState<number>(0)
  const [count, setCount] = useState<number>(0)
  const [intervalRef, setIntervalRef] = useState<number | undefined>()

  useEffect(() => {
    clearInterval(intervalRef)
    if (index >= Counts.length - 1) {
      return
    }
    const nextCount =
      Counts[Math.min(index + 1, Counts.length - 1)].totalInfected
    const nextSpeed = 5000 / (nextCount - Counts[index].totalInfected)
    setIntervalRef(
      setInterval(() => {
        setCount((prevCount) => prevCount + 1)
      }, nextSpeed)
    )
    return () => clearInterval(intervalRef)
  }, [index])

  useEffect(() => {
    const nextCount =
      Counts[Math.min(index + 1, Counts.length - 1)].totalInfected
    if (count >= nextCount) {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }, [count])

  useEffect(() => {
    setIndex(0)
  }, [])

  return (
    <Wrapper className={className}>
      <Title>
        Nakazený <TitlePart>v čase</TitlePart>
      </Title>
      <Row>
        <CountIconWrapper>
          <Icon src="/images/yesterday-icon.svg"></Icon>
          <CountWrapper>
            <CountTitle>Celkovo nakazených</CountTitle>
            <Count>{totalInfected}</Count>
          </CountWrapper>
        </CountIconWrapper>
        <Delimiter></Delimiter>
        <CountIconWrapper>
          <CountWrapper>
            <CountTitle>{Counts[index].date}</CountTitle>
            <Count>{count}</Count>
          </CountWrapper>
        </CountIconWrapper>
      </Row>
    </Wrapper>
  )
}
