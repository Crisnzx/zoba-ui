import React from "react";

type ErrorContainerProps = {
  className?: string;
  error?: string;
};

export const ErrorContainer = ({ className, error }: ErrorContainerProps) => {
  return (
    <div className="z-error-container">
      {error && <span className={className || ""}>{error}</span>}
    </div>
  );
};
