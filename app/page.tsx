import Image from "next/image";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";

import hero from "../public/greenhouse.png";

export default function Home() {
  const essays = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="h-screen w-screen flex">
      <div className="md:w-1/2 justify-center text-center grid w-0 place-items-center">
        <h1 className="text-7xl font-semibold absolute text-white">
          Toby&apos;s Essays
        </h1>
        <Image
          src={hero}
          alt="A picture of someone sitting down writing an essay in an abstract style."
          className="h-full w-full object-cover"
        />
      </div>
      <div className="md:w-1/2 w-full space-y-4 py-8 p-16">
        {essays.map((post, idx) => (
          <Card key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}

function Card(essay: Post) {
  return (
    <Link href={essay.url} className="flex items-center place-content-around">
      <p className="font-medium text-md flex-none capitalize mr-4">
        {essay.title}
      </p>
      <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
      <p className="text-gray-500 place-self-end text-md capitalize ml-4 self-center flex space-x-2">
        {format(parseISO(essay.date), "d/MM/yy")}
      </p>
    </Link>
  );
}
