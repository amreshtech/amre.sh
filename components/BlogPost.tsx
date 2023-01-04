import Link from 'next/link';
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { BlogTags } from '@components/BlogTags';

interface Props {
  title: string;
  summary: string;
  slug: string;
  tags: string[];
  image?: string;
}

const BlogPost: React.FC<Props> = ({ title, summary, slug, tags }) => {
  return (
    <Link href={slug}>
      <Box sx={{ mb: 3 }}>
        <div>
          <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        </div>
        <Typography
          variant={'body1'}
          sx={{
            color: '#9ca3af'
          }}
        >
          {summary}
        </Typography>
        <BlogTags tags={tags} />
      </Box>
    </Link>
  );
};

export default BlogPost;
