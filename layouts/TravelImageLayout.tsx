import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { SingleImage } from 'types';
import Image from 'next/image';
import Link from 'next/link';
import { transformImageUrl } from '@utils/transformImageUrl';

interface Props {
  location: string;
  images: { [location: string]: SingleImage[] };
}

const TravelImageLayout: React.FC<Props> = ({ location, images }) => {
  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {location}
      </h1>
      <div className="w-full mb-5">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {images[location].map(({ width, height, url, nft }) => (
              <figure
                key={url}
                className="travel-image relative cursor-pointer"
              >
                <Image
                  src={transformImageUrl(url)}
                  height={height}
                  width={width}
                  alt={location}
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                />
                {nft && (
                  <figcaption className="text-md text-center text-white bg-blue-600 z-10 absolute -mt-9 h-9 w-full py-1 hidden">
                    <Link href={nft} passHref>
                      Buy Now
                    </Link>
                  </figcaption>
                )}
              </figure>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default TravelImageLayout;
