import { RootLayout } from '@components/RootLayout';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import SelfDescription from '@components/SelfDescription';
import { GetServerSideProps } from 'next';

interface Props {
  route: string;
}

const Home: React.FC<Props> = ({ route }) => {
  return (
    <RootLayout route={route}>
      <Grid
        container
        sx={{
          mt: { xs: 5, md: 12 }
        }}
        alignItems={'center'}
      >
        <Grid xs={8}>
          <Typography
            sx={{
              typography: { xs: 'h1', md: 'h1' },
              fontWeight: { xs: '700', md: '700' },
              fontSize: { xs: '2.125rem', md: '3rem' }
            }}
          >
            Hey, I&apos;m Amresh 👋
          </Typography>
        </Grid>
        <Grid
          xs={4}
          sx={{
            pb: { xs: 1, md: 0 }
          }}
        >
          <Image
            src="/static/author.png"
            alt="author-image"
            width={180}
            height={230}
          />
        </Grid>
        <Grid xs={12} md={8}>
          <SelfDescription />
        </Grid>
      </Grid>
    </RootLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return { props: { route: ctx.resolvedUrl } };
};
export default Home;
