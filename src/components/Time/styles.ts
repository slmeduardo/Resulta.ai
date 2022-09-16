import styled from 'styled-components'

export const TimeWrapper = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #333;
`

export const Time = styled.p`
  color: white;
  font-weight: bold;
  @media (max-width: 769px) {
    font-size: .75rem !important;
  }
}
`

type Props = {isLive: boolean}

export const Date = styled.p<Props>`
  color: ${props => props.isLive ? 'red' : '#b4b4b4'};
  font-weight: bold;
  font-size: 0.75rem;
  @media (max-width: 769px) {
    font-size: .75rem !important;
  }
}
`
