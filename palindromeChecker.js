function palindromeChecker(palindrome){
let palindromeLength = palindrome.length
let reversed = ''
for (i = palindromeLength-1; i >= 0; i--){
    reversed += palindrome[i]
}
reversed == palindrome ? console.log('The word entered is a palindrome!!!') : console.log('The word is not a palindrome!!!')
}
palindromeChecker('nursesrun')