import React from "react"
import { PageTitle } from "../Shared/PageTitle"
import {
  DailyNewsWrapper,
  Date,
  DetailLink,
  DetailRow,
  NewsContainer,
  NewsItem,
  NewsWrapper,
  Snippet,
  Source,
  Title,
  Wrapper,
} from "./InfoPage.style"

export const InfoPage: React.FC = ({}) => {
  return (
    <Wrapper>
      <PageTitle>Aktuálne informácie</PageTitle>
      <NewsWrapper>
        <DailyNewsWrapper>
          <Date>7. 12. 2020</Date>
          <NewsContainer>
            <NewsItem>
              <Title>
                Vláda požádá Sněmovnu o prodloužení nouzového stavu o 30 dnů,
                navrhuje také zpřísnit postihy za porušování opatření
              </Title>
              <Snippet>
                Vláda předloží Poslanecké sněmovně žádost o vyslovení souhlasu s
                prodloužením doby nouzového stavu o dalších třicet dnů, tedy do
                pondělí 11. ledna 2021. O podání žádosti rozhodl kabinet Andreje
                Babiše na jednání v pondělí 7. prosince 2020. Poslancům předloží
                i návrh zákona, kterým se zpřísní sankce za nedodržování vládou
                či Ministerstvem zdravotnictví nařízených protiepidemických
                pravidel.
              </Snippet>
              <DetailRow>
                <DetailLink
                  href="https://koronavirus.mzcr.cz/vlada-pozada-snemovnu-o-prodlouzeni-nouzoveho-stavu-o-30-dnu-navrhuje-take-zprisnit-postihy-za-porusovani-opatreni/"
                  target="_blank"
                >
                  Detail
                </DetailLink>
                <Source>Zdroj: https://onemocneni-aktualne.mzcr.cz</Source>
              </DetailRow>
            </NewsItem>
          </NewsContainer>
        </DailyNewsWrapper>
        <DailyNewsWrapper>
          <Date>6. 12. 2020</Date>
          <NewsContainer>
            <NewsItem>
              <Title>
                Ministerstvo zdravotnictví nastavuje nový časový režim
                aktualizace dat o covid-19 na webových stránkách
              </Title>
              <Snippet>
                Nově bude obsah webových stránek, které denně popisují data k
                epidemii covid-19, vč. protiepidemického systému, aktualizován
                za uzavřený Nově bude obsah webových stránek, které popisují
                data k epidemii covid-19, vč. protiepidemického systému,
                aktualizován za uzavřený kalendářní den pouze 1x denně, a to
                vždy k 8:00
              </Snippet>
              <DetailRow>
                <DetailLink
                  href="https://koronavirus.mzcr.cz/ministerstvo-zdravotnictvi-nastavuje-novy-casovy-rezim-aktualizace-dat-o-covid-19-na-webovych-strankach"
                  target="_blank"
                >
                  Detail
                </DetailLink>
                <Source>Zdroj: https://onemocneni-aktualne.mzcr.cz</Source>
              </DetailRow>
            </NewsItem>
          </NewsContainer>
        </DailyNewsWrapper>
        <DailyNewsWrapper>
          <Date>4. 12. 2020</Date>
          <NewsContainer>
            <NewsItem>
              <Title>
                Podle PES zůstává rizikové skóre na hodnotě 57, situace se i
                nadále různí v krajích
              </Title>
              <Snippet>
                Podle protiepidemického systému ČR je souhrnný index rizika pro
                Českou republiku na hodnotě 57, která je na úrovni třetího
                pohotovostního stupně. Aktuální epidemiologická situace v ČR
                zůstává obdobná jako v minulém týdnu, pozvolný pokles je
                viditelný v republikovém měřítku
              </Snippet>
              <DetailRow>
                <DetailLink
                  href="https://koronavirus.mzcr.cz/podle-pes-zustava-rizikove-skore-na-hodnote-57-situace-se-i-nadale-ruzni-v-krajich"
                  target="_blank"
                >
                  Detail
                </DetailLink>
                <Source>Zdroj: https://onemocneni-aktualne.mzcr.cz</Source>
              </DetailRow>
            </NewsItem>
            <NewsItem>
              <Title>
                Ze seznamu zemí s nízkým rizikem nákazy vypadne Kypr, do
                oranžové kategorie se přesune Malta
              </Title>
              <Snippet>
                Ministerstvo zdravotnictví na základě dostupných dat z
                Evropského střediska pro prevenci a kontrolu nemocí (ECDC)
                aktualizovalo seznam zemí s nízkým rizikem nákazy. Do červené
                kategorie se nově přesunul Kypr. Po návratu z této země tak bude
                od pondělí 7. 12. povinné podstoupit PCR test nebo nastoupit do
                karantény a také vyplnit příjezdový formulář. Naopak do oranžové
                kategorie se přesunula Malta.
              </Snippet>
              <DetailRow>
                <DetailLink
                  href="https://koronavirus.mzcr.cz/ze-seznamu-zemi-s-nizkym-rizikem-nakazy-vypadne-kypr-do-oranzove-kategorie-se-presune-malta/"
                  target="_blank"
                >
                  Detail
                </DetailLink>
                <Source>Zdroj: https://onemocneni-aktualne.mzcr.cz</Source>
              </DetailRow>
            </NewsItem>
          </NewsContainer>
        </DailyNewsWrapper>
      </NewsWrapper>
    </Wrapper>
  )
}
