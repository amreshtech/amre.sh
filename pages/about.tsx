import { RootLayout } from '@components/RootLayout';
import { SeoHead } from '@components/SeoHead';
import { Avatar, Link, Stack, Typography } from '@mui/material';
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter
} from '@mui/icons-material';
import Timeline from '@components/Timeline';

const About = () => {
  return (
    <RootLayout>
      <SeoHead title={'About - Amresh Mishra'} />
      <Avatar
        src="https://res.cloudinary.com/amreshtech/image/upload/v1621232133/photos/avatar_m79ssw.png"
        alt="Amresh Mishra"
        sx={{
          width: 100,
          height: 100,
          border: '2px solid #ffffff',
          alignItems: 'center',
          mx: 'auto'
        }}
      />
      <Stack
        direction={'row'}
        spacing={2}
        sx={{ my: 5 }}
        justifyContent={'center'}
      >
        <Link
          href="https://www.facebook.com/amreshm/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookOutlined sx={{ color: '#ffffff' }} />
        </Link>
        <Link
          href="https://www.twitter.com/amreshtech"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter sx={{ color: '#ffffff' }} />
        </Link>
        <Link
          href="https://www.instagram.com/amresh.m"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram sx={{ color: '#ffffff' }} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/amreshm/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn sx={{ color: '#ffffff' }} />
        </Link>
      </Stack>
      <Typography variant={'body1'} gutterBottom>
        Hey! I am a front-end developer. I will be dedicating this blog to write
        more about Javascript, my travel experiences and all the little
        knowledge I have about finance!
      </Typography>
      <Typography variant={'body1'} gutterBottom>
        I work with the brilliant minds at Shutterstock and use React,
        TypeScript, NextJS, GraphQL, MUI, Webpack, NodeJS/ExpressJS, Jest,
        Storybook and Swagger. I have always led the efforts in bringing new
        technologies to improve both DX & UX of the apps we work in.
      </Typography>
      <Typography variant={'body1'} gutterBottom>
        I grew up in a small town in Odisha in India and hold a Masters degree
        in Business Analytics from NUI Galway and a Bachelors degree in Computer
        Science from KIIT University.
      </Typography>
      <Timeline />
    </RootLayout>
  );
};

export default About;
