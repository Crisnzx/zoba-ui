import React from "react";
import classNames from "classnames";

export type TextHtmlTags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

type TextProps = {
  className?: string;
  style: string;
  color: string;
  htmlTag: TextHtmlTags;
  children: string;
  uppercase?: boolean;
};

export const Text = ({
  htmlTag,
  style,
  color,
  className,
  uppercase = false,
  children,
}: TextProps) => {
  const makeClassNames = () =>
    classNames(
      "z-text",
      `z-text--${style}`,
      { "z-text--uppercase": uppercase },
      className
    );

  const attributes = {
    style: { color },
    className: makeClassNames(),
  };

  const mapElement = {
    h1: <h1 {...attributes}>{children}</h1>,
    h2: <h2 {...attributes}>{children}</h2>,
    h3: <h3 {...attributes}>{children}</h3>,
    h4: <h4 {...attributes}>{children}</h4>,
    h5: <h5 {...attributes}>{children}</h5>,
    h6: <h6 {...attributes}>{children}</h6>,
    p: <p {...attributes}>{children}</p>,
    span: <span {...attributes}>{children}</span>,
  };

  return mapElement[htmlTag];
};
