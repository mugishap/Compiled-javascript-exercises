function longestCountryName(countries){
    let country = ''
    for(i = 0;i< countries.length;i++){
        if(countries[i].length > countries[i+1] && countries[i-1]){
            console.log(countries[i])
        }

        // for(j = 0;j<country[i].length;j++){
        //     if(countries[i][j] > )
        // }
    } 
}
longestCountryName(["Australia", "Germany", "United States of America"])