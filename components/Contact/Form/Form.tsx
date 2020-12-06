import React, { useState } from "react"
import { Message } from "../../Shared/Message"
import {
  EmailInput,
  FormWrapper,
  MessageInput,
  Row,
  SubmitButton,
} from "./Form.style"

export const Form: React.FC = ({}) => {
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [messageSent, setMessageSent] = useState<boolean>(true)

  return (
    <FormWrapper>
      <Row>
        <EmailInput
          type="email"
          title="Váš email"
          errorMessage="Email je povinný"
          onInput={(value) => setEmail(value)}
        ></EmailInput>
        <SubmitButton type="submit">Odoslať</SubmitButton>
      </Row>
      <Row>
        <MessageInput
          type="textArea"
          title="Vaša správa"
          onInput={(value) => setMessage(value)}
        ></MessageInput>
      </Row>
      {messageSent && (
        <Message
          type="success"
          onHide={() => setMessageSent(false)}
          content={`Ďakujeme sa vašu správu. Čoskoro vám odpovieme na váš email.`}
        />
      )}
    </FormWrapper>
  )
}
