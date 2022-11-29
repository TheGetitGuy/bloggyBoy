import getMarkDownInfo from '../../../helperFunctions/getMarkDownInfo'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
export default function handler(

  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const mdInfo = getMarkDownInfo(req.query)
    if (mdInfo){
    res.status(200).json(mdInfo as any)
  } else {
    res.status(200).json({Data: "Please provide a post Id"} as any)
  }
}
