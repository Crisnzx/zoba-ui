import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloseIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 9 8"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.873 5.761a.43.43 0 0 1-.306.739.432.432 0 0 1-.306-.127L4.5 4.612 2.739 6.373a.432.432 0 0 1-.612 0 .43.43 0 0 1 0-.612L3.888 4 2.127 2.239a.43.43 0 0 1 0-.612.43.43 0 0 1 .612 0L4.5 3.388l1.761-1.761a.43.43 0 0 1 .612 0 .43.43 0 0 1 0 .612L5.112 4l1.761 1.761z" />
  </svg>
);
export default SvgCloseIcon;
