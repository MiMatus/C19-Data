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
  const [formError, setFormError] = useState<boolean>(true)
  const [messageSent, setMessageSent] = useState<boolean>(false)

  return (
    <FormWrapper onSubmit={(event) => event.preventDefault()}>
      <Row>
        <EmailInput
          type="email"
          title="Váš email"
          errorMessage="Email je povinný"
          onInput={(value) => {
            setFormError(false)
            setEmail(value)
          }}
          onError={() => setFormError(true)}
          required
        ></EmailInput>
        <SubmitButton
          type="submit"
          onClick={() => !formError && setMessageSent(true)}
        >
          Odoslať
        </SubmitButton>
      </Row>
      <Row>
        <MessageInput
          onError={() => setFormError(true)}
          type="textArea"
          title="Vaša správa"
          errorMessage="Správa je povinná"
          onInput={(value) => {
            setFormError(false)
            setMessage(value)
          }}
          required
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
