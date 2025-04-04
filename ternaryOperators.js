let hello = false; //This is a boolian (True or False value). Here, we set it to equal "false".

function evalHello(){
let evalHelloResults = (hello ? 'Hello, Frind!' : 'Go Away! I do not know you!');
// Here we check the value of "hello". The "?" is the ternary operator. 
// The ternary operator allows us to specify a response value based on if "hello" is "True" or "False".
// The first value after the "?" is what we do if "hello" evaluates to "true".
// The second value "Go Away! I do not know you!" will be the response if "hello" evaluates to "true".

console.log(evalHelloResults); // Now we print the response to the console. 
}

console.log(`\n`) //This prints a blank line

evalHello(); // we set the hello variable to "false" at the start of the program. This causes the false option to print.

console.log(`\n`)

evalHello(hello=true); // we now set the value to "true". This causes the true option (option 2) to print.


console.log(`\n`)//This prints a blank line