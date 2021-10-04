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
  tags: string[];
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
  tags: string[];
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

export interface CloudinaryImage {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: string;
  access_mode: string;
  access_control?: any;
  etag: string;
  created_by: Createdby;
  uploaded_by: Createdby;
}

interface Createdby {
  access_key: string;
  custom_id: string;
  external_id: string;
}

export type SingleImage = {
  url: string;
  width: number;
  height: number;
  folder: string;
};
