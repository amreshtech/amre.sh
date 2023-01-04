import { Chip, Stack } from '@mui/material';
import { generateRandomColour } from '@utils/generateRandomColour';
import * as React from 'react';

export const BlogTags = ({ tags }) => (
  <Stack
    direction="row"
    spacing={1}
    sx={{
      pt: 1
    }}
  >
    {tags?.map((tag) => (
      <Chip
        label={`#${tag}`}
        key={tag}
        size={'small'}
        sx={{
          color: '#ffffff',
          backgroundColor: generateRandomColour()
        }}
      />
    ))}
  </Stack>
);
