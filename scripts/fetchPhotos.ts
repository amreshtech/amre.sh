import cloudinary from './initCloudinary';
import { CloudinaryImage } from 'types';

export const fetchPhotos = async (folderPath: string) => {
  const response = await cloudinary.v2.search
    .expression(`folder:${folderPath}`)
    .with_field('context')
    .sort_by('public_id', 'desc')
    .execute();

  const data = await response?.resources.map((imageAsset: CloudinaryImage) => ({
    folder: imageAsset.folder.split('/')[2],
    url: imageAsset.secure_url,
    width: imageAsset.width,
    height: imageAsset.height,
    nft: imageAsset?.context?.alt || '',
    title: imageAsset?.context?.caption || ''
  }));

  return data;
};
