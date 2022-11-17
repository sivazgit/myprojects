
// let n = 5;
// let string = "";

// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1 || i === n) {
//       string += "*";
//     }
//     else {
//       if(k === 0 || k === 2 * i - 2) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);


// method 2

for(row=1;row<=4;row++){
    str=""

    for(col=1;col<=7;col++){
        if(row==4 || row+col==5 || col-row==3){
            str+="*"
        }
        else{
            str+=" "
        }
    }
    console.log(str);
}



