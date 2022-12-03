import algoliasearch from 'algoliasearch/lite';

export const createSearchRecords = (records) => {
  const client = algoliasearch(
    process.env.ALGOLIA_APPLICATION_ID,
    process.env.ALGOLIA_ADMIN_KEY
  );
  const index = client.initIndex('search-index');
  //@ts-ignore
  index.replaceAllObjects(records, {
    autoGenerateObjectIDIfNotExist: true
  });
};
