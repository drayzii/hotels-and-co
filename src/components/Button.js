import { createElement } from "react";

export default function Button({ children, onClick, className }) {
  return createElement(
    "button",
    {
      onClick: onClick,
      className: "font-normal py-2 px-4 rounded-md " + className
    },
    children
  );
}
