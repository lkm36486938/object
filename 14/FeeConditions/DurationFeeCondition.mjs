import { FeeCondition } from "../FeeCondition";

export class DurationFeeCondition extends FeeCondition {
  constructor(from, to) {
    super();
    this.from = from;
    this.to = to;
  }

  findTimeIntervals(call) {
    const interval = call.getInterval();
    const duration = interval.duration();

    if (duration < this.from) {
      return [];
    }

    const start = interval.getFrom().plus(this.from);
    const end =
      duration > this.to ? interval.getFrom().plus(this.to) : interval.getTo();

    return [new DateTimeInterval(start, end)];
  }
}
