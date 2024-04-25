import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  image: string;
  alt: string;
  content: PortableTextBlock[];
};
