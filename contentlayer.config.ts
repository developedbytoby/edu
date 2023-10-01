import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    subject: { type: "string", required: true },
    image: { type: "string", required: true },
    private: { type: "boolean", default: false }, // still accessible from git, and via the url, but not listed in the index. so yeah, not really private.
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/essay/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({ contentDirPath: "essays", documentTypes: [Post] });
