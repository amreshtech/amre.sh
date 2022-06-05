import STATIC_CLOUDINARY_IMAGE_URL_SUFFIX from 'constants';
import type { ImageProps } from 'next/image';
import Image from 'next/image';

const SingleImage: React.FC<ImageProps> = ({ ...props }) => (
  <Image
    src={`${STATIC_CLOUDINARY_IMAGE_URL_SUFFIX}${props.src}`}
    alt={props.alt}
    {...props}
    onContextMenu={(e) => {
      e.preventDefault();
    }}
  />
);

export default SingleImage;
