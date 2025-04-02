
// ### Assignment: Create a Function to Find the Second Largest Number in an Array

// 1. **Function Declaration**: Define a function named `findSecondLargest`.
// 2. **Parameters**: The function should take one parameter, an array of numbers.
// 3. **Function Body**:
//    - Initialize two variables to store the largest and second largest numbers.
//    - Iterate through the array to find the largest and second largest numbers.
// 4. **Return**: The function should return the second largest number.

// ### Example Usage
// - Call the function with an array of numbers, like `[10, 5, 8, 12, 7, 6]`.
// - Print the result to the console, which should show the second largest number.

let numberList = [10, 5, 8, 12, 7, 6];

function findSecondLargest(arrayOfNumberss, smallest = false) {
    var returnValue;
    var largestNumber = -Infinity;
    var smallestNumber = Infinity;
    var secondLargestNumber = -Infinity;

    if (!smallest) {
        for (let number of arrayOfNumberss) {

            if (number > largestNumber) {
                secondLargestNumber = largestNumber; // The larges number is now the second largest so update that. 
                largestNumber = number;
            }
            else if (number > secondLargestNumber && number < largestNumber) // If the number is smaller that the largest but larger that the second Largest, then update Second Large
            {
                secondLargestNumber = number;
            }
        }
        returnValue = secondLargestNumber;
    }
    if (smallest) { // if param set to true, find the smallest number.
        for (let number of arrayOfNumberss) {
            if (number < smallestNumber) {
                smallestNumber = number;
            }
        }
        returnValue = smallestNumber;
    }

    return returnValue;
}


let script = "The second largest Number in your array is: "


console.log('\n' + script + ' ' + findSecondLargest(numberList) + '\n');

script = "The smallest Number in your array is: "
console.log('\n' + script + ' ' + findSecondLargest(numberList, smallest = true) + '\n');


