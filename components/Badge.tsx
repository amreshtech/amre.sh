import React from 'react';

interface Props {
  text: string;
  index: number;
}

const Badge: React.FC<Props> = ({ text, index }) => {
  const badgeColourSet = React.useMemo(
    () => [
      'bg-red-700',
      'bg-green-700',
      'bg-blue-700',
      'bg-indigo-700',
      'bg-purple-700',
      'bg-pink-700'
    ],
    []
  );
  const badgeClassName = `${badgeColourSet[index]} text-white font-qc text-sm px-1 rounded-sm`;
  return <div className={badgeClassName}>{`#${text}`}</div>;
};

export default Badge;
