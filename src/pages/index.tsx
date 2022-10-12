import Header from 'components/Header'
import TopImg from 'components/TopImg'
import * as S from './styles'
import Games from 'components/Games'
import { Team } from 'hltv'

interface HomeProps {
  data: { matchesRes: Match[] }
}

export interface Match {
  id: number
  team1?: Team
  team2?: Team
  date?: number
  format?: string
  event?: Event
  title?: string
  live: boolean
  stars: number
}

const brTeamsId = [
  8297, 11309, 4773, 9455, 9215, 6947, 11561, 11837, 11768, 10994, 8885, 11814,
  11709, 10669, 11249, 11306, 10894, 8113, 11412, 11153, 10976, 11905, 11420,
  3044, 10815, 10709, 11015, 10975, 11733, 11676
]

function Home({ data }: HomeProps) {
  const brTeamsMatches = data.matchesRes.filter(
    (match) =>
      brTeamsId.includes(match.team1?.id || 0) ||
      brTeamsId.includes(match.team2?.id || 0)
  )
  return (
    <S.Wrapper>
      <Header />
      <S.WrapperContainer>
        <S.Bg>
          <TopImg />
          <Games arrayMatches={brTeamsMatches} />
        </S.Bg>
      </S.WrapperContainer>
    </S.Wrapper>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/matches`)
  const data = await res.json()

  return {
    props: { data }
  }
}

export default Home
