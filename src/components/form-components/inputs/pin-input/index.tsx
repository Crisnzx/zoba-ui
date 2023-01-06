import React, { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { ONLY_NUMBER_REGEX } from "@/helpers/regex";
import { ErrorContainer } from "@/components/form-components/error-container";

import "./styles.scss";

type PinInputProps = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  showNumbers?: boolean;
  submitOnFinish?: boolean;
  length?: number;
  className?: string;
};

export const PIN_INPUT_HIGHLIGHTED_ERROR_MESSAGES = {
  required: "This field is required",
  wrongPinCode: "Wrong PIN code. Please try again",
};

export const PinInput = ({
  value,
  onChange,
  error,
  showNumbers = false,
  submitOnFinish = false,
  length = 4,
  className,
}: PinInputProps) => {
  const [focus, setFocus] = useState(0);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const pinIndexes = Array.from(Array(length).keys());
  const pin = pinIndexes.map((pinIndex) => String(value || "")[pinIndex] || "");

  const inputType = showNumbers ? "text" : "password";
  const shouldHighlightError = Object.values(
    PIN_INPUT_HIGHLIGHTED_ERROR_MESSAGES
  ).includes(error as string);

  const handleChange = (value: string) => {
    if (!ONLY_NUMBER_REGEX.test(value)) {
      return;
    }

    if (value) {
      pin[focus] = value[1] || value[0];
      onChange(pin.join(""));

      if (focus < length - 1) {
        document.getElementById(`pin-${focus + 1}`)?.focus();
        setFocus((prevState) => prevState + 1);
      } else if (submitOnFinish) {
        setTimeout(() => {
          submitButtonRef.current!.click();
        });
      }
    }
  };

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      const isPinInputOnFocus = document.activeElement?.id.includes("pin-");
      if (event.key === "Backspace" && isPinInputOnFocus) {
        pin[focus] = "";
        onChange(pin.join(""));

        if (focus > 0) {
          document.getElementById(`pin-${focus - 1}`)?.focus();
          setFocus((prevState) => prevState - 1);
        }
      }
    },
    [focus, onChange, pin]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown, false);

    return () => {
      document.removeEventListener("keydown", handleKeydown, false);
    };
  }, [handleKeydown]);

  return (
    <div className={classNames("z-pin-input", className)}>
      <div className={"z-pin-input__inputs-container"}>
        {pinIndexes.map((pinIndex) => (
          <input
            id={`pin-${pinIndex}`}
            key={pinIndex}
            className={classNames("z-pin-input__input", {
              "z-pin-input__input--error": shouldHighlightError,
            })}
            autoComplete="off"
            type={inputType}
            value={pin[pinIndex]}
            onChange={(event) => handleChange(event.target.value)}
          />
        ))}
      </div>
      <ErrorContainer className="z-pin-input__error" error={error} />
      {submitOnFinish && (
        <button
          style={{ visibility: "hidden", width: "0px", height: "0px" }}
          type="submit"
          ref={submitButtonRef}
        />
      )}
    </div>
  );
};
