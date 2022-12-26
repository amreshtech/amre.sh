import RootLayout from '@components/RootLayout';
import type { Tweet as TweetType } from '../types';
import Image from 'next/image';
import SelfDescription from '@components/SelfDescription';

interface Props {
  map_url: string;
  tweetData: TweetType;
}

const Home: React.FC<Props> = () => {
  return (
    <RootLayout>
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 z-10 w-full">
        <div className="flex flex-row w-full gap-4">
          <div className="w-2/3">
            <h1 className="font-bold text-2xl pt-24 md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Hey, I&apos;m Amresh 👋
            </h1>
          </div>
          <div className="w-1/3 pt-8">
            <Image
              src="/static/author.png"
              alt="author-image"
              width={180}
              height={230}
            />
          </div>
        </div>
        <SelfDescription />
      </div>
    </RootLayout>
  );
};

export default Home;
