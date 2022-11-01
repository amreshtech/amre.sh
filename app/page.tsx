// import Map from '@components/widgets/Map';
import Image from 'next/image';
import SelfDescription from 'app/SelfDescription';
import { SocialProfileJsonLd } from 'next-seo';
import { SOCIAL_PROFILE_JSON_LD_DEFAULT } from 'next-seo.config';
import Tweet from './Tweet';
import Map from './Map';
import Chat from './Chat';

export default function Page() {
  return (
    <>
      <SocialProfileJsonLd
        {...SOCIAL_PROFILE_JSON_LD_DEFAULT}
        useAppDir={true}
      />
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
        <div className="relative w-full mb-4 flex-row gap-2 hidden md:flex">
          <div className="w-1/4">
            <Map />
          </div>
          <div className="w-2/4">
            {/* @ts-ignore */}
            <Tweet />
          </div>
          <div className="w-1/4">
            <Chat />
          </div>
        </div>
        <div className="relative w-full mb-4 flex flex-col gap-2 md:hidden">
          <div className="w-full">
            {/* @ts-ignore */}
            <Tweet />
          </div>
          <div className="flex flex-row gap-2">
            <div className="w-1/2">
              <Map />
            </div>
            <div className="w-1/2">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
