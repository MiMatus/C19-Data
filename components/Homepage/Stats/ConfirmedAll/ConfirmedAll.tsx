import React from "react"
import {
  Count,
  CountIconWrapper,
  CountWrapper,
  Description,
  Icon,
  StatWrapper,
  Title,
  Wrapper,
} from "./ConfirmedAll.style"

export const ConfirmedAll: React.FC = ({}) => {
  return (
    <Wrapper>
      <StatWrapper direction="left">
        <Description>
          Celkový počet osob dosud pozitivně testovaných na původce onemocnění
          COVID‑19 (kumulativně od 1. 3. 2020) dle hlášení KHS a dle pozitivních
          nálezů laboratoří, které jsou určeny pro další šetření. S ohledem na
          fakt, že u publikovaných dat probíhá validace a průběžné doplňování
          hlášení, jsou přehledy osob s laboratorně prokázaným onemocněním
          COVID‑19 dle hlášení KHS a laboratoří uváděny k datu hlášení do
          systému a historicky se nemění (případné opravy tedy nejsou do již
          publikovaných výstupů promítnuty).
        </Description>
        <CountIconWrapper>
          <Icon src="/images/cured-icon.svg"></Icon>
          <CountWrapper>
            <Title>Potvrzené případy celkem</Title>
            <Count>100 000</Count>
          </CountWrapper>
        </CountIconWrapper>
      </StatWrapper>
      <StatWrapper direction="right">
        <Description>
          Celkový počet provedených PCR testů (včetně opakovaných testů u stejné
          osoby a bez rozdílu způsobu úhrady, tedy včetně samoplátců) na původce
          onemocnění COVID‑19 za celou ČR (kumulativně od 27. 1. 2020) podle
          hlášení laboratoří (rychlotesty nejsou do přehledu zařazeny). S
          ohledem na fakt, že hlášení o provedených testech mají určité zpoždění
          oproti reálnému stavu, se mohou denní záznamy zpětně mírně měnit právě
          z důvodu průběžného doplňování.
        </Description>
        <CountIconWrapper>
          <Icon src="/images/death-icon.svg"></Icon>
          <CountWrapper>
            <Title>Provedené testy</Title>
            <Count>100 000</Count>
          </CountWrapper>
        </CountIconWrapper>
      </StatWrapper>
    </Wrapper>
  )
}
