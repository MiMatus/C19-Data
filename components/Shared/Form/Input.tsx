import React, { useState } from "react"
import { InputTag, InputWrapper, TextAreaTag, Title } from "./Input.style"

interface InputProps {
  onError?: () => void
  required?: boolean
  onInput?: (value: string) => void
  type: "text" | "password" | "email" | "textArea"
  title?: string
  errorMessage?: string
  className?: string
}

export const Input: React.FC<InputProps> = ({
  onError,
  onInput,
  className,
  type,
  title,
  errorMessage,
  required,
}) => {
  const [error, setError] = useState<boolean>(false)

  const handleInput = (event) => {
    setError(false)
    event.target.setCustomValidity("")
    onInput && onInput(event.target.value)
  }

  const handleInvalid = (event) => {
    setError(true)
    onError && onError()
    errorMessage && event.target.setCustomValidity(errorMessage)
  }

  const InputEl =
    type === "textArea" ? (
      <TextAreaTag
        error={error}
        onInput={handleInput}
        onInvalid={handleInvalid}
        required={!!required}
      ></TextAreaTag>
    ) : (
      <InputTag
        required={!!required}
        type={type}
        error={error}
        onInput={handleInput}
        onInvalid={handleInvalid}
      />
    )

  return (
    <InputWrapper className={className}>
      {title && <Title>{title}</Title>}
      {InputEl}
    </InputWrapper>
  )
}
