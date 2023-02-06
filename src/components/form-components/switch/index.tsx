import React from "react";
import classNames from "classnames";

import { ErrorContainer } from "@/components/form-components/error-container";

// Add unit tests
type SwitchProps = {
  children: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  "data-testid"?: string;
};

export const Switch = ({
  children,
  checked,
  onChange,
  error,
  disabled,
  className,
  ...props
}: SwitchProps) => {
  return (
    <div className={classNames("z-switch", className)}>
      <div className="z-switch__container">
        <input
          type="checkbox"
          className="z-switch__checkbox"
          onChange={(event) => onChange(event.target.checked)}
          checked={checked}
          disabled={disabled}
          {...props}
        />
        {children}
      </div>
      <ErrorContainer error={error} />
    </div>
  );
};
