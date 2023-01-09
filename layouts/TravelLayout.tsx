import { RootLayout } from '@components/RootLayout';
import ImageWrapper from '@components/ImageWrapper';
import { SeoHead } from '@components/SeoHead';
import { Box } from '@mui/material';
import { useCallback } from 'react';

interface Props {
  children: React.ReactNode;
}

const TravelLayout: React.FC<Props> = ({ children }) => {
  const handleContext = useCallback((e) => {
    e.preventDefault();
  }, []);
  return (
    <RootLayout>
      <SeoHead title="Travel across the world with Amresh" noindex nofollow />
      <Box component={'article'} onContextMenu={handleContext}>
        <ImageWrapper>{children}</ImageWrapper>
      </Box>
    </RootLayout>
  );
};

export default TravelLayout;
