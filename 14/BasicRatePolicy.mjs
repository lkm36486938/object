import { Money } from "./Money.mjs";

export class BasicRatePolicy {
  constructor(...feeRules) {
    this.feeRules = feeRules;
  }

  calculateFee(phone) {
    return phone
      .getCalls()
      .map((call) => this.calculate(call))
      .reduce((first, second) => first.plus(second), Money.ZERO());
  }

  calculate(call) {
    return this.feeRules
      .map((rule) => rule.calculateFee(call))
      .reduce((first, second) => first.plus(second), Money.ZERO());
  }
}
