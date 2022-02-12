function alphabeticalSort(word) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let arranged = ""
for (let i = 0; i < letters.length; i++) {
for (let j = 0; j < word.length; j++) {
    if(letters[i] == word[j]){arranged += word[j]}
}    
}
console.log(arranged)
}
alphabeticalSort('webmaster')