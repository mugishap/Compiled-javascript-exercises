function stringCombinationGenerator(word){
    let newWord =''
    let combinations = []
    for( i = 0; i < word.length;i++){
        for(j = word[i]+1 ;j <= word-word[i];j++){
            combinations.push(word[j])
        }
    }
    console.log(combinations.join(','))
}
stringCombinationGenerator('dog')