// convert string to its uppercase

str = "hello"

// string to array => Array.from()
// arr = Array.from(str)
// console.log(arr);

// Array.from(str).map(char=>char.toUpperCase()).forEach(char=>console.log(char))


// print vowels present in the given string

str = "hello hai"
vowel = ['a','e','i','o','u','A','E','I','O','U']
Array.from(str).filter(char=>vowel.includes(char)).forEach(char=>console.log(char))
