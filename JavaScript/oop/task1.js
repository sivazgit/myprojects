db = {
    1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000,transaction:[] },
    1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000 ,transaction:[]},
    1002: { "acno": 1002, "username": "Vyom", "password": 1002, "balance": 3000 ,transaction:[]}
  }

  //1. create a function for validate account number. To validate account check
  //if account number in db return true otherwise false

  //2. create a function authenticate user using account number and password
  //if both are in db the print 'access granted' otherwise 'permission denied'

// 1. method 1

//   function Validate(acno){
//     if(acno in db){
//        console.log("true");
//     }
//     else{
//         console.log("false");
//     }
//   }
//  Validate(1050); 

// method 2

function Validate(acno){
    return(acno in db?true:false)
  }
 console.log(Validate(1000));


// // 2.
//  function Validate(acno,password){
//     return(acno && password in db?"access granted":"permission denied")
//   }
//  console.log(Validate(1000,1030));

function authenticate(acno,pswrd){
    if(Validate(acno)){ //1000
        // acno in db
        actualpswrd = db[acno].password
        if(pswrd==actualpswrd){
            console.log(`access granted`);
        }
        else{
            console.log(`permission denied`);
        }
    }
        else{
            console.log(`permission denied`);
        }
    }

authenticate(1000,1000)