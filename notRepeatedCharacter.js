function nonReapeatedCharacter(string){
    let character = ''
    for(i = 0; i<string.length;i++){
        for(j = string[i+1];j<string.length;j++){
            if(string[i] !== string[j]){
            character = string[i]
            }
        }
    }
    console.log(character)
}
nonReapeatedCharacter('abacddbec')
