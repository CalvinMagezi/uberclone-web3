import { client } from '../../../lib/sanity'
import type { NextApiRequest, NextApiResponse } from 'next'

const getUserInfo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query = `
      *[_type == "users" && walletAddress=="${req.query.walletAddress}"]{
          name,
          walletAddress,
          "imageUrl": profileImage.asset->url
        }
    `

    const sanityResponse = await client.fetch(query)

    res.status(200).send({ message: 'success', data: sanityResponse[0] })
  } catch (error: any) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getUserInfo
