function exponent(base, exponent){
    let counter = 1
for(i = 1;i <= exponent;i++){
    counter *= base
}
console.log(counter)
}
exponent(5,3)