import * as React from 'react';
import { GetStaticProps } from 'next';

import TravelLayout from 'layouts/TravelLayout';
import groupBy from 'lodash/groupBy';
import type { SingleImage } from 'types';
import TravelImageLayout from '@layouts/TravelImageLayout';
import { fetchPhotos } from 'scripts/fetchPhotos';

const Travel: React.FC<{
  images: { [location: string]: SingleImage[] };
}> = ({ images }) => (
  <TravelLayout>
    {Object.keys(images).map((location) => (
      <TravelImageLayout location={location} key={location} images={images} />
    ))}
  </TravelLayout>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const result = await fetchPhotos('photos/Travel/*');
  return { props: { images: groupBy(result, (i: SingleImage) => i.folder) } };
};

export default Travel;
