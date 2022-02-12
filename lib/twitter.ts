export const getTweet = async () => {
  const baseUrl = "https://api.twitter.com/2/users";
  const query = "tweet.fields=created_at,public_metrics&max_results=5";
  const response = await fetch(`${baseUrl}/${process.env.TWITTER_USER_ID}/tweets?${query}`, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_API_KEY}`
    }
  });
  const result = await response.json();
  return result.data[0];
};
