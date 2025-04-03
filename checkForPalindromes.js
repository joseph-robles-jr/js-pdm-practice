// Assignment 3: Create a Function to Check for Palindromes
// Function Declaration: Define a function named isPalindrome.

// Parameters: The function should take one parameter, a string.

// Function Body:

// Convert the string to lowercase to ensure the check is case-insensitive.
// Remove any non-alphanumeric characters from the string.
// Reverse the cleaned string.
// Compare the cleaned string with its reversed version.
// Return: The function should return true if the string is a palindrome, and false otherwise.

// Example Usage:

// Call the function with a string, like "A man, a plan, a canal, Panama!".
// // Print the result to the console, which should show true.

const panamaString = "A man, a plan, a canal, Panama!";

function isPalindrome(string) {
    let lowerString = string.toLowerCase();
    let returnMe;


    let strippedString = '';
    for (let char of lowerString) {
        if (/[a-zA-Z]/.test(char)) {
            strippedString += char;
        }
    }

    let reversedString = strippedString.split('').reverse().join('');  //Uses previously Built module

    if (strippedString === reversedString) {
        returnMe = true;
    }
    else {
        returnMe = false
    }

    return returnMe;
}

console.log(`Check One: ${panamaString}`)
console.log(isPalindrome(panamaString));

console.log(`Check Two: logs of wood`)
console.log(isPalindrome("logs of wood"));
