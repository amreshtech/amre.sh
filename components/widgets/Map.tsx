import Image from 'next/image';

interface Props {
  url: string;
}

const getMap = () => {
  const baseUrl = 'https://maps.googleapis.com/maps/api/staticmap';
  const query = `center=Galway&zoom=13&size=220x225&maptype=roadmap&key=${process.env.GOOGLE_MAPS_API}`;
  return `${baseUrl}?${query}`;
};

const Map: React.FC<Props> = ({ url }) => (
  <Image
    src={url}
    alt="My Current Location"
    width={220}
    height={225}
    className="rounded-2xl shadow-md"
  />
);

export default Map;
