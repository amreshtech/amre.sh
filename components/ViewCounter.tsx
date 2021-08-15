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
  return views && <div>{format(views)} view{views > 1 && 's'}</div>;
};

export default ViewCounter;
