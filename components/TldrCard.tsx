interface Props {
  children: string;
}

const TldrCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center gap-9 bg-gradient-to-br from-blue-600 to-purple-700 border border-blue-200 rounded-md p-5 my-4 w-full dark:border-gray-800 text-white">
      <p className="text-4xl font-bold font-pm min-w-max">TL; DR</p>
      <p className="text-xl font-bold font-qc">{children}</p>
    </div>
  );
};

export default TldrCard;
