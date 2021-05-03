import Container from '../components/Container';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <Container>
      <div className="max-w-2xl mb-2 mt-40">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Amresh 👋
        </h1>
        <div className="flex justify-start items-center gap-2">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
            I’m a
          </h1>
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Front-End Developer')
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
                  .typeString('GraphQL Enthusiast')
                  .start();
              }}
            />
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Home;
