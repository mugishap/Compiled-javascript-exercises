function findSecond (numbers)
{
    var x;
    var biggest = 0;
    var biggestArray = []
    var smallest = Math.max(...numbers);
    var smallestArray = []
    for (x = 0; x < numbers.length; x++) {
        if (numbers[x] > biggest) {
            biggest = numbers[x]
            biggestArray.unshift(biggest)
        }
        if (numbers[x] < smallest) {
            smallest = numbers[x]
            smallestArray.unshift(smallest)
        }
    }
    console.log(biggestArray);
    console.log(smallestArray);
    console.log(`In array ${numbers} the second biggest is ${biggestArray[1]}`);
}
findSecond([66, 81, 7, 93, 29, 1000])