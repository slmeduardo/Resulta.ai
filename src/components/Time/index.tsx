import * as S from './styles'

interface Props {
  date: number
  live: boolean
}

export default function Time({ date, live }: Props) {
  const formattedData = new Date(date)
  const formatedDate = formattedData
    .toLocaleDateString('pt-BR', { month: 'short', day: '2-digit' })
    .replace('.', '')
  const formatedTime = formattedData.toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <S.TimeWrapper>
      <S.Time>{live ? '' : formatedTime}</S.Time>
      <S.Date isLive={live}>{live ? 'Live' : formatedDate}</S.Date>
    </S.TimeWrapper>
  )
}
