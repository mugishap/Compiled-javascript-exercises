
function reverseAndFilter() {
   let button = document.querySelector('#go-btn')
   let phrase = document.querySelector('#phrase').value
   let filter = document.querySelector('#filter').value
   let newPhrase = []
   let splittedWords = phrase.split(' ')
   for (let i = splittedWords.length - 1; i >= 0; i--) {
      newPhrase.push(splittedWords[i])
      let outputText = document.createTextNode(newPhrase.join(' '))
      let output = document.createElement('p').appendChild(outputText)
      document.querySelector('#result').appendChild(output)

   }

}
