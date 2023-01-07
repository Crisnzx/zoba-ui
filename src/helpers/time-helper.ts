export type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

export class TimeHelper {
  private constructor() {}

  public static getTimeFromSeconds(seconds: number): Time {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - hours * 3600) / 60);
    const secondsInMinute = seconds - hours * 3600 - minutes * 60;
    return {
      hours,
      minutes,
      seconds: secondsInMinute,
    };
  }
}
