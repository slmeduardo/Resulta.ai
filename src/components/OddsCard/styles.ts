import styled from 'styled-components'

export const Wrapper = styled.main`
  border-radius: .5rem;
  background: #01004C;
  border: #0F348B solid 1px;
  width: 30%;
  @media (max-width: 769px) {
    width: 70%;
    margin-bottom: 1.5rem;
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

export const Subtitle = styled.p`
  font-size: .75rem;
  padding: 1rem;
  text-transform: uppercase;
  border-radius: 0 .5rem;
  font-weight: bold
`


export const TeamOdd = styled.div`
background: #1B1A5E;
padding: 0 1rem;
margin: 2rem 0;
display: flex;
position: relative;
align-items: center;
justify-content: center;
`
export const Team = styled.div`
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
padding: 1rem
`

export const TeamName = styled.p`
  text-align: center;
  position: absolute;
  text-transform: uppercase;
  font-weight: bold
`

export const OddText = styled.p`
  position: absolute;
  top: 65px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold
`

