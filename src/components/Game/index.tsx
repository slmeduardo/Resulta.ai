import Time from 'components/Time'
import * as S from './styles'

interface Props {
  onClick: VoidFunction
  date?: number
  live: boolean
  team1: {
    name: string
  }
  team2: {
    name: string
  }
}

export default function Game({ date, live, team1, team2, onClick }: Props) {
  return (
    <S.ContentGame onClick={onClick}>
      <Time date={date} live={live} />
      <S.TeamWrapper>
        <S.Team>{team1 ? team1.name : 'TBD'}</S.Team>
        <S.Team>{team2 ? team2.name : 'TBD'}</S.Team>
      </S.TeamWrapper>
    </S.ContentGame>
  )
}
