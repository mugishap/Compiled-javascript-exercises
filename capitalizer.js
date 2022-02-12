function capitalize(sentence){
let holder = []
let splittedWord = sentence.split(' ')
for (let i = 0; i < splittedWord.length; i++) {
    let firstLetter = splittedWord[i][0]
 let newWords  =  splittedWord[i].replace(firstLetter,firstLetter.toUpperCase())
holder.push(newWords)
}
console.log(holder.join(' '))
}
capitalize('the big box')
