import MatchOverveview from 'components/MatchOverveview'
import Image from 'next/image'
import { MatchProps } from 'pages/match/[mid]'
import * as S from './styles'

export function MatchBg({ data }: MatchProps) {
  return (
    <S.Wrapper>
      <S.MatchStats>
        <S.Team>
          <Image
            width="150px"
            height="150px"
            src={
              data.team1.logo ||
              'https://www.hltv.org/img/static/team/placeholder.svg'
            }
          />
          <S.TeamName>{data.team1?.name}</S.TeamName>
        </S.Team>
        <MatchOverveview date={data.date} event={data.event} />
        <S.Team>
          <Image
            width="150px"
            height="150px"
            src={
              data.team2.logo ||
              'https://www.hltv.org/img/static/team/placeholder.svg'
            }
          />
          <S.TeamName>{data.team2?.name}</S.TeamName>
        </S.Team>
      </S.MatchStats>
    </S.Wrapper>
  )
}
