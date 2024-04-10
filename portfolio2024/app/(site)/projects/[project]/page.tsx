import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-5xl leading-loose drop-shadow font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 bg-clip-text text-transparent">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-300 rounded-lg text-blue-800 font-bold py-3 px-4 whitespace-nowrap hover:bg-purple-500 hover:text-purple-100 transition"
        >
          View Project
        </a>
      </header>

      {/* content goes here */}
      <div className=" text-lg text-gray-700 mt-5">
        <PortableText value={project.content}></PortableText>
      </div>

      {/* image goes here */}
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        priority
      ></Image>
    </div>
  );
}
