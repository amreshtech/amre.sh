import Link from 'next/link';
import { Post } from 'types';

const LatestPost: React.FC<{ latestPosts: Post[] }> = ({ latestPosts }) => {
  return (
    <div className="flex flex-col items-start gap-2 bg-gradient-to-br from-purple-900 via-purple-600 to-pink-500 border-blue-200 rounded-md p-5 my-4 w-full dark:border-gray-800 text-white filter drop-shadow-lg">
      <div className="flex items-start text-lg uppercase text-white gap-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <path
            d="M21.375 9.825C21.375 9.825 20.25 10.875 18.3375 12.1125C17.8125 9.075 16.35 5.325 13.5 0.75C13.5 0.75 12.5625 5.6625 9.45 10.275C8.1 8.175 7.5 6.525 7.5 6.525C-2.25 16.3125 5.85 23.25 10.95 23.25C17.475 23.25 23.2125 20.1 21.375 9.825"
            fill="#FF9D33"
          />
          <path
            d="M17.5125 18.525C18.075 17.2875 18.4875 15.675 18.5625 13.65C18.5625 13.65 17.775 14.325 16.425 15.1875C16.05 13.1625 15.0375 10.6875 13.05 7.6125C13.05 7.6125 12.4125 10.875 10.2375 13.9875C9.3 12.6 8.8875 11.475 8.8875 11.475C7.275 14.025 6.6375 16.05 6.6 17.6625C5.7 17.325 5.1375 17.0625 5.1375 17.0625C6.675 21.6375 9.8625 22.65 11.2875 22.65C13.8375 22.65 16.425 21.9 18.975 18.2625C18.975 18.225 18.4125 18.375 17.5125 18.525"
            fill="#FFCE31"
          />
          <path
            d="M8.21249 16.4625C8.21249 16.4625 9.26249 17.8875 10.05 17.55C10.05 17.55 11.55 15.1875 13.725 13.875C13.725 13.875 13.275 17.475 13.8 18.1125C14.475 18.975 16.3125 17.175 16.3125 17.175C16.3125 19.3125 13.9875 21.975 11.8875 21.975C9.8625 21.975 6.93749 19.65 8.21249 16.4625"
            fill="#FFDF85"
          />
          <path
            d="M18.675 6.7875C19.4625 5.6625 19.9875 4.4625 19.9875 4.4625C21.3 6.6375 20.5125 7.95 19.95 8.3625C19.1625 8.9625 17.775 8.1 18.675 6.7875"
            fill="#FF9D33"
          />
          <path
            d="M4.35001 6.4125C3.56251 5.1 3.48751 3.45 3.48751 3.45C1.61251 6.2625 2.32501 7.8375 2.96251 8.2875C3.78751 8.925 5.21251 7.95 4.35001 6.4125"
            fill="#FF9D33"
          />
          <path
            d="M8.7 3.4875C8.8125 2.5875 8.4375 1.6875 8.4375 1.6875C10.2 2.85 10.2 3.825 9.975 4.2375C9.6375 4.725 8.5875 4.5 8.7 3.4875"
            fill="#FF9D33"
          />
        </svg>
        <div>Latest Posts</div>
      </div>
      <ul className="list-disc pl-6">
        {latestPosts.map((item: Post) => (
          <li key={item.slug}>
            <Link href={`/blog/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestPost;
