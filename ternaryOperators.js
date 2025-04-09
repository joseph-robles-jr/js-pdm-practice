let hello = false; //This is a boolian (True or False value). Here, we set it to equal "false".

let waesaw
function evalHello(){
let evalHelloResults = (hello ? 'Hello, Frind!' : 'Go Away! I do not know you!');
// Here we check the value of "hello". The "?" is the ternary operator. 
// The ternary operator allows us to specify a response value based on if "hello" is "True" or "False".
// The first value after the "?" is what we do if "hello" evaluates to "true".
// The second value "Go Away! I do not know you!" will be the response if "hello" evaluates to "true".


console.log(evalHelloResults); // Now we print the response to the console. 
}


function NullCheck() {

let userInput; //Is a null value.  

// Null coalescing operator - a backup if a value is empty 
let userOutput = userInput ?? "Unknown User";  // Uses "Unknown Wanderer" if adventurerInput is null
console.log("Input: " + userInput + "\nOutput: " + userOutput);
}

function checkIfExists() {
    // Optional chaining
    
    let hello = {"world" : ["This is value Zero", "This is value One", "This is value Two"]}

    

let helloExists = hello?.world?.firstElement;  // Won't crash if dragon or vulnerabilities doesn't exist

console.log(helloExists);
}



console.log(`\n`) //This prints a blank line

evalHello(); // we set the hello variable to "false" at the start of the program. This causes the false option to print.

console.log(`\n`)

evalHello(hello=true); // we now set the value to "true". This causes the true option (option 2) to print.


console.log(`\n`)//This prints a blank line

NullCheck();

checkIfExists();