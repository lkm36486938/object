import { Money } from "./Money";

export class FeePerDuration {
  constructor(fee, duration) {
    this.fee = fee;
    this.duration = duration;
  }

  calculate(interval) {
    const milliseconds = interval.getTo() - interval.getFrom();
    const durationInNanos = this.duration * 1000000; // Convert duration to nanoseconds
    const numberOfPeriods = Math.ceil(milliseconds / durationInNanos);
    return this.fee.times(numberOfPeriods);
  }
}
