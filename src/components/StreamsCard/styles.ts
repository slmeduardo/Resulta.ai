import styled from 'styled-components'

export const Wrapper = styled.main`
  border-radius: .5rem;
  background: #01004C;
  border: #0F348B solid 1px;
  width: 30%;
  @media (max-width: 769px) {
    width: 70%;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: .75rem;
  padding: .5rem;
  text-transform: uppercase;
  background: black;
  border-radius: 0 .5rem;
`

export const FormatName = styled.p`
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: .75rem;
`

export const StreamsWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  a {
    color: #F9E00F;
    margin: .25rem 0;
    text-decoration: none
  }
`


