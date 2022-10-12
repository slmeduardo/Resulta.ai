import { GameMap, MapResult } from 'hltv'
import Image from 'next/image'
import { MatchProps } from 'pages/match/[mid]'
import * as S from './styles'

export const mapImages: { [key in GameMap]?: string } = {
  de_mirage:
    'https://liquipedia.net/commons/images/thumb/f/f3/Csgo_mirage.jpg/534px-Csgo_mirage.jpg',
  de_inferno:
    'https://liquipedia.net/commons/images/thumb/2/2b/De_new_inferno.jpg/534px-De_new_inferno.jpg',
  de_nuke:
    'https://liquipedia.net/commons/images/thumb/5/5e/Nuke_csgo.jpg/534px-Nuke_csgo.jpg',
  de_overpass:
    'https://liquipedia.net/commons/images/thumb/0/0f/Csgo_overpass.jpg/534px-Csgo_overpass.jpg',
  de_dust2:
    'https://liquipedia.net/commons/images/thumb/1/12/Csgo_dust2.0.jpg/534px-Csgo_dust2.0.jpg',
  de_vertigo:
    'https://liquipedia.net/commons/images/thumb/5/59/Csgo_de_vertigo_new.jpg/534px-Csgo_de_vertigo_new.jpg',
  de_ancient:
    'https://liquipedia.net/commons/images/thumb/3/35/Csgo_ancient.jpeg/534px-Csgo_ancient.jpeg',
  tba: 'https://www.hltv.org/img/static/statsmatchmaps/all.png'
}

export function MatchStatsCard({ data }: MatchProps) {
  return (
    <S.Wrapper>
      <S.Title>Mapas</S.Title>
      <S.FormatName>
        Melhor de {data.format?.type.replace('bo', '') || ''} -{' '}
        {data.format?.location || 'Não definido'}
      </S.FormatName>
      <S.Format>
        <S.Stats>status</S.Stats>
        <S.StatsP>{data.status}</S.StatsP>
      </S.Format>
      <S.Maps>
        {data.maps.map((map: MapResult) => (
          <S.MapsContainer key={map.name}>
            <Image
              width="100%"
              height="25px"
              layout="responsive"
              objectFit="cover"
              src={
                mapImages[map.name] ||
                'https://www.hltv.org/img/static/statsmatchmaps/all.png'
              }
            />
            <S.MapNameBg>
              <S.MapName>{map.name.replace('de_', '')}</S.MapName>
            </S.MapNameBg>
          </S.MapsContainer>
        ))}
      </S.Maps>
    </S.Wrapper>
  )
}
