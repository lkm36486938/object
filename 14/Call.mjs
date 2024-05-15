export class DateTimeInterval {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  splitByDay() {
    if (this.days() > 1) {
      return this.splitByDayInternal(this.days());
    }
    return [this];
  }

  days() {
    const from = this.from.getTime();
    const to = this.to.getTime();
    const diffTime = to - from;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  splitByDayInternal(days) {
    const result = [];
    const fromDate = this.from.getTime();
    for (let loop = 0; loop < days; loop++) {
      const nextDate = new Date(fromDate);
      nextDate.setDate(this.from.getDate() + loop);
      const from = new Date(
        nextDate.getFullYear(),
        nextDate.getMonth(),
        nextDate.getDate(),
        0,
        0,
        0
      );
      const to = new Date(
        nextDate.getFullYear(),
        nextDate.getMonth(),
        nextDate.getDate(),
        23,
        59,
        59,
        999
      );
      result.push(new DateTimeInterval(from, to));
    }
    return result;
  }

  static toMidnight(dateTime) {
    return new DateTimeInterval(
      dateTime,
      new Date(
        dateTime.getFullYear(),
        dateTime.getMonth(),
        dateTime.getDate(),
        0,
        0,
        0
      )
    );
  }

  static fromMidnight(dateTime) {
    return new DateTimeInterval(
      new Date(
        dateTime.getFullYear(),
        dateTime.getMonth(),
        dateTime.getDate(),
        0,
        0,
        0
      ),
      dateTime
    );
  }

  static during(date) {
    return new DateTimeInterval(
      new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        23,
        59,
        59,
        999
      )
    );
  }
}

export class Call {
  constructor(from, to) {
    this.interval = new DateTimeInterval(from, to);
  }

  getDuration() {
    return this.interval.duration();
  }

  getFrom() {
    return this.interval.getFrom();
  }

  getTo() {
    return this.interval.getTo();
  }

  getInterval() {
    return this.interval;
  }

  splitByDay() {
    return this.interval.splitByDay();
  }
}
