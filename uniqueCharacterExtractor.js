function characterExtractor(string) {
  let holder = []
    for (i = 0; i < string.length; i++) {
           for(j = i+1;j < string.length;j++){
            if(string[i] == string[j]){holder.push(string[j])}
           } 
        }
    }
    console.log(holder.join())
characterExtractor('the quick brown fox jumps over the lazy dog')