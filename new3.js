class Bank{
    accountNum;
    holderName;
    Balance;
    constructor(Name,AC){
        this.Balance=1000;
        this.holderName=Name;
        this.accountNum=AC;
    }
    deposit(money){
        this.Balance=this.Balance+money;
    }
    withdraw(money){
        if(money>this.Balance){
            console.log("Insufficient Balance");
        }
        else{
        this.Balance=this.Balance-money;}
    }
    displayBalance(){
        console.log("Current balance is: ",this.Balance);
    }
    static BankInfo(account){
        console.log("Account Number: ",account.accountNum);
        console.log("Account Holder ",account.holderName);
        console.log("Account Balance: ",account.Balance);
    }

};
let b1=new Bank("Naman",10001);
b1.deposit(1000);
b1.displayBalance();
b1.withdraw(1000);
b1.displayBalance();
b1.withdraw(2000);
Bank.BankInfo(b1);