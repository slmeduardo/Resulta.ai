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
export const Format = styled.div`
  background: #1B1A5E;
`

export const Stats = styled.p`
  padding: 1rem 1rem 0rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: .75rem;
`

export const StatsP = styled.p`
  padding: .5rem 2rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.25rem;
`

export const FormatName = styled.p`
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: .75rem;
`

export const Maps = styled.div`
`

export const MapsContainer = styled.div`
  margin: 1rem 0;
  position: relative
`

export const MapNameBg = styled.p`
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 49%, rgba(0,0,0,0) 100%);
position: absolute;
bottom: 33%;
left: 0;
width: 100%;
margin: 0 auto;
height: 35%;
display: flex;
justify-content: center;
align-items: center;
`

export const MapName = styled.p`
font-size: .75rem;
text-transform: uppercase;
font-weight: bold;
`



