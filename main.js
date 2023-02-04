const client = {
  fullName: "John Doe",
  creditLimit: 5000,
  balance: 1750,
  precentOfMinPayment: 15,
  getBalance() {
    if (this.balance < 0) {
      return `borc ${this.balance * -1}`;
    } else {
      return `balans ${this.balance}`;
    }
  },
  getMinPaymant() {
    if (this.balance >= 0) {
      return "sizin borcunuz yoxdur";
    } else {
      return `minimum ödəniş ${
        (-this.balance * this.precentOfMinPayment) / 100
      }`;
    }
  },
  withdraw(a) {
    if (
      this.balance + this.creditLimit > 0 &&
      this.balance + this.creditLimit >= a
    ) {
      return this.balance - a;
    } else {
      return `yetərli balans yoxdur --> (${this.balance + this.creditLimit})`;
    }
  },
  refill(a) {
    return this.balance + a;
  },
};
console.log(client.getBalance());
console.log(client.getMinPaymant());
console.log(client.withdraw(100));
console.log(client.refill(50));
