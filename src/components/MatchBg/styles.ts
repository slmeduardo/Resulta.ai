import styled from 'styled-components'

export const Wrapper = styled.main`
  border-top: 1px #000 solid;
  background-color: rgb(4,0,61);
  background: linear-gradient(336deg, rgba(4,0,61,1) 0%, rgba(9,9,121,1) 51%, rgba(4,5,132,1) 100%);
  padding: 15rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  `
  
  export const MatchStats = styled.main`
  display: flex;
  align-items: center;
  position: absolute;
  `
  
  export const TeamName = styled.p`
  margin: 1.5rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`

export const Team = styled.main`
  margin: 0 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayersPhoto = styled.main`
  color:white
`