import styled from "styled-components"
import { Image } from "../Shared/Image"

export const ContactWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margin.xl};
  display: flex;
  flex-direction: column;
  padding: 0px ${({ theme }) => theme.padding.xl};
  position: relative;
`

export const Text = styled.p`
  color: #000;
  font-weight: 100;
  max-width: 500px;
  margin: 0px;
  font-size: 24px;
`

export const FeedbackImage = styled(Image)`
  width: 70%;
  position: absolute;
  z-index: 0;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
`
