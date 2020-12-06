import React from "react"
import { PageTitle } from "../Shared/PageTitle"
import { ContactWrapper, FeedbackImage, Text } from "./Contact.style"
import { Form } from "./Form"

export const Contact: React.FC = ({}) => {
  return (
    <ContactWrapper>
      <Text>
        Máte nejaké otázky ? Objavili ste chybu alebo len chcete vyjadriť svoj
        názor ohľadom webu ? Cenime si každý podnet, tak neváhajte a
      </Text>
      <PageTitle>Napíšte nám</PageTitle>
      <Form />
      <FeedbackImage src="/images/feedback.svg"></FeedbackImage>
    </ContactWrapper>
  )
}
