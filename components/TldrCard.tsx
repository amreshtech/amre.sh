import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

interface Props {
  children: string;
}

const TldrCard: React.FC<Props> = ({ children }) => {
  return (
    <Grid
      container
      spacing={{ xs: 1, md: 3 }}
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        background: 'linear-gradient(to bottom right, #2563eb, #7e22ce)',
        borderRadius: 2,
        padding: 3,
        margin: 0,
        mb: 4
      }}
      width={'100%'}
    >
      <Grid xs={12} md={3}>
        <Typography
          sx={{
            typography: { xs: 'h4', md: 'h3' },
            fontFamily: { xs: '"Permanent Marker"', md: '"Permanent Marker"' }
          }}
        >
          TL; DR
        </Typography>
      </Grid>
      <Grid xs={12} md={9}>
        <Typography
          variant={'body1'}
          sx={{
            fontWeight: '600',
            my: 3,
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontFamily: 'Quicksand'
          }}
        >
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TldrCard;
