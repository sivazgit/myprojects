class Bank{
    constructor(acno,username,phonenum,balance){
        this.acno=acno,
        this.username=username,
        this.phonenum=phonenum,
        this.balance=balance
    }

    deposit(amount){
        this.balance+=amount
        console.log(`${amount} deposited successfully`);
    }

    withdraw(amount){
        if(amount>this.balance){
            console.log(`transaction failed! insufficient balance`);
        }
        else{
            this.balance-=amount
            console.log('amount successfully debited');
        }
    }
    balaneEnquiry(){
    console.log(`balance is: ${this.balance}`);

    }

}

b = new Bank(100,'zayn',953752547,100000)
b.deposit(2000)
b.withdraw(4000)
b.balaneEnquiry()