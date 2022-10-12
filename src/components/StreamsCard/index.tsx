import { MatchProps } from 'pages/match/[mid]'
import * as S from './styles'

const StreamsCard = ({ data }: MatchProps) => (
  <S.Wrapper>
    <S.Title>Streams</S.Title>
    <S.FormatName>Onde assistir</S.FormatName>
    <S.StreamsWrapper>
      {data.streams.map((stream) => (
        <a
          key={stream.link}
          href={stream.link}
          target="_blank"
          rel="noreferrer"
        >
          {stream.name}
        </a>
      ))}
    </S.StreamsWrapper>
  </S.Wrapper>
)

export default StreamsCard
