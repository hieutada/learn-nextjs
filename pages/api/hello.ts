// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Post {
  id: string,
  title: string
}

type Data = Array<Post>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    { id: '1', title: 'i love u' },
    { id: '2', title: 'i miss u' },
    { id: '3', title: 'i fuck u' },
  ])
}
