import Image from 'next/image';
import React from 'react';
import ImageWrapper from './ImageWrapper';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { BiExpandAlt } from 'react-icons/bi';

const Slides = ({ images }: { images: { path: string; title: string }[] }) => {
  const STATIC_CLOUDINARY_IMAGE_URL_SUFFIX =
    'https://res.cloudinary.com/amreshtech/image/private/c_scale,e_anti_removal,f_auto,l_watermark,w_450/f_auto,q_auto:good';
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const handlePreviousClick = () => {
    setActiveImageIndex(activeImageIndex - 1);
  };
  const handleNextClick = () => {
    setActiveImageIndex(activeImageIndex + 1);
  };
  return (
    <ImageWrapper
      options={{
        thumbnails: { showThumbnails: false }
      }}
    >
      <div className="flex flex-row w-full items-center justify-center">
        <div className="w-7">
          {activeImageIndex !== 0 && (
            <button onClick={handlePreviousClick}>
              <FcPrevious size={28} />
            </button>
          )}
        </div>
        <figure className="h-96 w-96 relative">
          <button className="absolute z-10 bg-slate-900/50 text-white rounded-full w-8 h-8 p-1 right-1 top-1 pointer-events-none cursor-pointer">
            <BiExpandAlt size={24} />
          </button>
          <Image
            key={images[activeImageIndex].path}
            src={`${STATIC_CLOUDINARY_IMAGE_URL_SUFFIX}${images[activeImageIndex].path}`}
            alt={images[activeImageIndex].title}
            style={{
              objectFit: 'cover'
            }}
            fill
            onContextMenu={(e) => {
              e.preventDefault();
            }}
            priority
          />
          {activeImageIndex !== images.length - 1 && (
            <Image
              key={images[activeImageIndex + 1].path}
              src={`${STATIC_CLOUDINARY_IMAGE_URL_SUFFIX}${
                images[activeImageIndex + 1].path
              }`}
              alt={images[activeImageIndex + 1].title}
              style={{
                objectFit: 'cover'
              }}
              fill
              onContextMenu={(e) => {
                e.preventDefault();
              }}
              priority
              className="hidden"
            />
          )}
          <figcaption className="text-lg text-center text-white bg-gray-800/50 z-10 absolute -mt-9 h-9 w-full py-1 bottom-0">
            {images[activeImageIndex].title}
          </figcaption>
        </figure>
        <div className="w-7">
          {activeImageIndex !== images.length - 1 && (
            <button onClick={handleNextClick}>
              <FcNext size={28} />
            </button>
          )}
        </div>
      </div>
    </ImageWrapper>
  );
};

export default Slides;
