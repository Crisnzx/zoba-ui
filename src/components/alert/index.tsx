import React, { useState, useCallback, useEffect } from "react";
import classNames from "classnames";

import { CheckIcon } from "@/assets/react-svgs";
import { CloseIcon } from "@/assets/react-svgs";

export type AlertProps = {
  type: "success" | "error";
  title: string;
  description: string;
  onUnmountAlert: () => void;
};

const ALERT_DURATION = 5000;

export const Alert = ({
  title,
  description,
  type,
  onUnmountAlert,
}: AlertProps) => {
  const AlertIcon = type === "success" ? CheckIcon : CloseIcon;

  const [closeAnimation, setCloseAnimation] = useState(false);

  const closeAlert = useCallback(() => {
    setCloseAnimation(true);
    const timer = setTimeout(() => {
      setCloseAnimation(false);
      onUnmountAlert();
    }, 400);
    return () => clearTimeout(timer);
  }, [onUnmountAlert]);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeAlert();
    }, ALERT_DURATION);
    return () => clearTimeout(timer);
  }, [closeAlert]);

  return (
    <aside
      className={classNames(
        "z-alert",
        `z-alert--${type}`,
        closeAnimation && "z-alert--close"
      )}
      data-testid={`${type}-alert`}
      role="alert"
    >
      <div className="z-alert__icon-container" aria-hidden="true">
        <AlertIcon className="z-alert__icon" />
      </div>
      <div className="z-alert__text-container">
        <h4 className="z-alert__title">{title}</h4>
        <p className="z-alert__description">{description}</p>
      </div>
      <button
        type="button"
        onClick={closeAlert}
        className="z-alert__close-toast-container"
        aria-label="Close alert"
      >
        <CloseIcon className="z-alert__close-toast" />
      </button>
    </aside>
  );
};
