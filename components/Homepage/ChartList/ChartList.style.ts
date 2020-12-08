import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 40px;
  border-bottom: 2px dashed rgba(26, 188, 254, 1);
  width: fit-content;
  margin: 0px;
  margin-bottom: ${({ theme }) => theme.margin.xl};
`
