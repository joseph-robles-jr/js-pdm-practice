const readline = require('readline');


// ----------- Fibonacci Functions ------ 
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


function recursiveFibonacci(numbersToReturn) {
    // This is an inefficeient program. 
    let FibonacciSequence = [];

    for (let i = 0; i < numbersToReturn; i++) {
        FibonacciSequence.push(recursiveFibonacciWorker(i));
    }

    return FibonacciSequence;

}

function recursiveFibonacciWorker(n) {
    if (n <= 1) {
        return n;
    }

    return recursiveFibonacciWorker(n - 1) + recursiveFibonacciWorker(n - 2);
}

// ------------ Bubble Sort -----------
arrayForSorting = [100, 64, 34, 25, 12, 22, 11, 90, 110, 3, 14, 12, 15, 37, 38];

function bubbleSort(array) {
    n = array.length;
    let swapped;
    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return array;
}




// ------------- Menu Functions ------------ 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function displayMenu() {
    console.log('Choose an option:');
    console.log('1. Generate Fibonacci Sequence with myFibonacci');
    console.log('2. Generate Fibonacci Sequence with recursiveFibonacci (Slow)');
    console.log('3. Sort an Array using Bubble Sort');
    console.log('x. Exit');
}


function handleUserInput() {
    rl.question('Enter your choice: ', (choice) => {
        switch (choice) {
            case '1':
                rl.question('Enter the number of Fibonacci numbers to generate: ', (num) => {
                    const result = myFibonacci(parseInt(num));
                    for (item in result) {
                        console.log(`myFibonacci[${item}] : ${result[item]}`);
                    }
                    displayMenu();
                    handleUserInput();
                });
                break;
            case '2':
                rl.question('Enter the number of Fibonacci numbers to generate: ', (num) => {
                    result = recursiveFibonacci(parseInt(num));
                    for (item in result) {
                        console.log(`recursiveFibonacci[${item}] : ${result[item]}`);
                    }
                    displayMenu();
                    handleUserInput();
                });


            case '3':
                rl.question('Enter the array to sort (comma-separated values): ', (input) => {
                    const arr = input.split(',').map(Number);
                    const sortedArray = bubbleSort(arr);
                    console.log('Sorted Array:', sortedArray);
                    displayMenu();
                    handleUserInput();
                });
                break;
            case 'x':
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please try again.');
                displayMenu();
                handleUserInput();
                break;
        }
    });
}

// Start the menu
function main() {
    displayMenu();
    handleUserInput();
}

main()