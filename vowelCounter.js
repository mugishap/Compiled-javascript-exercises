function vowelCount(sentence){
    let vowels = ['a','e','i','o','u'];
let count = 0
for(i = 0;i < sentence.length;i++){
    for (let j = 0; j < vowels.length; j++) {
        if(sentence[i] == vowels[j]){
            count++
        }
    }
}
console.log("the number of vowels is: " + count)
}
vowelCount('the quick brown fox')