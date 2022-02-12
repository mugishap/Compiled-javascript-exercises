function stringCombinationGenerator(word) {
    let combinations = []
    for (i = 0; i < word.length; i++) {
        for (let j = i+1; j < word.length+1; j++) {
            combinations.push(word.slice(i, j))

        }
    }
    console.log(combinations.join(','))
}
stringCombinationGenerator('dog')