import { PopupButton } from 'react-calendly';
import { Box, Chip } from '@mui/material';

interface Props {
  text: string;
}

const ConsultationCard: React.FC<Props> = ({ text }) => (
  <Box>
    {text}
    <Chip
      component={PopupButton}
      text={`Let's chat`}
      url="https://calendly.com/amreshm/consultation"
      pageSettings={{
        backgroundColor: 'ffffff',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: '00a2ff',
        textColor: '4d5055',
        hideGdprBanner: true
      }}
      sx={{
        p: 1,
        mx: 1,
        color: '#ffffff',
        fontWeight: 'bold',
        background: 'linear-gradient(to top left,#be123c,#e11d48,#e11d48)',
        cursor: 'pointer'
      }}
      rootElement={document.getElementById('__next')}
    />
  </Box>
);

export default ConsultationCard;
