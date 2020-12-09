import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.margin.xxxl};

  padding-left: ${({ theme }) => theme.margin.xl};
  padding-right: ${({ theme }) => theme.margin.xl};
  margin-bottom: ${({ theme }) => theme.margin.xxxl};
`

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const DailyNewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Date = styled.h2`
  font-weight: 900;
  font-size: 26px;
`

export const NewsItem = styled.div``

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.margin.xl};

  ${NewsItem}:not(:last-child) {
    padding-bottom: 20px;
    border-bottom: 2px solid #c2c2c2;
  }
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 18px;
`

export const Snippet = styled.p`
  font-weight: 200;
  font-size: 18px;
`

export const DetailRow = styled.div`
  display: flex;
  align-items: flex-end;
`

export const DetailLink = styled.a`
  background: #c2c2c2;
  border: 1px solid #c2c2c2;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-weight: 900;
  font-size: 16px;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
`

export const Source = styled.span`
  font-weight: normal;
  font-size: 14px;
  margin-left: ${({ theme }) => theme.margin.sm};
`
