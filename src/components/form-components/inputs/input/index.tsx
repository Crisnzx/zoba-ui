import React, { forwardRef, Ref, useCallback, useState } from "react";
import classNames from "classnames";
import InputMask from "react-input-mask";

import { ErrorContainer } from "@/components/form-components/error-container";

import "./styles.scss";

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "onChange" | "ref"
> & {
  type?: "text" | "email" | "password" | "tel" | "number";
  label: string;
  value: string;
  error?: string;
  disableAutofill?: boolean;
  iconRight?: React.ReactNode;
  onChange?: (value: string) => void;
  mask?: string;
  disablePaste?: boolean;
};

const InputComponent = (
  {
    name,
    label,
    className,
    value,
    error,
    onChange,
    disableAutofill,
    onFocus,
    iconRight,
    mask,
    type = "text",
    disablePaste,
    placeholder,
    readOnly,
    id = name,
    ...otherProps
  }: InputProps,
  ref?: Ref<HTMLInputElement>
) => {
  const [isInitiallyReadOnly, setIsInitiallyReadOnly] =
    useState(disableAutofill);

  const disableInitialReadOnly = useCallback(() => {
    setIsInitiallyReadOnly(false);
  }, []);

  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      if (disableAutofill) {
        disableInitialReadOnly();
      }
      onFocus?.(event);
    },
    [disableAutofill, disableInitialReadOnly, onFocus]
  );

  const renderInput = () => (
    <div>
      <div className={classNames("z-input", className)}>
        <input
          {...otherProps}
          className={classNames("z-input__input", {
            "z-input__input--error": error,
          })}
          type={type}
          value={mask ? undefined : value}
          onChange={(event) => !mask && onChange?.(event.target.value)}
          readOnly={isInitiallyReadOnly || readOnly}
          onFocus={handleFocus}
          placeholder={placeholder}
          ref={ref}
          id={id}
          onPaste={disablePaste ? (e) => e.preventDefault() : undefined}
        />
        <label
          className={classNames("z-input__label", {
            "z-input__label--has-text": value || placeholder,
          })}
          htmlFor={name}
        >
          {label}
        </label>
        {iconRight && (
          <span className={"z-input__icon-right"}>{iconRight}</span>
        )}
      </div>
      <ErrorContainer error={error} />
    </div>
  );

  if (mask) {
    return (
      <InputMask
        mask={mask}
        value={value}
        onChange={(event: { target: { value: string } }) =>
          onChange?.(event.target.value)
        }
        maskChar={null}
      >
        {/* 
        This code is being detected as an error by typescript because it's not a valid JSX element,
        it's just a reference to a function that RETURNS
        some JSX. But that's how the react-input-mask docs tells us to do that. 
        To be able to commit and build the app, we have a ts-ignore comment
        */}
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          renderInput
        }
      </InputMask>
    );
  }
  return renderInput();
};

export const Input = forwardRef<HTMLInputElement, InputProps>(InputComponent);
