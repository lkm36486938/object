import { FeeCondition } from "../FeeCondition";
import { DateTimeInterval } from "../Call.mjs";

export class TimeOfDayFeeCondition extends FeeCondition {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  // Call의 통화기간중에서 from ~ to 사이에 포함되는 시간구간 반환
  findTimeIntervals(call) {
    return call
      .getInterval()
      .splitByDay()
      .filter((each) => this.from(each).isBefore(this.to(each)))
      .map((each) => {
        const fromTime = this.from(each).isBefore(this.from)
          ? this.from
          : this.from(each);
        const toTime = this.to(each).isAfter(this.to) ? this.to : this.to(each);
        return new DateTimeInterval(
          each.getFrom().toLocalDate().atTime(fromTime),
          each.getTo().toLocalDate().atTime(toTime)
        );
      });
  }
}
