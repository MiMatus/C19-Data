import React from "react"
import { Title, TitlePart, Wrapper } from "./Homepage.style"
import { InTime } from "./InTime"
import { Map } from "./Map"
import { Stats } from "./Stats"

export const Homepage: React.FC = ({}) => {
  return (
    <Wrapper>
      <Map />
      <Title>
        Aktuálna <TitlePart>situácia</TitlePart>
      </Title>
      <Stats></Stats>
      <InTime />
    </Wrapper>
  )
}
