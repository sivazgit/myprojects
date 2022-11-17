var luckyDraw = new Promise((res,rej)=>{
    let lotNum = 5
    let prizeNum = Math.floor(Math.random()*10)
    if(lotNum==prizeNum){
        res("You Won the lottery!!!")
    }
    if(lotNum!=prizeNum)
    rej("Sorry better luck next time!")
})

luckyDraw.then(data=>console.log(data)).catch(err=>console.log(err));

// asynchronous event ne javascript resolve cheyunnu athinayi promise use chyunnu