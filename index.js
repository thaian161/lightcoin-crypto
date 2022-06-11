let balance = 500.0;

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
}
//Deposit feature
class Deposit extends Transaction {
  commit() {
    this.account.balance += this.amount;
  }
}
//Withdrawal feature
class Withdrawal extends Transaction {
  commit() {
    this.account.balance -= this.amount;
  }
}
//Account feature that keep track of user and their balance
class Account {
  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }
}

//======DRIVER CODE BELOW==========
// t1 = new Withdrawal(50.25);
// t1.commit();
// console.log("Transaction 1:", t1); //Transaction 1: Withdrawal { amount: 50.25 }

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log("Transaction 2:", t2); //Transaction 2: Withdrawal { amount: 9.99 }

// console.log("Balance:", balance); // Balance: 439.76

// t3 = new Deposit(120.0);
// t3.commit();
// console.log("Transaction 3:", t3); //Transaction 3: Deposit { amount: 120 }

// console.log("Balance:", balance); // Balance: 559.76

const myAccount = new Account("snow-patrol");
t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log("Transaction 1:", t1);
console.log("Balance:", balance);
