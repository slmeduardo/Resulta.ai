import * as S from './styles'
import { Event } from 'hltv'

type MatchOverviewProps = {
  date: Date
  event: Event
}

export default function MatchOverveview({ date, event }: MatchOverviewProps) {
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
      <S.Event>{event?.name}</S.Event>
    </S.Wrapper>
  )
}
