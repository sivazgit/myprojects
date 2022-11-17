pattern = 'ABABBC'
// find first recursive character from the from the given pattern
// output = "A"

out={}
for(let char of pattern){
    // console.log(char);
    if(char in out){
        console.log("first recursive character is: ",char);
        break
    }
    else{
        out[char]=1
    }
}