function lowestAndGreatest(numbers){
    let secondlargest = numbers.sort()[1]
    let secondSmallest = numbers.sort().reverse()[1]
     console.log('Second smallest is '+ secondSmallest +' while second largest is ' + secondlargest)
}
lowestAndGreatest([2,1,4,5,6,3])