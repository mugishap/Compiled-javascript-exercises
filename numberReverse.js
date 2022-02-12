function reverseTheNumber(number){
let stringHolder = ""
let string = number.toString()
for(i = string.length-1;i >= 0;i--){
stringHolder += string[i]
}
console.log(parseInt(stringHolder))
}
reverseTheNumber(856859)