import { SingleImage } from 'types';
import Image from 'next/image';
import { transformImageUrl } from '@utils/transformImageUrl';
import { Typography } from '@mui/material';
import { Masonry } from '@mui/lab';

interface Props {
  location: string;
  images: { [location: string]: SingleImage[] };
}

const TravelImageLayout: React.FC<Props> = ({ location, images }) => {
  return (
    <>
      <Typography variant={'h3'} sx={{ fontWeight: 'bold', mb: 1 }}>
        {location}
      </Typography>
      <Masonry columns={{ xs: 1, md: 3 }} spacing={1} sx={{ width: 'auto' }}>
        {images[location].map(({ width, height, url }) => (
          <Image
            src={transformImageUrl(url)}
            height={height / 5}
            width={width}
            alt={location}
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          />
        ))}
      </Masonry>
    </>
  );
};

export default TravelImageLayout;
