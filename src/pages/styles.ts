import styled from 'styled-components'

export const BgColor = styled.div`
  background: #333;
  padding-bottom: 20rem;
`

export const Wrapper = styled.main`
  width: 100%
  padding: 2rem;
  margin-bottom: 5rem
`
  
  export const MatchWrapper = styled.main`
  padding: 1rem 2rem;
`

export const WrapperContainer = styled.main`
  background: #333;
  border-radius: 2rem;
  margin: 0 auto;
  max-width: 60rem;
  margin-top: 3rem;
`

export const Bg = styled.div`
  background: #333;
  border-radius: 2rem;
  padding: 2rem;
`

export const TeamsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center
`

export const MapStreamWrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center
`

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StreamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin: .5rem 0;
    color: #F9E00F;
    text-decoration: none;
  }
`

export const Team = styled.p`
  font-size: 2rem
`

export const Format = styled.p`
  margin-bottom: 1rem
`

export const Maps = styled.p`
  margin-bottom: .5rem
`

export const Title = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem
`

export const TitleMatchStats = styled.p`
  background: #0F49D1;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  padding: .5rem 0;
  border-radius: .5rem .5rem 0 0;
`

export const ContainerMatchStats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
  `
  
  export const MatchStatsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background: #16171b;
  border-radius: .5rem;
  position: relative;
  top: -34px
`

