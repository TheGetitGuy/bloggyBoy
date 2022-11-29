import getMarkDownInfo from '../../../helperFunctions/getMarkDownInfo'
import type { NextApiRequest, NextApiResponse } from 'next'
import { GrayMatterFile } from 'gray-matter'

type Data = {
  name: string
}
export default function handler(

  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {postId} = req.query
    let mdInfo:false | GrayMatterFile<string> = false;
    if (postId){ 
     mdInfo = getMarkDownInfo({postId})
    }
    if (mdInfo){
    res.status(200).json(mdInfo as any)
  } else {
    res.status(200).json({Data: "Please provide a post Id"} as any)
  }
}
