import React from "react"
import {
  Count,
  CountIconWrapper,
  CountWrapper,
  Icon,
  Title,
  Wrapper,
} from "./AllStats.style"

export const AllStats: React.FC = ({}) => {
  return (
    <Wrapper>
      <CountIconWrapper>
        <Icon src="/images/cured-icon.svg"></Icon>
        <CountWrapper>
          <Title>Vylečení</Title>
          <Count>100 000</Count>
        </CountWrapper>
      </CountIconWrapper>
      <CountIconWrapper>
        <Icon src="/images/death-icon.svg"></Icon>
        <CountWrapper>
          <Title>Zosnulý</Title>
          <Count>100 000</Count>
        </CountWrapper>
      </CountIconWrapper>
      <CountIconWrapper>
        <Icon src="/images/yesterday-icon.svg"></Icon>
        <CountWrapper>
          <Title>Nové prípady za včerejšek</Title>
          <Count>100 000</Count>
        </CountWrapper>
      </CountIconWrapper>
      <CountIconWrapper>
        <Icon src="/images/test-icon.svg"></Icon>
        <CountWrapper>
          <Title>Celkem testu</Title>
          <Count>100 000</Count>
        </CountWrapper>
      </CountIconWrapper>
      <CountIconWrapper>
        <Icon src="/images/confirmed-test-icon.svg"></Icon>
        <CountWrapper>
          <Title>Potvrzené připady</Title>
          <Count>100 000</Count>
        </CountWrapper>
      </CountIconWrapper>
      <CountIconWrapper>
        <Icon src="/images/infected-icon.svg"></Icon>
        <CountWrapper>
          <Title>Aktívni případy</Title>
          <Count>100 000</Count>
        </CountWrapper>
      </CountIconWrapper>
      <CountIconWrapper>
        <Icon src="/images/percentage-icon.svg"></Icon>
        <CountWrapper>
          <Title>Smrtnost v procentech</Title>
          <Count>100 000</Count>
        </CountWrapper>
      </CountIconWrapper>
    </Wrapper>
  )
}
