var pro = new Promise((resolve,reject)=>{
    let watchTime = 2
    if(watchTime>1){
        resolve("seminar was good!!!")
    }

})
pro.then(msg=>{
    console.log(msg);
})