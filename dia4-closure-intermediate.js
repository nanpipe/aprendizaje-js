const createBankAccount = (inicialBalance) => {
    let balance = inicialBalance;

    return {
        deposit: (amount) => {
            if (amount > 0) return balance += amount
        },
        withdraw: (amount) => {
            if (amount <= balance) return balance -= amount
        },
        getBalance: () => {
            return balance
        }
    }
}


const myAccount = createBankAccount(1000);

console.log(myAccount.getBalance());    // 1000
console.log(myAccount.deposit(500));    // 1500
console.log(myAccount.withdraw(200));   // 1300
console.log(myAccount.getBalance());    // 1300