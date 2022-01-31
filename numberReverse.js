function numberReverse(number) {
   let stringHolder = number.toString()
   let reversedString = ''
   for (i = stringHolder.length-1;i < stringHolder.length; i--){
reversedString += stringHolder[i]
   }
  let reversedNumber = reversedString.parseInt()
   console.log(reversedNumber)
}
numberReverse(12345)