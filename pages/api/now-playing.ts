import { getLastPlayed, getNowPlaying } from '@lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';

const buildSpotifyResponseObject = (song, isPlaying: boolean) => ({
  album: song.album?.name || song.show?.name,
  albumImageUrl: song.album?.images[0].url || song.show?.images[0].url,
  artist:
    song.artists?.map((_artist) => _artist.name).join(', ') ||
    song.show.publisher,
  isPlaying,
  songUrl: song.external_urls.spotify,
  title: song.name
});

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    const lastPlayed = await (await getLastPlayed()).json();
    return res
      .status(200)
      .json(buildSpotifyResponseObject(lastPlayed.items[0].track, false));
  }

  let song = await response.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );
  return res.status(200).json(buildSpotifyResponseObject(song.item, true));
};
