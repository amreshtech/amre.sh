const badgeColourSet = [
  'bg-red-700',
  'bg-green-700',
  'bg-blue-700',
  'bg-indigo-700',
  'bg-purple-700',
  'bg-pink-700'
];

interface Props {
  text: string;
}

const Badge: React.FC<Props> = ({ text }) => (
  <div
    className={`${
      badgeColourSet[Math.floor(Math.random() * badgeColourSet.length)]
    } text-white font-qc text-sm px-1 rounded-sm`}
  >{`#${text}`}</div>
);

export default Badge;
