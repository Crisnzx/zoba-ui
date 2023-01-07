import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDownIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M12 15.833c-.281 0-.55-.108-.746-.3L4.79 9.16a.944.944 0 0 1 .029-1.386 1.073 1.073 0 0 1 1.462.027L12 13.438l5.72-5.637a1.074 1.074 0 0 1 1.462-.027.945.945 0 0 1 .03 1.386l-6.466 6.372a1.061 1.061 0 0 1-.746.301"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownIcon;
