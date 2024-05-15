import { DateTimeInterval } from "../Call.mjs";
import { FeeCondition } from "../FeeCondition";

export class DayOfWeekFeeCondition extends FeeCondition {
  constructor(...dayOfWeeks) {
    this.dayOfWeeks = dayOfWeeks;
  }

  findTimeIntervals(call) {
    return call
      .getInterval()
      .splitByDay()
      .filter((interval) =>
        this.dayOfWeeks.includes(interval.getFrom().getDay())
      )
      .map(
        (interval) => new DateTimeInterval(interval.getFrom(), interval.getTo())
      );
  }
}
