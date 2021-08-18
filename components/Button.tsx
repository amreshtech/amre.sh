interface Props {
  children: React.ReactElement | string;
}

const Button: React.FC<Props> = ({ children }) => (
  <button className="flex flex-row justify-center items-center w-full h-16 text-2xl font-bold text-black dark:text-white border-2 rounded-md border-black dark:border-white">
    {children}
  </button>
);

export default Button;
