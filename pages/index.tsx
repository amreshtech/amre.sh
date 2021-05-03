import Container from '../components/Container';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <Container>
      <div className="max-w-2xl mb-2 md:mt-40 mt-5 sm:mx-2 md:ml-96 font-qc">
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
      </div>
    </Container>
  );
};

export default Home;
