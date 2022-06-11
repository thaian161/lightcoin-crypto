let balance = 500.0;

class Withdrawal {
  constructor(amount) {
    this.amount = amount;
  }

  commit() {
    balance -= this.amount;
  }
}

class Deposit {
  constructor(amount) {
    this.amount = amount;
  }
  commit() {
    balance += this.amount;
  }
}

//======DRIVER CODE BELOW==========
t1 = new Withdrawal(50.25);
t1.commit();
console.log("Transaction 1:", t1); //Transaction 1: Withdrawal { amount: 50.25 }

t2 = new Withdrawal(9.99);
t2.commit();
console.log("Transaction 2:", t2); //Transaction 2: Withdrawal { amount: 9.99 }

console.log("Balance:", balance); // Balance: 439.76

t3 = new Deposit(120.0);
t3.commit();
console.log("Transaction 3:", t3); //Transaction 3: Deposit { amount: 120 }

console.log("Balance:", balance); // Balance: 559.76
