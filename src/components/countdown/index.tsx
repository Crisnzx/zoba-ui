import React, {
  forwardRef,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";

import { NumberHelper } from "@/helpers/number-helper";
import { TimeHelper } from "@/helpers/time-helper";

type CountdownProps = {
  timeInSeconds: number;
  running?: boolean;
  className?: string;
  format?: "mm:ss" | "hh:mm:ss" | "ss";
  onFinish?: () => void;
};

export type CountdownRef = {
  restart: () => void;
};

let interval: NodeJS.Timer | null = null;

const CountdownComponent = (
  {
    timeInSeconds,
    running = true,
    className,
    format = "mm:ss",
    onFinish,
  }: CountdownProps,
  ref?: Ref<CountdownRef>
) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(timeInSeconds);
  }, [timeInSeconds]);

  useImperativeHandle(ref, () => ({
    restart: () => setTime(timeInSeconds),
  }));

  const timer = useMemo(() => {
    const { hours, minutes, seconds } = TimeHelper.getTimeFromSeconds(time);
    switch (format) {
      case "hh:mm:ss":
        return `${NumberHelper.addLeadingZeros(
          hours
        )}:${NumberHelper.addLeadingZeros(
          minutes
        )}:${NumberHelper.addLeadingZeros(seconds)}`;
      case "mm:ss":
        return `${NumberHelper.addLeadingZeros(
          minutes
        )}:${NumberHelper.addLeadingZeros(seconds)}`;
      default:
        return `${NumberHelper.addLeadingZeros(time)}`;
    }
  }, [format, time]);

  const startCountdown = useCallback(() => {
    if (interval !== null) {
      return;
    }
    interval = setInterval(() => {
      setTime((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);
  }, []);

  const disableTimer = () => {
    interval && clearInterval(interval);
    interval = null;
  };

  const finishCountdown = () => {
    disableTimer();
    onFinish?.();
  };

  useEffect(() => {
    if (time === 0) {
      finishCountdown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  useEffect(() => {
    if (running && time > 0) {
      startCountdown();
    } else {
      disableTimer();
    }
    return () => {
      disableTimer();
    };
  }, [running, startCountdown, time]);

  return (
    <div
      className={className}
      data-testid="countdown-timer"
      aria-live={time > 0 ? "polite" : "off"}
    >
      {timer}
    </div>
  );
};

export const Countdown =
  forwardRef<CountdownRef, CountdownProps>(CountdownComponent);
