import { format, parseISO } from 'date-fns';
import { RootLayout } from '@components/RootLayout';
import type { ReadingTime } from 'types';
import React, {
  ClipboardEventHandler,
  MouseEventHandler,
  useCallback
} from 'react';
import { ArticleJsonLd } from 'next-seo';
import { SeoHead } from '@components/SeoHead';
import { BlogTags } from '@components/BlogTags';
import { Alert, Box, IconButton, Snackbar, Typography } from '@mui/material';
import { Share } from '@mui/icons-material';
import { usePathname } from 'next/navigation';

interface Props {
  children: React.ReactNode;
  createdAt: string;
  updatedAt: string;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  shortUrl: string;
  readingTime: ReadingTime;
  image: string;
}

const BlogLayout: React.FC<Props> = ({
  children,
  createdAt,
  updatedAt,
  slug,
  title,
  summary,
  tags,
  shortUrl,
  readingTime,
  image
}) => {
  const preventPlagiarism: ClipboardEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      e.clipboardData.setData(
        'text/plain',
        `${document
          .getSelection()
          .toString()
          .substring(0, 50)}...Visit https://www.amre.sh${slug}`
      );
      e.preventDefault();
    },
    []
  );
  const pathname = usePathname();
  const [isShared, setIsShared] = React.useState(false);
  const handleShareButtonClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(async () => {
      navigator.clipboard.writeText(shortUrl).then(() => {
        setIsShared(true);
      });
    }, []);

  setTimeout(() => {
    if (isShared) {
      setIsShared(false);
    }
  }, 2000);

  const ogImageUrl = `https://www.amre.sh/api/og?title=${encodeURIComponent(
    title
  )}&image=${image}`;

  return (
    <RootLayout>
      <SeoHead
        title={title}
        description={summary}
        image={ogImageUrl}
        type={'article'}
        route={pathname}
      />
      <ArticleJsonLd
        type="Blog"
        url={`https://www.amre.sh${pathname}`}
        title={title}
        datePublished={createdAt}
        dateModified={updatedAt}
        authorName={[{ name: 'Amresh Mishra', url: 'https://amre.sh' }]}
        description={summary}
        images={[`${ogImageUrl}`]}
      />
      <Box component={'article'}>
        <BlogTags tags={tags} />
        <Typography variant={'h3'} sx={{ fontWeight: 'bold', mt: 2 }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'start',
            mt: 2
          }}
        >
          <Typography variant={'body2'} sx={{ color: '#cbd5db' }}>
            {format(parseISO(createdAt), 'MMMM dd, yyyy')}
          </Typography>
          <Box
            sx={{
              display: 'inline-flex',
              mt: { xs: 2, md: 0 },
              alignItems: 'start'
            }}
          >
            <Typography variant={'body2'} sx={{ color: '#6b7280', pr: 1 }}>
              {readingTime.text}
            </Typography>
            <IconButton
              aria-label="Share this blog"
              className="ml-1"
              onClick={handleShareButtonClick}
              title="Share this blog"
              sx={{ padding: '2px' }}
            >
              <Share sx={{ color: '#6b7280', fontSize: 'medium' }} />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            pt: 8
          }}
          onCopy={preventPlagiarism}
          className="prose"
        >
          {children}
        </Box>
      </Box>
      <Snackbar
        open={isShared}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Copied!
        </Alert>
      </Snackbar>
    </RootLayout>
  );
};

export default BlogLayout;
