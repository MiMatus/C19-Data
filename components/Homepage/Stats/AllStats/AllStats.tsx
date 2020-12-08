import React from "react"
import { SummaryData } from "../../../../utils/getSummaryData"
import {
  Count,
  CountIconWrapper,
  CountWrapper,
  Icon,
  Title,
  Wrapper,
} from "./AllStats.style"

export const AllStats: React.FC<SummaryData> = ({
  currentlyInfected,
  totalCured,
  totalDeaths,
  totalInfected,
  totalTests,
  lastDayInfected,
}) => {
  return (
    <Wrapper>
      <CountIconWrapper>
        <Icon src="/images/cured-icon.svg"></Icon>
        <CountWrapper>
          <Title>Vylečení</Title>
          <Count>{totalCured}</Count>
        </CountWrapper>
      </CountIconWrapper>
      <CountIconWrapper>
        <Icon src="/images/death-icon.svg"></Icon>
        <CountWrapper>
          <Title>Zosnulý</Title>
          <Count>{totalDeaths}</Count>
        </CountWrapper>
      </CountIconWrapper>
      <CountIconWrapper>
        <Icon src="/images/yesterday-icon.svg"></Icon>
        <CountWrapper>
          <Title>Nové prípady za včerejšek</Title>
          <Count>{lastDayInfected}</Count>
        </CountWrapper>
      </CountIconWrapper>
      <CountIconWrapper>
        <Icon src="/images/test-icon.svg"></Icon>
        <CountWrapper>
          <Title>Celkem testu</Title>
          <Count>{totalTests}</Count>
        </CountWrapper>
      </CountIconWrapper>
      <CountIconWrapper>
        <Icon src="/images/confirmed-test-icon.svg"></Icon>
        <CountWrapper>
          <Title>Potvrzené připady</Title>
          <Count>{totalInfected}</Count>
        </CountWrapper>
      </CountIconWrapper>
      <CountIconWrapper>
        <Icon src="/images/infected-icon.svg"></Icon>
        <CountWrapper>
          <Title>Aktívni případy</Title>
          <Count>{currentlyInfected}</Count>
        </CountWrapper>
      </CountIconWrapper>
      <CountIconWrapper>
        <Icon src="/images/percentage-icon.svg"></Icon>
        <CountWrapper>
          <Title>Smrtnost v procentech</Title>
          <Count>{(totalDeaths / (totalInfected / 100)).toFixed(2)}</Count>
        </CountWrapper>
      </CountIconWrapper>
    </Wrapper>
  )
}
