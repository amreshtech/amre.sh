const badgeColourSet = ['red', 'green', 'blue', 'indigo', 'purple', 'pink'];

interface Props {
  text: string;
}

const Badge: React.FC<Props> = ({ text }) => (
  <div
    className={`bg-${
      badgeColourSet[Math.floor(Math.random() * badgeColourSet.length)]
    }-700 text-white font-qc text-sm px-1 rounded-sm`}
  >{`#${text}`}</div>
);

export default Badge;
