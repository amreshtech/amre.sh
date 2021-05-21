import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { SingleImage } from 'types';
import Image from 'next/image';

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
            {images[location].map((image: SingleImage) => (
              <Image
                src={image.url}
                height={image.height}
                width={image.width}
                alt={location}
                layout="responsive"
                key={image.url}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default TravelImageLayout;
