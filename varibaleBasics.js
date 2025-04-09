// A variable is a way to store date. 
// JS has several ways to store data in variables. 

// let is how we declare most variables.

let yourName = "John Smith" //This is a string. 
let isAlive = true; //This is a bool. True or False.
let thisIsANumber = 123456789;

// we can change let and var variables
yourName = "John Doe"



// We can make a constant value (It does not change).
const hello = "Hello Mister " + yourName;

// This is an Array. It can store multiple values. Arrays start at 0.
let stuffInMyBackpacks = ["Notebook", "Calculator", "Pens", "Pencil"]; 

// To read the \"Pens\" value from our array, we would run the following: 
// Pens is the THIRD value in the array, so it is at position 2 (Positions start at 0).
console.log(stuffInMyBackpacks[2]); 

// This is a map. It is a collection of organized data.
let yourData = {
    'name': yourName,
    'Age': 24,
    'Home Town': 'Washington D.C., USA.',
    'Favorite Pizza Toppings': ['Cheese', 'Peperoni', 'Pineapple', 'Bacon']
}

// We can access this data with the name of it's "key" ("key" : "Value")
console.log(yourData["Home Town"]); // This will give us the value of "Washington D.C., USA"





function PrintTheVariables() {
    // In these lines of code, we will be "Printing" the values stored in our variables. 
    console.log("The value in yourName: " + yourName);
    console.log("The value in hello: " + hello);
}

PrintTheVariables();