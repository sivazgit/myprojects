text="hello hai hello hai"
// 1. print word count
// output :{hello:2,hai:2}

words = text.split(" ")
console.log(words);
wordCount={}
// for(let word of words){
//     if(word in wordCount){
//         wordCount[word]+=1
//     }
//     else{
//         wordCount[word]=1
//     }
// }

// method 2
words.map(word=>word in wordCount?wordCount[word]+=1:wordCount[word]=1)
console.log(wordCount);