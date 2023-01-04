import { Box, Typography } from '@mui/material';

const SelfDescription = () => (
  <Box
    sx={{
      pt: 3,
      color: '#9ca3af'
    }}
  >
    <Typography variant={'body1'} gutterBottom>
      I am a front-end developer based in Galway, Ireland. I write about
      technology, finance, investments and my thoughts about the shape that tech
      industry will take in our lifetime. I hope you will love to come along
      with me on my journey.
    </Typography>
    <Typography variant={'body1'}>
      I also document my journey across the world through amazing photos which
      you can view or even buy as NFTs!
    </Typography>
  </Box>
);
export default SelfDescription;
