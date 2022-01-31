let holder = []
function capitalize(sentence) {
    let separateWord = sentence.split(' ')
    for (i = 0; i < separateWord.length; i++) {
        let firstLetter = separateWord[i][0]
        let newWord = separateWord[i].replace(firstLetter, firstLetter.toUpperCase())
        holder.push(newWord)
    }
    console.log(holder.join(' '))
}
capitalize('the big brown fox')