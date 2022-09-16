import Header from 'components/Header'
import { MatchBg } from 'components/MatchBg'
import { MatchStatsCard } from 'components/MatchStatsCard'
import OddsCard from 'components/OddsCard'
import StreamsCard from 'components/StreamsCard'
import { FullTeam } from 'hltv'
import { FullMatch } from 'hltv/lib/endpoints/getMatch'
import { GetServerSidePropsContext } from 'next'
import * as S from '../styles'

export interface MatchProps {
  data: Omit<FullMatch, 'team1' | 'team2'> & {
    team1: FullTeam
    team2: FullTeam
  }
}

function Match({ data }: MatchProps) {
  return (
    <S.BgColor>
      <S.MatchWrapper>
        <Header />
      </S.MatchWrapper>
      <MatchBg data={data} />
      <S.MatchStatsWrapper>
        <S.TitleMatchStats>Status da partida</S.TitleMatchStats>
        <S.ContainerMatchStats>
          <MatchStatsCard data={data} />
          <OddsCard data={data} />
          <StreamsCard data={data} />
        </S.ContainerMatchStats>
      </S.MatchStatsWrapper>
    </S.BgColor>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params?.mid) {
    return {
      notFound: true
    }
  }
  const mid = context.params.mid

  const res = await fetch(`http://localhost:3000/api/matches/${mid}`)
  const data: FullMatch = await res.json()

  return {
    props: { data }
  }
}

export default Match
