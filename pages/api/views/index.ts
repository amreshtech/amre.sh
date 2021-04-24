import db from '@lib/firebase';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const snapshot = await db.ref('views').once('value');
  const views = snapshot.val();
  const allViews = Object.values(views).reduce(
    (total: number, value: number) => total + value
  );

  return res.status(200).json({ total: allViews });
};
