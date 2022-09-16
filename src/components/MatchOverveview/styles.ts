import styled from 'styled-components'

export const Wrapper = styled.div`
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
`

export const Time = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  margin: .25rem 0
`

export const Date = styled.span`
  background: rgba(255, 255, 255, 0.2);
  border-radius: .1rem;
  width: 7rem;
  padding: .2rem 0;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: .5rem
`

export const Event = styled.p`
  margin: .5rem 0;
  font-size: .75rem;
  font-weight: regular;
  color: #f9e00f
`
