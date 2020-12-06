import styled from "styled-components"
import { Input } from "../../Shared/Form"

export const Row = styled.div`
  display: flex;
  width: 100%;
  z-index: 1;
`

export const EmailInput = styled(Input)`
  height: 50px;
  flex: 1 0 auto;
`

export const MessageInput = styled(Input)`
  height: 150px;
  width: 100%;
`

export const SubmitButton = styled.button`
  border: 1px solid ${({ theme }) => theme.border.color};
  background: ${({ theme }) => theme.success.color};
  height: 50px;
  width: 160px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  outline: none;
  color: #fff;
  margin-left: ${({ theme }) => theme.margin.xl};
  cursor: pointer;
`

export const FormWrapper = styled.form`
  margin-top: ${({ theme }) => theme.margin.xl};
  display: flex;
  flex-direction: column;
  width: 90%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    width: 40%;
  }

  ${Row}:nth-child(2) {
    margin-top: ${({ theme }) => theme.margin.xl};
  }
`
