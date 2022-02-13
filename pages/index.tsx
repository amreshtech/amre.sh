import Container from '@components/Container';
import { getAllFilesFrontMatter } from '@lib/mdx';
import type { Post, Tweet as TweetType } from '../types';
import Button from '@components/Button';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import Map from '@components/widgets/Map';
import { getTweet } from '@lib/twitter';
import Tweet from '@components/widgets/Tweet';
import { getMap } from '@lib/map';
import Chat from '@components/widgets/Chat';
import Image from 'next/image';
interface Props {
  map_url: string;
  tweetData: TweetType;
}

const Blog: React.FC<Props> = ({ map_url, tweetData }) => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 z-10 w-full">
        <div className="flex flex-row w-full gap-4">
          <div className="w-2/3">
            <h1 className="font-bold text-3xl pt-24 md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Hey, I&apos;m Amresh 👋
            </h1>
            <div className="relative w-full mb-4">
              <h1 className="flex gap-2 pb-24 font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
                I&apos;m
                <Typewriter
                  options={{ loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('a Developer')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('an Investor')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('a Travel Freak')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('a Foodie')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('a Photographer')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('a GraphQL Dev')
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </h1>
            </div>
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
        <div className="relative w-full mb-4 flex flex-row gap-2">
          <div className="w-1/4">
            <Map url={map_url} />
          </div>
          <div className="w-2/4">
            <Tweet
              id={tweetData.id}
              created_at={tweetData.created_at}
              text={tweetData.text}
              public_metrics={tweetData.public_metrics}
            />
          </div>
          <div className="w-1/4">
            <Chat />
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  const map_url = getMap();
  const tweetData = await getTweet();
  return { props: { posts, map_url, tweetData } };
}

export default Blog;
