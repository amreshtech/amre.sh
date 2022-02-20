import Link from 'next/link';
import Container from '@components/Container';
import Lottie from 'react-lottie';
import * as rocket from 'public/rocket.json';

const Maintenance = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: rocket
  };
  return (
    <Container title="Prepping to launch" hideNav>
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 z-10">
        <Lottie options={lottieOptions} height={400} width={400} />
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          We are prepping to launch!
        </h1>
      </div>
    </Container>
  );
};

export default Maintenance;
