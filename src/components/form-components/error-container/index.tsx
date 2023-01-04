import React from "react";

type ErrorContainerProps = {
  error?: string;
};

export const ErrorContainer = ({ error }: ErrorContainerProps) => {
  return (
    <div className="zoba-error-container">
      {error && <span className={"zoba-error"}>{error}</span>}
    </div>
  );
};
