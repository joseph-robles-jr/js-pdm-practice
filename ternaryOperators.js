// This is a boolean (True or False value). Here, we set it to equal "false".
let hello = false;

// Function to evaluate the value of "hello" and print the appropriate response
function evalHello() {
    // The ternary operator allows us to specify a response value based on if "hello" is "True" or "False".
    let evalHelloResults = hello ? 'Hello, Friend!' : 'Go Away! I do not know you!';
    console.log(evalHelloResults); // Print the response to the console
}

// Function to check for null values and provide a default response
function NullCheck() {
    let userInput; // Is a null value
    // Null coalescing operator - a backup if a value is empty
    let userOutput = userInput ?? "Unknown User"; // Uses "Unknown User" if userInput is null
    console.log("Input: " + userInput + "\nOutput: " + userOutput);
}

// Function to check if a property exists using optional chaining
function checkIfExists() {
    let hello = {
        "world": ["This is value Zero", "This is value One", "This is value Two"]
    };
    let helloExists = hello?.world?.firstElement; // Won't crash if hello or world doesn't exist
    console.log(helloExists);
}

// Print a blank line
console.log('\n');

// Evaluate "hello" with its initial value (false)
evalHello();

// Print a blank line
console.log('\n');

// Evaluate "hello" with its value set to true
hello = true;
evalHello();

// Print a blank line
console.log('\n');

// Perform null check
NullCheck();

// Check if property exists
checkIfExists();
