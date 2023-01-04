import React from 'react';
import Footer from '@components/Footer';
import { Container } from '@mui/material';
import { NavBar } from '@components/NavBar';
import { SeoHead } from '@components/SeoHead';

type RootLayoutProps = {
  route?: string;
  children: React.ReactNode;
};
export const RootLayout: React.FC<RootLayoutProps> = ({ route, children }) => {
  return (
    <>
      <SeoHead />
      <NavBar route={route} />
      <Container
        maxWidth={'md'}
        sx={{
          px: { xs: 2, md: 5 },
          color: '#ffffff'
        }}
      >
        {children}
        <Footer route={route} />
      </Container>
    </>
  );
};
