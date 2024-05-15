export class FeeRule {
  constructor(feeCondition, feePerDuration) {
    this.feeCondition = feeCondition;
    this.feePerDuration = feePerDuration;
  }

  calculateFee(call) {
    return this.feeCondition
      .findTimeIntervals(call)
      .map((each) => this.feePerDuration.calculate(each))
      .reduce((first, second) => first.plus(second), Money.ZERO);
  }
}
