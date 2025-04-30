function myFibonacci(numbersToReturn) {
    let firstNumber = 0;
    let secondNumber = 1
    let arrayOfResults = [firstNumber, secondNumber];

    for (let i = arrayOfResults.length; i < numbersToReturn; i++) {
        let nextNumber = firstNumber + secondNumber;

        arrayOfResults[i] = nextNumber;

        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }

    return arrayOfResults;
}


function main() {
    const result = myFibonacci(12)
    for (item in result) {
        console.log(`myFibonacci[${item}] : ${result[item]}`);
    }
}


main();
