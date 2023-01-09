import { useCallback, useState } from 'react';

import { RootLayout } from '@components/RootLayout';
import BlogPost from '@components/BlogPost';
import type { Post } from '../types';
import { getSearchResults } from 'scripts/getSearchResults';
import { allPosts } from 'contentlayer/generated';
import { GetStaticPropsResult } from 'next';
import { createSearchRecords } from 'scripts/createSearchRecords';
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { SeoHead } from '@components/SeoHead';

interface Props {
  posts: Post[];
}

const Blog: React.FC<Props> = ({ posts }) => {
  const [filteredBlogPosts, setFilteredBlogPosts] = useState(posts);

  const handleSearch = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      const searchResults = await getSearchResults(query);
      setFilteredBlogPosts(searchResults as any);
    },
    []
  );

  return (
    <RootLayout>
      <SeoHead title={'Blog – Amresh Mishra '} />
      <Typography
        variant={'h1'}
        gutterBottom
        sx={{
          fontWeight: 'bold',
          fontSize: '3rem'
        }}
      >
        Blog
      </Typography>
      <TextField
        placeholder="Search articles"
        type="text"
        color={'primary'}
        fullWidth
        onInput={handleSearch}
        size={'small'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                sx={{
                  backgroundColor: '#1f2937',
                  color: '#ffffff'
                }}
              >
                <Search />
              </IconButton>
            </InputAdornment>
          )
        }}
        sx={{
          backgroundColor: '#1f2937',
          borderRadius: 2,
          input: {
            color: '#ffffff'
          }
        }}
      />
      <Box
        sx={{
          mt: 5
        }}
      >
        {!filteredBlogPosts.length && (
          <Typography
            variant={'body1'}
            sx={{
              color: '#9ca3af'
            }}
          >
            No search results...
          </Typography>
        )}
        {filteredBlogPosts.map(({ title, summary, tags, image, slug }) => (
          <BlogPost
            key={title}
            title={title}
            summary={summary}
            tags={tags}
            image={image}
            slug={slug}
          />
        ))}
      </Box>
    </RootLayout>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ posts: Post[] }>
> {
  createSearchRecords(allPosts);
  return { props: { posts: allPosts } };
}

export default Blog;
