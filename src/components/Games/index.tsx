import Game from 'components/Game'
import Title from 'components/Title'
import { Match } from 'pages'
import { useState } from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'

export default function Games({ arrayMatches }: { arrayMatches: Match[] }) {
  const [count, setCount] = useState(5)
  const router = useRouter()

  function handleClick() {
    setCount((count) => count + 5)
  }

  return (
    <S.WrappperGames>
      <Title>COUNTER STRIKE - GLOBAL OFFENSIVE</Title>
      {arrayMatches.slice(0, count).map((match: Match) => (
        <Game
          onClick={() => router.push(`match/${match.id}`)}
          key={match.id}
          date={match.date}
          live={match.live}
          team1={match.team1}
          team2={match.team2}
        />
      ))}
      <S.MoreGames onClick={handleClick}>Mais Partidas ↴</S.MoreGames>
    </S.WrappperGames>
  )
}
