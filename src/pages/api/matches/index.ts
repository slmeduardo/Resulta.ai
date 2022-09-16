import HLTV from 'hltv'

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const matchesRes = await HLTV.getMatches() 
  res.status(200).json({ matchesRes })
}


