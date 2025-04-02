// Assignment: Create a Function to Count the Occurrences of Each Element in an Array

//     Function Declaration: Define a function named countOccurrences.
//     Parameters: The function should take one parameter, an array of elements.
//     Function Body:
//         Create an empty object to store the counts.
//         Iterate through the array and for each element, update its count in the object.
//     Return: The function should return the object containing the counts of each element.

// Example Usage

//     Call the function with an array of elements, like [1, 2, 2, 3, 3, 3, 4, 4, 4, 4].
//     Print the result to the console, which should show the counts of each element.

// Give it a try and let me know if you have any questions or need further assistance!

let testArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 9, 9, 9, 9];


function countOccurrences(elements) {
    let emptyObject = {};

    for (let item of elements) {

        if (!(item in emptyObject)) {
            emptyObject[item] = 1;
        }
        else {
            emptyObject[item] += 1;
        }
    }

    return emptyObject;
}

function main() {
let hello = countOccurrences(testArray);

console.log(hello);
}

main();