import Container from '../components/Container';
import Typewriter from 'typewriter-effect';
import SpotifyWidget from '@components/SpotifyWidget';
import { getAllFilesFrontMatter } from '@lib/mdx';
import orderBy from 'lodash/orderBy';
import { Post } from 'types';
import LatestPost from '@components/LatestPost';

const Home: React.FC<{ latestPosts: Post[] }> = ({ latestPosts }) => {
  return (
    <Container>
      <div className="max-w-3xl mb-2 mt-5 sm:mx-2 md:ml-96 font-qc">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Amresh 👋
        </h1>
        <div className="flex justify-start items-start gap-2">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white min-w-max">
            I’m a
          </h1>
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Developer')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Travel Freak')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Foodie')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('UI/UX Designer')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Photographer')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('GraphQL Dev')
                  .pauseFor(1000)
                  .start();
              }}
            />
          </h1>
        </div>
        <div className="flex-column md:flex justify-start items-start gap-4 mt-10 md:mt-20">
          <div className="md:w-max">
            <SpotifyWidget />
          </div>
          <div className="md:w-max">
            <LatestPost latestPosts={latestPosts} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  const orderedPosts = orderBy(posts, ['publishedAt'], ['desc']);
  return { props: { latestPosts: orderedPosts.slice(0, 3) } };
}

export default Home;
