accounts = [
    {
        acno: 1000, ac_type: 'savings', balance: 45000, transaction: [
            {
                to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay'
            },
            {
                to: 1002, amount: 2000, msg: 'emi', mode: 'neft'
            },
            {
                to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay'
            },
        ]
    },
    {
        acno: 1001, ac_type: 'current', balance: 30000, transaction: [
            {
                to: 1000, amount: 1000, msg: 'grossary', mode: 'gpay'
            },
            {
                to: 1002, amount: 7000, msg: 'gift', mode: 'phonePay'
            },
            {
                to: 1003, amount: 10000, msg: 'emi', mode: 'neft'
            },
        ]
    },
    {
        acno: 1002, ac_type: 'fixed', balance: 100000, transaction: [
            {
                to: 1000, amount: 5000, msg: 'ebill', mode: 'gpay'
            },
            {
                to: 1001, amount: 2000, msg: 'emi', mode: 'neft'
            },
            {
                to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay'
            },
        ]
    },
    {
        acno: 1003, ac_type: 'savings', balance: 30000, transaction: [
            {
                to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay'
            },
            {
                to: 1002, amount: 2000, msg: 'emi', mode: 'neft'
            },
            {
                to: 1000, amount: 1000, msg: 'recharge', mode: 'phonePay'
            },
        ]
    }
]

// 1. find total number of accounts
console.log(accounts.length); 

// 2. print account whose ac_type is savings

accounts.filter(item=>item["ac_type"]=='savings').forEach(item=>console.log(item.acno)); 

//3.print the balance of accnount number 1000
accounts.filter(item=>item["acno"]==1000).forEach(item=>console.log("balance of acno:1000 =",item.balance));

// find um use cheyamm...^ it is more applicable

//4. print all gpay transactions
console.log(accounts.map(item=>item.transaction).flat().filter(item=>item.mode=='gpay'));

//5. print all transaction whose amount > 5000
accounts.map(item=>item.transaction).flat().filter(item=>item.amount>5000).forEach(item=>console.log(item));

//6. print credit transaction of account 1002
creditTrans = accounts.map(item=>item.transaction).flat().filter(item=>item.to==1002)
console.log(creditTrans);

// 7. print debit transaction of account 1002

debitTrans = accounts.find(item=>item.acno==1002).transaction
console.log(debitTrans);

// transactionhistory of acno: 1002
transhistory = {
    credit:creditTrans,
    debit:debitTrans
}
 console.log(transhistory);

//  method 2

transhistory = [...creditTrans,...debitTrans]
console.log(transhistory);

//8. print highest balance account details
console.log(accounts.reduce((item1,item2)=>item1.balance>item2.balance?item1:item2));