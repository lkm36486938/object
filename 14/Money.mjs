export class Money {
  static ZERO = Money.wons(0);

  constructor(amount) {
    this.amount = amount;
  }

  static wons(amount) {
    return new Money(amount);
  }

  plus(amount) {
    return new Money(this.amount + amount.amount);
  }

  minus(amount) {
    return new Money(this.amount - amount.amount);
  }

  times(percent) {
    return new Money(this.amount * percent);
  }

  isLessThan(other) {
    return this.amount < other.amount;
  }

  isGreaterThanOrEqual(other) {
    return this.amount >= other.amount;
  }

  equals(other) {
    return this.amount === other.amount;
  }

  toString() {
    return this.amount.toString() + "원";
  }
}
