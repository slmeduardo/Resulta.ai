import Image from 'next/image'
import { MatchProps } from 'pages/match/[mid]'
import * as S from './styles'

const OddsCard = ({ data }: MatchProps) => (
  <S.Wrapper>
    <S.Title>Odds</S.Title>
    <S.Subtitle>Previsoes da comunidade</S.Subtitle>
    <S.TeamOdd>
      <S.Team>
        <Image
          style={{ opacity: 0.6 }}
          width="70px"
          height="70px"
          src={
            data.team1.logo ||
            'https://www.hltv.org/img/static/team/placeholder.svg'
          }
        />
        <S.TeamName>{data.team1?.name}</S.TeamName>
        <S.OddText>{data.odds[0].team1 || 'nao definido'}</S.OddText>
      </S.Team>
    </S.TeamOdd>
    <S.TeamOdd>
      <S.Team>
        <Image
          style={{ opacity: 0.6 }}
          width="70px"
          height="70px"
          src={
            data.team2.logo ||
            'https://www.hltv.org/img/static/team/placeholder.svg'
          }
        />
        <S.TeamName>{data.team2?.name}</S.TeamName>
        <S.OddText>{data.odds[0].team2 || 'nao definido'}</S.OddText>
      </S.Team>
    </S.TeamOdd>
  </S.Wrapper>
)

export default OddsCard
