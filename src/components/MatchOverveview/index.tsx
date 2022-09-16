import * as S from './styles'
import Countdown from 'react-countdown'

export default function MatchOverveview({ date, event }) {
  const formattedData = new Date(date)
  const formatedDate = formattedData
    .toLocaleDateString('pt-BR', { month: 'short', day: '2-digit' })
    .replace('.', '')
  const formatedTime = formattedData.toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <S.Wrapper>
      <S.Date>{formatedDate}</S.Date>
      <S.Time>{formatedTime}</S.Time>
      <S.Event>{event.name}</S.Event>
    </S.Wrapper>
  )
}
