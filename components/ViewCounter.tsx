import { useEffect } from 'react';
import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '@lib/fetcher';

interface Props {
  slug: string;
}

const ViewCounter: React.FC<Props> = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      });

    registerView();
  }, [slug]);

  return <div>{views ? format(views) : '–––'} views</div>;
};

export default ViewCounter;
