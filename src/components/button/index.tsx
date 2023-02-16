import React from "react";
import classNames from "classnames";

// TODO: Filter this type to simplify the component API
type DefaultButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = {
  children: string;
  loading?: boolean;
  icon?: React.ReactNode;
  theme?: string;
} & DefaultButtonProps;

export function Button({
  loading = false,
  icon,
  theme = "primary",
  type = "button",
  className,
  children,
  ...defaultProps
}: ButtonProps) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      {...defaultProps}
      type={type}
      className={classNames(className, "z-button", `z-button--${theme}`, {
        "z-button--loading": loading,
      })}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}
