let numbers = [0, 1, 1, 8, 9, 9, 9, 8, 8, 9, 9, 1, 9, 1, 1, 9, 7, 2, 5, 3];


function findAvg(numbers) { // better suited for objects.
    let sumOfArray = 0;
    for (item in numbers) {
        sumOfArray = sumOfArray + numbers[item]; // Item is just an index, not the actual value. 
        console.log("Item# " + item + " = " + numbers[item]); // shows index and value. 
    }
    let average = sumOfArray / numbers.length;
    console.log("The average of the list is: " + average + '\n');
}


function findAvgSimple(numbers) { //better suited for arrays, and lists. 
    let sumOfArray = 0;
    for (item of numbers) {
        sumOfArray = sumOfArray + item; // This has the ACTUAL value of an item in the array . 
        console.log("Item = " + item); // shows index and value. 
    }
    let average = sumOfArray / numbers.length;
    console.log("The average of the list is: " + average + '\n');

}

function main() {
    console.log("The original way (Best for objects, not arrays)");
    findAvg(numbers);

    console.log("The New Way (for arrays and lists)");
    findAvgSimple(numbers);

}

main();