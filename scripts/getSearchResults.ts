import algoliasearch from 'algoliasearch/lite';
import getConfig from 'next/config';

export const getSearchResults = async (query: string) => {
  const { publicRuntimeConfig } = getConfig();
  const { ALGOLIA_APPLICATION_ID, ALGOLIA_ADMIN_KEY } = publicRuntimeConfig;
  const client = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_ADMIN_KEY);
  const index = client.initIndex('search-index');
  const { hits } = await index.search(query);
  console.log(query);
  return hits;
};
