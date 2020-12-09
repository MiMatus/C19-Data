import React from "react"
import { PageTitle } from "../PageTitle"
import {
  BackButton,
  ChartPageWrapper,
  ChartWrapper,
  Text,
} from "./ChartPage.style"
import Link from "next/link"

interface ChartPageProps {
  description: string
  title: string
  children: any
}

export const ChartPage: React.FC<ChartPageProps> = ({
  description,
  title,
  children,
}) => {
  return (
    <ChartPageWrapper>
      <Link href="/grafy">
        <BackButton>{"< Späť na zoznam grafov"}</BackButton>
      </Link>
      <Text>{description}</Text>
      <PageTitle>{title}</PageTitle>
      <ChartWrapper>{children}</ChartWrapper>
    </ChartPageWrapper>
  )
}
