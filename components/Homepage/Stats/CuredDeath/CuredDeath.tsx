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
} from "./CuredDeath.style"

interface CuredDeathProps {
  death: number
  cured: number
}

export const CuredDeath: React.FC<CuredDeathProps> = ({ cured, death }) => {
  return (
    <Wrapper>
      <StatWrapper direction="left">
        <Description>
          Celkový počet osob, které byly pozitivně laboratorně testovány metodou
          PCR na přítomnost původce onemocnění COVID‑19 (bez ohledu na klinický
          průběh nemoci a případně aplikovanou léčbu), a následně u nich bylo
          dvakrát provedeno toto laboratorní testování s negativním výsledkem.
        </Description>
        <CountIconWrapper>
          <Icon src="/images/cured-icon.svg"></Icon>
          <CountWrapper>
            <Title color="green">Vylečení</Title>
            <Count>{cured}</Count>
          </CountWrapper>
        </CountIconWrapper>
      </StatWrapper>
      <StatWrapper direction="right">
        <Description>
          Uvedená statistika počtu úmrtí osob (dále jen „počet úmrtí“) vychází z
          datového zdroje ISIN (Informační systém infekčních nemocí, ISIN) a
          obsahuje úmrtí osob, které byly pozitivně testovány na přítomnost
          původce onemocnění SARS-CoV-2 (metodou PCR), bez ohledu na to, jaké
          byly příčiny jejich úmrtí a k jejichž úmrtí došlo dříve, než byly v
          databázi ISIN označeny za vyléčené.
        </Description>
        <CountIconWrapper>
          <Icon src="/images/death-icon.svg"></Icon>
          <CountWrapper>
            <Title>Zosnulý</Title>
            <Count>{death}</Count>
          </CountWrapper>
        </CountIconWrapper>
      </StatWrapper>
    </Wrapper>
  )
}
