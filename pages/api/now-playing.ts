import { getNowPlaying } from '@lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist =
    song.item.artists?.map((_artist) => _artist.name).join(', ') ||
    song.item.show.publisher;
  const album = song.item.album?.name || song.item.show?.name;
  const albumImageUrl =
    song.item.album?.images[0].url || song.item.show?.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title
  });
};
