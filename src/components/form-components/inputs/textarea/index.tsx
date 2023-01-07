import React, { useCallback, useState } from "react";
import classNames from "classnames";

import { ErrorContainer } from "@/components/form-components/error-container";

// TODO: Filter this type to simplify the component API
export type TextareaProps = Omit<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "onChange" | "ref"
> & {
  label: string;
  value: string;
  error?: string;
  disableAutofill?: boolean;
  onChange?: (value: string) => void;
  disablePaste?: boolean;
};

export const Textarea = ({
  name,
  label,
  className,
  value,
  error,
  onChange,
  disableAutofill,
  onFocus,
  disablePaste,
  placeholder,
  readOnly,
  id = name,
  ...otherProps
}: TextareaProps) => {
  const [isInitiallyReadOnly, setIsInitiallyReadOnly] =
    useState(disableAutofill);

  const disableInitialReadOnly = useCallback(() => {
    setIsInitiallyReadOnly(false);
  }, []);

  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLTextAreaElement>) => {
      if (disableAutofill) {
        disableInitialReadOnly();
      }
      onFocus?.(event);
    },
    [disableAutofill, disableInitialReadOnly, onFocus]
  );

  return (
    <div className={classNames("z-textarea", className)}>
      <div className="z-textarea__container">
        <textarea
          {...otherProps}
          className={classNames("z-textarea__textarea", {
            "z-textarea__textarea--error": error,
          })}
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          readOnly={isInitiallyReadOnly || readOnly}
          onFocus={handleFocus}
          placeholder={placeholder}
          id={id}
          onPaste={disablePaste ? (e) => e.preventDefault() : undefined}
        />
        <label
          className={classNames("z-textarea__label", {
            "z-textarea__label--has-text": value || placeholder,
          })}
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      <ErrorContainer error={error} />
    </div>
  );
};
