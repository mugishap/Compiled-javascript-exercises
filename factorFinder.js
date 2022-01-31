function factorFinder(number) {
    let factorHolder = []
    for (i = 0; i <= number; i++) {
        if (number % i == 0) {
            factorHolder.push(i)
        }

    }
    console.log(factorHolder)
}
factorFinder(45)