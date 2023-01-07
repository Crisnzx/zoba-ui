import React from "react";
import classNames from "classnames";

// TODO: Filter this type to simplify the component API
type DefaultButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = {
  label: string;
  loading?: boolean;
  icon?: React.ReactNode;
  theme?: string;
} & DefaultButtonProps;

export function Button({
  label,
  loading = false,
  icon,
  theme = "primary",
  type = "button",
  ...defaultProps
}: ButtonProps) {
  return (
    <div className="z-button">
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={classNames("z-button__btn", `z-button__btn--${theme}`, {
          "z-button__btn--loading": loading,
        })}
        {...defaultProps}
      >
        <span>{label}</span>
        {icon}
      </button>
    </div>
  );
}
