import Container from '@components/Container';
import Timeline from '@components/Timeline';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <Container title="About – Amresh">
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex justify-center items-center">
          <Image
            src="/avatar.png"
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full border-white border-2"
          />
        </div>
        <div className="flex justify-center items-center gap-5 mt-5">
          <Link href="https://www.facebook.com/amreshm/">
            <a>
              <FaFacebook
                size="1.3em"
                className="text-blue-500 dark:text-white"
              />
            </a>
          </Link>
          <Link href="https://www.twitter.com/amreshtech">
            <a>
              <FaTwitter
                className="text-blue-500 dark:text-white"
                size="1.3em"
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/amresh.m">
            <a>
              <FaInstagram
                className="text-fuchsia-500 dark:text-white"
                size="1.3em"
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/amreshm/">
            <a>
              <FaLinkedin
                className="text-blue-500 dark:text-white"
                size="1.3em"
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-col gap-2 mt-16 text-black dark:text-white">
          <p>
            Hey! I am a front-end developer. I will be dedicating this blog to
            write more about Javascript, my travel experiences and all the
            little knowledge I have about finance!
          </p>
          <p>
            I work with the brilliant minds at Overstock Labs and use React,
            TypeScript, NextJS, GraphQL, Rebass/ThemeUI/Styled Components/Fela,
            Webpack, NodeJS/ExpressJS, Jest, Storybook and Swagger. I have
            always led the efforts in bringing new technologies to improve both
            DX & UX of the apps we work in.
          </p>
          <p>
            I grew up in a small town in Odisha in India and hold a Masters
            degree in Business Analytics from NUI Galway and a Bachelors degree
            in Computer Science from KIIT University.
          </p>
        </div>
        <div className="text-lg mt-8 text-black dark:text-white">
          <Timeline />
        </div>
      </div>
    </Container>
  );
};

export default About;
