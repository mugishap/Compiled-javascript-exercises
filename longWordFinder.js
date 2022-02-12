function longestWord(string) {
let str = string.split(' ')
let word = ""
for (let i = 0; i < str.length; i++) {
if(str[i].length > word.length){word = str[i]}    
}
console.log(word)
}

longestWord('Web Development Tutorial')
