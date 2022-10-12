import styled from 'styled-components'

export const Wrapper = styled.main`
  border-radius: 0.5rem;
  background: #01004c;
  border: #0f348b solid 1px;
  width: 30%;
  @media (max-width: 769px) {
    width: 70%;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 0.75rem;
  padding: 0.5rem;
  text-transform: uppercase;
  background: black;
  border-radius: 0 0.5rem;
`

export const FormatName = styled.p`
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75rem;
`

export const StreamsWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  a {
    color: #f9e00f;
    margin: 0.25rem 0;
    text-decoration: none;
  }
`
