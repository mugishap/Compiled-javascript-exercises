function vowelCount(sentence){
    let vowels = ['a','e','i','o','u'];
    let count = 0
for(i = 0; i < sentence.length;i++){
    for(j = 0;j <= vowels.length;j++){
 let position = vowels[j]
 if(sentence[i] == position) {count++}
    }
    
}
console.log('The number of vowels is: '+count)
}
vowelCount('the quick brown fox')