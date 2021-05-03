import Link from 'next/link';
import Container from '@components/Container';
import Lottie from 'react-lottie';
import * as spaceman from 'public/spaceman.json';

const NotFound = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: spaceman
  };
  return (
    <Container title="404 – Amresh">
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <Lottie options={lottieOptions} height={400} width={400} />
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          You are in a galaxy far... far away!
        </h1>
        <Link href="/blog">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Return to Base Station
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
