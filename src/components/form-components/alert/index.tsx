import React, { useState, useCallback, useEffect } from "react";
import classNames from "classnames";

import { CheckIcon } from "@/assets/react-svgs";
import { CloseIcon } from "@/assets/react-svgs";

import "./styles.scss";

export enum AlertTypes {
  SUCCESS = "success",
  ERROR = "error",
}

type AlertProps = {
  type: AlertTypes;
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
      className={classNames("zoba-container", type, closeAnimation && "close")}
      data-testid={`${type}-alert`}
      role="alert"
    >
      <div className="zoba-icon-container" aria-hidden="true">
        <CheckIcon className="zoba-icon" />
      </div>
      <div className="zoba-text-container">
        <h4 className="zoba-title">{title}</h4>
        <p className="zoba-description">{description}</p>
      </div>
      <button
        type="button"
        onClick={closeAlert}
        className="zoba-close-toast-container"
        aria-label="Close alert"
      >
        <AlertIcon className="zoba-close-toast" />
      </button>
    </aside>
  );
};
