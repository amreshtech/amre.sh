import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge'
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const backgroundImage = searchParams.get('image');
  const backgroundImageUrl = `https://source.unsplash.com/random/630x1200/?${backgroundImage}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          backgroundImage: `url(${backgroundImageUrl})`,
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      ></div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
