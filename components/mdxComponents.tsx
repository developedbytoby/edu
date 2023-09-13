/** @jsxImportSource theme-ui */
import Link from "next/link";

export default {
  h1: (props) => (
    <h1
      className="text-3xl font-semibold mb-2 mt-4"
      id={props.children}
      {...props}
    >
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <a
      className="text-3xl font-semibold mb-2 mt-4"
      href={`#${props.children}`}
      id={props.children}
      {...props}
    >
      {props.children}
    </a>
  ),

  li: ({ ...props }) => <p className="ml-4 my-2">• {props.children}</p>,

  a: ({ href, ...props }) => (
    <Link
      href={href}
      className="text-[#3291ff] hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      passHref
      {...props}
    >
      {props.children}
    </Link>
  ),
};
