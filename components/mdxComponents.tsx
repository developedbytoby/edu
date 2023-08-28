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

  a: ({ href, ...props }) => (
    <Link
      href={href}
      className="underline underline-offset-1"
      {...props}
      passHref
    >
      {props.children}
    </Link>
  ),
};
