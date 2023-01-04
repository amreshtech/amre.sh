import { Divider, Typography } from '@mui/material';

const Footer = ({ route }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {route !== '/' && (
        <Divider
          sx={{
            mt: 8,
            borderColor: '#1f2937'
          }}
        />
      )}
      <Typography
        variant={'body2'}
        sx={{
          color: '#ffffff',
          mt: { xs: 6, md: 8 },
          textAlign: 'center'
        }}
      >
        &copy; {currentYear} Amresh Mishra
      </Typography>
    </>
  );
};

export default Footer;
