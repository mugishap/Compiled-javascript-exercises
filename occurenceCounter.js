function occurenceCounter(sentence, letter) {
    let counter = 0
    for (i = 0; i < sentence.length; i++) {
        if (sentence[i] == letter) {
            counter++
        }
    }
    console.log(counter)
}
occurenceCounter('rwanda coding academy', 'a')