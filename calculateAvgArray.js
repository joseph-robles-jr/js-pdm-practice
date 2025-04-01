let numbers = [0, 1, 1, 8, 9, 9, 9, 8, 8, 9, 9, 1, 9, 1, 1, 9, 7, 2, 5, 3];


function findAvg(numbers) {
    let sumOfArray = 0;
    for (item in numbers) {
        sumOfArray = sumOfArray + numbers[item]; // Item is just an index, not the actual value. 
        console.log("Item# " + item + " = " + numbers[item]); // shows index and value. 
    }
    let average = sumOfArray / numbers.length;
    console.log("The average of the list is: " + average);
}

findAvg(numbers)