import Image from 'next/image';

interface Props {
  url: string;
}

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
