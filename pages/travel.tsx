import * as React from 'react';
import cloudinary from 'cloudinary';
import { GetStaticProps } from 'next';

import TravelLayout from 'layouts/TravelLayout';
import groupBy from 'lodash/groupBy';
import type { CloudinaryImage, SingleImage } from 'types';
import TravelImageLayout from '@layouts/TravelImageLayout';

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
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });
  const result = await (
    await cloudinary.v2.search
      .expression('folder:photos/Travel/*')
      .with_field('context')
      .sort_by('public_id', 'desc')
      .execute()
  ).resources.map((imageAsset: CloudinaryImage) => ({
    folder: imageAsset.folder.split('/')[2],
    url: imageAsset.secure_url,
    width: imageAsset.width,
    height: imageAsset.height,
    nft: imageAsset?.context?.alt || ''
  }));

  return { props: { images: groupBy(result, (i: SingleImage) => i.folder) } };
};

export default Travel;
