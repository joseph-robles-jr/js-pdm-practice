// Assignment: Create a Function to Reverse a String

// Function Declaration: Define a function named reverseString.
// Parameters: The function should take one parameter, a string.
// Function Body:
// Initialize an empty string to store the reversed string.
// Iterate through the original string from the end to the beginning.
// Append each character to the empty string.
// Return: The function should return the reversed string.
// Example Usage
// Call the function with a string, like "hello world".
// Print the result to the console, which should show the reversed string.

function stringReverser(string) {
    let i = 0;
    let stringLength = string.length - 1; //to be used for the index
    let revArray = [];

    for (item of string) {

        revArray[stringLength - i] = item;
        i++;
    }
    let finalString = revArray.join('');

    return finalString;
}

function stringReverserMethods(string) {
    return string.split('').reverse().join('');  //Uses Build-in methods
}

console.log(stringReverser("Hello World"));

console.log(stringReverserMethods("Hello World"));