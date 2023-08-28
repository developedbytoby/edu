/** @jsxImportSource theme-ui */
import Link from "next/link";

export default {
  h1: (props) => (
    <h1 className="text-2xl font-semibold" id={props.children} {...props}>
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <a
      className="text-xl font-semibold"
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
