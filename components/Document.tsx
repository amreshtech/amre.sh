import { Box } from '@mui/material';

interface Props {
  file: string;
}

const Document: React.FC<Props> = ({ file }) => (
  <Box
    component={'object'}
    width="100%"
    height="600px"
    data={file}
    type="application/pdf"
    sx={{
      zIndex: 10,
      py: 5
    }}
  ></Box>
);

export default Document;
