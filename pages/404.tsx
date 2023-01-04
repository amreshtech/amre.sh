import { RootLayout } from '@components/RootLayout';
import Lottie from 'react-lottie';
import * as spaceman from 'public/spaceman.json';
import { SeoHead } from '@components/SeoHead';
import { Box, Button, Typography } from '@mui/material';

const NotFound = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: spaceman
  };
  return (
    <RootLayout>
      <SeoHead title="404 – Amresh Mishra" />
      <Lottie options={lottieOptions} height={400} width={400} />
      <Typography variant={'h4'} sx={{ fontWeight: 'bold', mb: 4 }}>
        You are in a galaxy far... far away!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant={'contained'} href="/">
          Return to Base Station
        </Button>
      </Box>
    </RootLayout>
  );
};

export default NotFound;
