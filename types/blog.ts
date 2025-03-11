export type Author = {
  name: string;
  image: string;
  bio: string;
}

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  date: string;
  author: Author;
  tags: string[];
  readingTime: number;
} 