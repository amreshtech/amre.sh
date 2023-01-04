import { RootLayout } from '@components/RootLayout';
import ImageWrapper from '@components/ImageWrapper';
import { SeoHead } from '@components/SeoHead';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const TravelLayout: React.FC<Props> = ({ children }) => {
  return (
    <RootLayout>
      <SeoHead title="Travel across the world with Amresh" />
      <Box
        component={'article'}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <ImageWrapper>{children}</ImageWrapper>
      </Box>
    </RootLayout>
  );
};

export default TravelLayout;
