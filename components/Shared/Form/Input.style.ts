import styled, { css } from "styled-components"

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

interface InputTagProps {
  error: boolean
}

export const InputTag = styled.input<InputTagProps>`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.border.color};
  outline: none;
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.padding.sm};

  ${({ error }) =>
    error
      ? css`
          border: 1px solid ${({ theme }) => theme.error.color};
        `
      : ""}
`

export const TextAreaTag = styled.textarea<InputTagProps>`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.border.color};
  outline: none;
  height: 100%;
  width: 100%;
  resize: none;
  padding: ${({ theme }) => theme.padding.sm};
`

export const Title = styled.span`
  background: #fff;
  position: absolute;
  font-size: ${({ theme }) => theme.font.size.md};
  top: -8px;
  left: 25px;
`
/*export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.error.color};
  margin-left: ${({ theme }) => theme.margin.md};
`*/
