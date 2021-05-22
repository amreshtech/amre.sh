const gitHubApi = 'https://api.github.com/graphql';
const headers = {
  Accept: 'application/vnd.github.v3+json',
  Authorization: `Basic ${process.env.GITHUB_AUTH_HEADER}`,
  'Content-Type': 'application/json'
};

export const postFetcher = {
  fetchAllPostPaths: async (type: string) => {
    const data = await (
      await fetch(gitHubApi, {
        method: 'post',
        headers: headers,
        body: JSON.stringify({
          query: `query {
                repository(name: "${process.env.GITHUB_BLOG_REPO}", owner: "${process.env.GITHUB_REPO_OWNER}") {
                   object(expression: "master:${type}") {
                    ... on Tree {
                      entries {
                        name
                      }
                    }
                  }
                }
              }`
        })
      })
    ).json();

    return data?.data?.repository?.object?.entries.map(({ name }) => name);
  },
  fetchPost: async (path: string) => {
    const data = await (
      await fetch(gitHubApi, {
        method: 'post',
        headers: headers,
        body: JSON.stringify({
          query: `query {
        repository(name: "${process.env.GITHUB_BLOG_REPO}", owner: "${process.env.GITHUB_REPO_OWNER}") {
           object(expression: "master:${path}") {
            ... on Blob {
                text
              }
          }
        }
      }`
        })
      })
    ).json();

    return data?.data?.repository?.object?.text;
  }
};
