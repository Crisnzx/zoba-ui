import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 11 21"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.556 10.943c0 .375.13.734.362.994l7.646 8.62c.469.529 1.214.512 1.664-.037.45-.55.436-1.423-.033-1.95L3.43 10.943l6.765-7.627c.469-.527.483-1.4.033-1.95C9.778.817 9.033.8 8.564 1.328L.918 9.948c-.231.26-.362.62-.362.995Z"
    />
  </svg>
);
export default SvgArrowLeftIcon;
