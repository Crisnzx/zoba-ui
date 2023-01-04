import React from "react";
import classNames from "classnames";

import { ErrorContainer } from "../error-container";

import "./styles.scss";

// Add sass support
// Add unit tests
export type SwitchProps = {
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
    <div className={classNames("zoba-switch", className)}>
      <div className="zoba-switch-container">
        <input
          type="checkbox"
          className="zoba-switch-styling"
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
