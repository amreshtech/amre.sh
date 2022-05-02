interface Props {
  children: string;
}

const Blockquote: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-start gap-2 bg-black dark:bg-gray-800 border-blue-200 rounded-md p-5 my-4 w-full dark:border-gray-800 text-white filter drop-shadow-lg">
      <p className="text-4xl font-bold font-pm min-w-max">
        <svg
          width="55"
          height="49"
          viewBox="0 0 55 49"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <path
            d="M24.8125 37.4419C24.8125 34.4963 24.0442 31.9909 22.5076 29.9256C20.1707 26.8107 15.657 26.4383 13.032 27.0477C11.9436 20.5132 17.1936 12.1844 23.9802 8.59549L18.7622 0.876038C8.51827 6.02234 -1.53357 17.8724 0.195091 32.8034C1.28351 42.2496 6.43747 48.4793 13.7363 48.4793C16.9375 48.4793 19.5945 47.4975 21.6753 45.4999C23.7881 43.5023 24.8125 40.8276 24.8125 37.4419ZM55 37.4419C55 34.4963 54.2317 31.9909 52.6951 29.9256C50.3582 26.8107 45.8445 26.4383 43.2195 27.0477C42.1311 20.5132 47.3811 12.1844 54.1677 8.59549L48.9497 0.876038C38.7058 6.02234 28.6539 17.8724 30.3826 32.8034C31.471 42.2496 36.625 48.4793 43.9238 48.4793C47.125 48.4793 49.782 47.4975 51.8628 45.4999C53.9756 43.5023 55 40.8276 55 37.4419Z"
            fill="#EBEBEB"
          />
        </svg>
      </p>
      <p className="text-3xl pt-2">{children}</p>
    </div>
  );
};

export default Blockquote;
