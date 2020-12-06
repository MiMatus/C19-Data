import React, { useState } from "react"
import { CircleWrapper, MessageWrapper, Row } from "./Circle.style"

interface CircleProps {
  size: number
  deaths: number
  infected: number
  lat: number
  lng: number
}

export const Circle: React.FC<CircleProps> = ({ size, deaths, infected }) => {
  const [infoOpened, setInfoOpened] = useState<boolean>(false)

  return (
    <CircleWrapper
      size={size}
      deaths={deaths}
      infected={infected}
      onClick={() => setInfoOpened(!infoOpened)}
    >
      {infoOpened && (
        <MessageWrapper>
          <Row>
            <strong>Nakazený:</strong> {infected}
          </Row>
          <Row>
            <strong>Úmrtia:</strong> {deaths}
          </Row>
          <Row>
            <strong>Percentuálne:</strong> {deaths / (infected / 100)}%
          </Row>
        </MessageWrapper>
      )}
    </CircleWrapper>
  )
}
