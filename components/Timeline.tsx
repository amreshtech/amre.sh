import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FcOk } from 'react-icons/fc';
import timeline from 'timeline.json';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

interface Props {
  title: React.ReactNode;
  children?: React.ReactNode;
}

const Step: React.FC<Props> = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <FcOk />
        <p className="font-medium text-gray-900 dark:text-gray-100 pl-2">
          {title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};
const reversedTimeline = [...timeline].reverse();
const getTimeline = (start: number, end: number = timeline.length) =>
  reversedTimeline
    .slice(start, end)
    .map(
      ({
        year,
        content
      }: {
        year: string;
        content: {
          title: string;
          description: string;
        }[];
      }) => (
        <div key={year}>
          <Year>{year}</Year>
          <ul>
            {[...content].reverse().map(({ title, description = '' }) => (
              <Step title={title} key={title}>
                {description}
              </Step>
            ))}
          </ul>
          <Divider />
        </div>
      )
    );

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      {getTimeline(0, 3)}
      {isShowingFullTimeline ? (
        getTimeline(3)
      ) : (
        <button
          type="button"
          className="flex gap-2 items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <FaChevronDown />
        </button>
      )}
    </>
  );
}
