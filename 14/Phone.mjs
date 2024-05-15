export class Phone {
  constructor(ratePolicy) {
    this.ratePolicy = ratePolicy;
    this.calls = [];
  }

  call(call) {
    this.calls.push(call);
  }

  getCalls() {
    return [...this.calls]; // Returning a copy to prevent modification of the original list
  }

  calculateFee() {
    return this.ratePolicy.calculateFee(this);
  }
}
