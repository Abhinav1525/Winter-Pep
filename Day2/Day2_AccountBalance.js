let balance = 0;

function deposit(amount) {
  if (amount > 0) {
    balance += amount;
    console.log(`Deposited ${amount}. New balance: ${balance}`);
  } else {
    console.log("Invalid deposit amount. Amount must be greater than 0.");
  }
}

function withdraw(amount) {
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    console.log(`Withdrew ${amount}. New balance: ${balance}`);
  } else if (amount > balance) {
    console.log("Insufficient funds.");
  } else {
    console.log("Invalid withdrawal amount. Amount must be greater than 0.");
  }
}

function getBalance() {
  console.log(`Current balance: ${balance}`);
}

// Example usage:
deposit(1000); // Initial deposit
deposit(500);
withdraw(200);
getBalance();
