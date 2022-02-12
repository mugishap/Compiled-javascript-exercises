function palindromeChecker(word){
    let reversedWord = ""
    for(i = word.length-1;i >=0;i--){
reversedWord += word[i]
    }
    reversedWord == word?console.log("Word is a palindrome"):console.log("Word is not a palindrome")
}
palindromeChecker("precieux")