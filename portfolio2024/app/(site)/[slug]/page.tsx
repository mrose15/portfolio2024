import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="text-5xl leading-loose drop-shadow font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 bg-clip-text text-transparent">
        {page.title}
      </h1>
      <PortableText value={page.content} />
    </div>
  );
}
