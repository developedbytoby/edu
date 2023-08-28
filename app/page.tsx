import Image from "next/image";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";

import hero from "../public/writing.png";

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
      <div className="md:w-1/2 w-full space-y-4 p-8">
        {essays.map((post, idx) => (
          <Card key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}

function Card(essay: Post) {
  return (
    <Link href={essay.url} className="flex place-content-around">
      <p className="font-medium text-md w-full capitalize mr-4">
        {essay.title}
      </p>
      <div className="border-top border-dotted w-full" />
      <p className="text-gray-500 place-self-end text-md capitalize ml-4 self-center">
        {format(parseISO(essay.date), "d/MM/yy")}
      </p>
    </Link>
  );
}
