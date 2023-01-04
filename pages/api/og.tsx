import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge'
};

const quicksand = fetch(
  new URL('../../styles/quicksand.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = decodeURIComponent(searchParams.get('title'));
  const backgroundImage = searchParams.get('image');
  const imageUrl = `https://images.unsplash.com/photo-${backgroundImage}`;
  const quicksandData = await quicksand;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: '60px',
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          backgroundImage:
            'linear-gradient(126deg, rgba(43,14,110,1) 56%, rgba(152,32,142,1) 100%)'
        }}
      >
        <div
          style={{
            width: '40%',
            height: '100%',
            display: 'flex',
            position: 'absolute',
            right: 0
          }}
        >
          <img
            src={imageUrl}
            style={{
              width: '100%',
              height: '100%'
            }}
            alt={title}
          />
        </div>
        <div
          style={{
            transform: 'skewX(10deg)',
            background:
              'linear-gradient(126deg, rgba(43,14,110,1) 56%, rgba(152,32,142,1) 100%)',
            position: 'absolute',
            width: '736px',
            height: '630px',
            left: '40px'
          }}
        ></div>
        <p
          style={{
            fontWeight: 'bold',
            padding: '24px',
            position: 'absolute',
            color: '#ffffff',
            alignItems: 'center',
            width: '60%',
            display: 'flex',
            left: 0,
            top: '130px',
            fontFamily: '"Quicksand"'
          }}
        >
          {title}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Quicksand',
          data: quicksandData,
          style: 'normal',
          weight: 900
        }
      ]
    }
  );
}
