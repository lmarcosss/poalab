import { NextApiRequest, NextApiResponse } from 'next';

import data from './data';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.slug;

  const post = data.result.find((post) => post.slug === slug);

  if (!post) {
    return res.status(404).json({ error: 'Post does not exist.' });
  }

  res.status(200).json({ post });
};
