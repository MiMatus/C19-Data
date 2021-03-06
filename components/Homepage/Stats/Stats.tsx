import React, { useEffect, useState } from "react"
import { SummaryDataResponse } from "../../../utils/getSummaryData"
import { AllStats } from "./AllStats"
import { ConfirmedAll } from "./ConfirmedAll"
import { CuredDeath } from "./CuredDeath"
import {
  LeftSlideIcon,
  ProgressCircle,
  RightSlideIcon,
  SliderProgressWrapper,
  SliderWrapper,
  Title,
  Wrapper,
} from "./Stats.style"

interface StatsProps {
  className?: string
  summaryData: SummaryDataResponse
}

export const Stats: React.FC<StatsProps> = ({ className, summaryData }) => {
  const StatsList = [
    <CuredDeath
      key="0"
      cured={summaryData.data?.totalCured ?? 0}
      death={summaryData.data?.totalDeaths ?? 0}
    />,
    <AllStats key="1" {...summaryData.data} />,
    <ConfirmedAll
      key="2"
      totalInfected={summaryData.data?.totalInfected ?? 0}
      totalTests={summaryData.data?.totalTests ?? 0}
    />,
  ]

  const [sliderCount, setSliderCount] = useState<number>(0)
  const [intervalRef, setIntervalRef] = useState<number | undefined>()

  const moveSlider = (forward: boolean) => {
    forward &&
      setSliderCount((prevCount) =>
        prevCount < StatsList.length - 1 ? prevCount + 1 : 0
      )
    !forward &&
      setSliderCount((prevCount) =>
        prevCount - 1 > 0 ? prevCount - 1 : StatsList.length - 1
      )
  }
  const startInterval = () => {
    clearInterval()
    const interval = setInterval(() => {
      moveSlider(true)
    }, 5000)
    setIntervalRef(interval)
  }

  const stopInterval = () => {
    clearInterval(intervalRef)
  }

  useEffect(() => {
    //startInterval()
    return () => stopInterval()
  }, [])

  return (
    <Wrapper
      className={className}
      onMouseEnter={() => stopInterval()}
      onMouseLeave={() => null /*startInterval()*/}
    >
      <Title>....v číslach</Title>
      <SliderWrapper>
        <LeftSlideIcon
          src="/images/arrow-left-icon.svg"
          onClick={() => moveSlider(false)}
        />
        {StatsList[sliderCount]}
        <RightSlideIcon
          src="/images/arrow-left-icon.svg"
          onClick={() => moveSlider(true)}
        />
      </SliderWrapper>
      <SliderProgressWrapper>
        {StatsList.map((Stat, index) => (
          <ProgressCircle
            key={index.toString()}
            active={index === sliderCount}
          />
        ))}
      </SliderProgressWrapper>
    </Wrapper>
  )
}
