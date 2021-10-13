import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { SingleImage } from 'types';
import Image from 'next/image';

interface Props {
  location: string;
  images: { [location: string]: SingleImage[] };
}

const TravelImageLayout: React.FC<Props> = ({ location, images }) => {
  const transformImageUrl = (url: string) => {
    const root = url.split('/private');
    const suffix = url.split('/private')[1].split(/(?=\/v)/);
    return (
      root[0] + '/private/c_scale,e_anti_removal,l_watermark,w_450' + suffix[1]
    );
  };

  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {location}
      </h1>
      <div className="w-full mb-5">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {images[location].map((image: SingleImage) => (
              <Image
                src={transformImageUrl(image.url)}
                height={image.height}
                width={image.width}
                alt={location}
                layout="responsive"
                key={image.url}
                className="cursor-pointer"
                onContextMenu={(e) => {
                  e.preventDefault();
                }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default TravelImageLayout;
