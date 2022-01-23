import Container from '@components/Container';
import { getAllFilesFrontMatter } from '@lib/mdx';
import type { Post } from '../types';
import Button from '@components/Button';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

interface Props {
  posts: Post[];
}

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <Container
      title="Blog – Amresh"
      description="Thoughts on the software industry, programming, tech, and my personal life."
      hideNav
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 z-10 w-full">
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
                  .typeString('a UI/UX Designer')
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
        <div className="relative w-full mb-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Button>
              <Link href="/blog">
                <a>Blogs →</a>
              </Link>
            </Button>
            <Button>
              <Link href="/travel">
                <a>Travel Pics →</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
}

export default Blog;
