"use client";

import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import components from "@/components/mdxComponents";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

import back from "@/public/icons/back.svg";
import plus from "@/public/icons/plus.svg";
import warn from "@/public/icons/warn.svg";

const inter = Inter({ subsets: ["latin"] });

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const essay = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug,
  );

  const Content = getMDXComponent(essay.body.code);

  function Copy() {
    copy("https://edu.tobyb.dev" + essay.url);
    toast("Copied link to clipboard!");
  }

  return (
    <div
      className={`mx-auto w-screen justify-center place-items-center grid ${inter.className}`}
    >
      <Toaster position="top-right" />
      <div className="bg-white border-b w-full p-2 fixed top-0 left-0 flex space-x-4">
        <div className="flex">
          <Link href="/" className="flex text-gray-500 w-max">
            <Image src={back} alt="Back arrow" />
          </Link>
          <a onClick={() => Copy()} className="cursor-pointer">
            <Image src={plus} alt="Share essay" />
          </a>
        </div>
        <div className="flex space-x-2">
          <p className="capitalize">{essay.subject}</p>
          <p>/</p>
          <p className="capitalize">{essay.title}</p>
        </div>
      </div>
      <img
        src={essay.image}
        alt="Article Header image"
        className="h-72 w-screen object-cover mt-10"
      />
      <div className="max-w-2xl m-8">
        <h1 className="text-4xl font-semibold mb-8 capitalize mt-8">
          {essay.title}
        </h1>
        <Content components={components} />
        {essay.private && (
          <p className="text-gray-400 mt-8 flex">
            <Image src={warn} alt="A warning icon" className="mr-2" />
            This is a private page, and isn&apos;t accessible from the main
            archive.
          </p>
        )}
      </div>
    </div>
  );
};

export default PostLayout;
