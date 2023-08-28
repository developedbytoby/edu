"use client";

import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { BaseStyles } from "theme-ui";
import components from "@/components/mdxComponents";

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const essay = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug,
  );

  const Content = getMDXComponent(essay.body.code);

  return (
    <div className="mx-auto max-w-xl py-8">
      <BaseStyles>
        <h1 className="text-4xl">{essay.title}</h1>
        <Content components={components} />
      </BaseStyles>
    </div>
  );
};

export default PostLayout;
