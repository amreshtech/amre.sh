import hydrate from 'next-mdx-remote/hydrate';

import { getFileBySlug } from '@lib/mdx';
import UsesLayout from '@layouts/uses';
import MDXComponents from '@components/MDXComponents';
import type { MDXSource } from '../types';

interface Props {
  mdxSource: MDXSource;
}

const Uses: React.FC<Props> = ({ mdxSource }) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <UsesLayout>{content}</UsesLayout>;
};

export async function getStaticProps() {
  const uses = await getFileBySlug('uses');
  return { props: uses };
}

export default Uses;
