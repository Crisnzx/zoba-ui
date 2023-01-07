import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Input } from "@/components/form-components/inputs/input";
import { InputProps } from "@/components/form-components/inputs/input/input-props";
import { Option } from "@/helpers/form-types";

export type AutocompleteProps = Omit<InputProps, "type"> & {
  options: Option[];
};

export const Autocomplete = ({
  options,
  value,
  onChange,
  onFocus,
  onBlur,
  ...otherProps
}: AutocompleteProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] =
    useState<Option | undefined>(undefined);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.label
          .toLowerCase()
          .includes(inputValue.toString().toLowerCase() || "")
      ),
    [inputValue, options]
  );

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsDropdownOpen(true);
    onFocus?.(event);
  };

  const isElementWrapperChild = (element: Element | null) => {
    const wrapper = wrapperRef.current as HTMLDivElement;
    return wrapper.contains(element as Node);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!isElementWrapperChild(event.relatedTarget)) {
      setIsDropdownOpen(false);
      autoCompleteOnBlur();
      onBlur?.(event);
    }
  };

  const autoCompleteOnBlur = () => {
    if (inputValue) {
      const foundOption = options.find(
        (option) =>
          option.label.toLowerCase() === inputValue.toString().toLowerCase()
      );
      onChange?.(foundOption?.value || filteredOptions[0]?.value || "");
    }
    setIsDropdownOpen(false);
    inputRef.current?.blur();
  };

  const handleWrapperBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!isElementWrapperChild(event.relatedTarget)) {
      autoCompleteOnBlur();
    }
  };

  const onSelectOption = useCallback(
    (option: Option) => {
      setIsDropdownOpen(false);
      onChange?.(option.value);
    },
    [onChange]
  );

  const onInputChange = (value: string) => {
    setIsDropdownOpen(true);
    setInputValue(value);
    checkIfOptionExists(value);
  };

  const checkIfOptionExists = (value: string) => {
    const foundOption = options.find(
      (option) => option.label.toLowerCase() === value.toString().toLowerCase()
    );
    if (foundOption) {
      onChange?.(foundOption.value);
    }
  };

  const getFocusedElementIndex = (): number => {
    const currentElement = document.activeElement as HTMLElement;
    const tabIndex = Number(currentElement.getAttribute("tabindex"));
    return tabIndex;
  };

  const focusNextElement = (currentTabIndex: number): void => {
    const nextIndex = currentTabIndex + 1;
    const nextElement = document.querySelector(
      `[tabindex="${nextIndex}"]`
    ) as HTMLElement;
    nextElement?.focus();
  };

  const focusPrevElement = (currentTabIndex: number): void => {
    const prevIndex = currentTabIndex > 1 ? currentTabIndex - 1 : 1;
    const prevElement = document.querySelector(
      `[tabindex="${prevIndex}"]`
    ) as HTMLElement;
    prevElement?.focus();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp"].includes(event.key)) {
        const tabIndex = getFocusedElementIndex();
        if (event.key === "ArrowDown") {
          focusNextElement(tabIndex);
        } else {
          focusPrevElement(tabIndex);
        }
      }
    };

    const wrapper = wrapperRef.current as HTMLDivElement;
    wrapper.addEventListener("keydown", handleKeyDown, false);
    return () => {
      wrapper.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);

  useEffect(() => {
    if (!value) {
      setInputValue("");
      setSelectedOption(undefined);
      return;
    }
    const option = options.find((opt) => opt.value === value);
    setInputValue(option?.label || "");
  }, [options, value]);

  useEffect(() => {
    if (selectedOption) {
      setInputValue(selectedOption.label);
      onChange?.(selectedOption.value);
    }
  }, [onChange, selectedOption]);

  return (
    <div className="z-autocomplete" ref={wrapperRef} onBlur={handleWrapperBlur}>
      <Input
        {...otherProps}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onInputChange}
        value={inputValue}
        ref={inputRef}
        autoComplete="off"
        tabIndex={0}
      />
      {isDropdownOpen && (
        <div className="z-autocomplete__dropdown">
          {filteredOptions.length ? (
            filteredOptions.map((option: Option, index: number) => (
              <button
                type="button"
                key={option.value}
                className="z-autocomplete__option"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onSelectOption(option)}
                aria-label={`Select ${option.value}`}
                data-testid={`${otherProps.name}-option-${option.value}`}
                tabIndex={index + 1}
              >
                {option.label}
              </button>
            ))
          ) : (
            <button type="button" disabled className="z-autocomplete__option">
              No Result
            </button>
          )}
        </div>
      )}
    </div>
  );
};
