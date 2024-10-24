export interface PictureEntity {
  id: string;
  slug: string;
  alternative_slugs: { [key: string]: string };
  create_at: string;
  update_at: string;
  promoted_at: string,
  width: number,
  height: number,
  color: string,
  blur_hash: string,
  description: string,
  alt_description: string,
  breadcrumbs: [],
  urls: Urls,
  links: Links ,
  likes: number;
  liked_by_user: boolean;
}


interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface PictureUser {
  id: string;
  updated_at: string;
  username: string
  name: string
  first_name: string
  last_name: string,
  twitter_username: string,
  portfolio_url: string;
  bio: string;
  location: string
  links: Links
}

interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: string;
}
