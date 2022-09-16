import HLTV from 'hltv'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {

  const { mid } = req.query
  if (!mid) {
    return res.status(422).json({
      message: 'match not found',
    })
  }
  const MatchRes = await HLTV.getMatch({id: Number(mid)})
  const Team1Res = await HLTV.getTeam({id: Number(MatchRes.team1?.id)})
  const Team2Res = await HLTV.getTeam({id: Number(MatchRes.team2?.id)})
  MatchRes.team1 = Team1Res
  MatchRes.team2 = Team2Res

  res.status(200).json(MatchRes)
} 
