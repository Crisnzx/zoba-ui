import React, { useRef, useState } from "react";
import classNames from "classnames";

import { ArrowDownIcon } from "@/assets/react-svgs";
import { RandomHelper } from "@/helpers/random-helper";

type AccordionProps = {
  headerTitle: string;
  children: React.ReactNode;
  className?: string;
};

export const Accordion = ({
  headerTitle,
  children,
  className,
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const measureHeightDivHelperRef = useRef<HTMLDivElement>(null);

  const randomId = RandomHelper.string();
  const maxHeight = isExpanded
    ? measureHeightDivHelperRef.current!.clientHeight
    : 0;

  return (
    <div className={classNames("z-accordion", className)}>
      <button
        type="button"
        className="z-accordion__header"
        onClick={() => setIsExpanded((prevState) => !prevState)}
        aria-label={isExpanded ? "Collapse" : "Expand"}
        aria-expanded={isExpanded ? "true" : "false"}
        aria-controls={`accordion-body-${randomId}`}
      >
        <h3 id={`accordion-header-${randomId}`}>{headerTitle}</h3>
        <ArrowDownIcon
          className={classNames("z-accordion__arrow", {
            "z-accordion__arrow--flip": isExpanded,
          })}
        />
      </button>
      <div
        id={`accordion-body-${randomId}`}
        style={{ maxHeight }}
        className="z-accordion__content-container"
        role="region"
        aria-labelledby={`accordion-header-${randomId}`}
      >
        <div className="z-accordion__content" ref={measureHeightDivHelperRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
