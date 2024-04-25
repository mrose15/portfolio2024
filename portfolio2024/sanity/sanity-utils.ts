import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Post } from "@/types/Post";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
    {},
    { next: { revalidate: 10 } }
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
    { slug },
    { next: { revalidate: 10 } }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    {},
    { next: { revalidate: 10 } }
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug },
    { next: { revalidate: 10 } }
  );
}

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`,
    {},
    { next: { revalidate: 10 } }
  );
}
