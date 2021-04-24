export type ReadingTime = {
  text: string;
  minutes: number;
  time: number;
  words: number;
};

export type FrontMatter = {
  wordCount: number;
  readingTime: ReadingTime;
  slug?: any;
  title: string;
  summary?: string;
  publishedAt?: string;
  by?: string;
  description?: string;
  logo?: string;
  image?: string;
};

export type MDXSource = {
  compiledSource: string;
  renderedOutput: string;
};

export type Post = {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  slug: string;
};

export type Newsletter = {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  slug: string;
};

export type Tweet = {
  text: string;
  id: string;
  author: Author;
  media: any[];
  created_at: string;
  public_metrics: Publicmetrics;
  referenced_tweets: any[];
};

type Publicmetrics = {
  retweet_count: number;
  reply_count: number;
  like_count: number;
  quote_count: number;
};

type Author = {
  name: string;
  url: string;
  id: string;
  verified: boolean;
  username: string;
  profile_image_url: string;
  protected: boolean;
};
