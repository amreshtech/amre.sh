import Image from 'next/image';

interface Props {
  url: string;
}

const Map: React.FC<Props> = ({ url }) => (
  <Image
    src={url}
    alt="My Current Location"
    width={200}
    height={200}
    className="rounded-2xl shadow-md"
  />
);

export default Map;
