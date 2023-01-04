import classNames from "classnames";

import { ErrorContainer } from "@/presentation/components/form-components/error-container";

export const Switch = ({
  children,
  checked,
  onChange,
  error,
  disabled,
  className,
}) => {
  return (
    <div className={classNames("zoba-switch", className)}>
      <div className={"zoba-switch-container"}>
        <input
          type="checkbox"
          className={"zoba-switch-styling"}
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
