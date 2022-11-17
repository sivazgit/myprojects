class Bank{

db = {
    1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000,transaction:[] },
    1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000 ,transaction:[]},
    1002: { "acno": 1002, "username": "Vyom", "password": 1002, "balance": 3000 ,transaction:[]}
  }

  //1. create a function for validate account number. To validate account check
  //if account number in db return true otherwise false
     
  ValidateAcno(acno){
    return acno in this.db?true:false
  }

 

  //2. create a function authenticate user using account number and password
  //if both are in db the print 'access granted' otherwise 'permission denied'

  authenticateuser(acno,pswrd){
    if(this.ValidateAcno(acno)){ //1000
        // acno in db
        // actualpswrd = db[acno].password
        if(pswrd==this.db[acno].password){
            console.log(`login successfull`);
        }
        else{
            console.log(`incorrect password`);
        }
    }
        else{
            console.log(`Invalid account number`);
        }
    }

    getBalance(acno){
     return this.ValidateAcno(acno)?this.db[acno].balance:"account doesnot exist"
    }

    fundTransfer(fromAcno,toAcno,amount){
      if(this.ValidateAcno(fromAcno) && this.ValidateAcno(toAcno)){
        if(amount>this.getBalance(fromAcno)){
            console.log(`transaction failed!!!....insufficient balance`);
      }
      else{
        this.db[fromAcno].balance-=amount
        this.db[toAcno].balance+=amount
        console.log(`transaction successfull`);

      }

    }
    else{
        console.log(`Transaction failed!!!...Account doesnot exist`);
    }

}

}
// create obj for bank
b1 = new Bank()
console.log(b1.ValidateAcno(1000));
b1.authenticateuser(1000,1000)
console.log(b1.getBalance(1000));
b1.fundTransfer(1000,1002,3000)
console.log(b1.getBalance(1000));
console.log(b1.getBalance(1002));
  