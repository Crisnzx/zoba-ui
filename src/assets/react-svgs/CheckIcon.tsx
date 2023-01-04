import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckIcon = ({
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
    <path d="M7.363 2.13a.422.422 0 0 0-.606 0l-3.18 3.284L2.24 4.032a.431.431 0 0 0-.477-.089.46.46 0 0 0-.14.1.472.472 0 0 0-.122.32.456.456 0 0 0 .133.316l1.64 1.69a.419.419 0 0 0 .606.001l3.484-3.593a.44.44 0 0 0 .101-.5.443.443 0 0 0-.101-.147z" />
  </svg>
);
export default SvgCheckIcon;
