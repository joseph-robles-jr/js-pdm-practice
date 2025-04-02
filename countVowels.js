// Assignment 2: Create a Function to Count Vowels in a String
// Function Declaration: Define a function named countVowels.

// Parameters: The function should take one parameter, a string.

// Function Body:

// Initialize a counter to zero.
// Iterate through the string and check each character.
// If the character is a vowel (a, e, i, o, u), increment the counter.
// Return: The function should return the total count of vowels in the string.

// Example Usage:

// Call the function with a string, like "hello world".
// Print the result to the console, which should show the number of vowels.

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci tortor, vulputate eget venenatis vel, convallis in nisi. Mauris sollicitudin consectetur convallis. Morbi ac turpis sodales, faucibus lectus nec, vulputate elit. Proin id leo eros. Sed eu nisi viverra nunc aliquam tempus. Aenean nunc ante, suscipit vehicula tristique eget, gravida id libero. Sed sagittis nisi vel dapibus suscipit. Suspendisse bibendum magna volutpat imperdiet pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim nunc. Nullam sit amet sodales elit, quis tristique augue. Donec sodales pharetra est, quis dictum ex accumsan vel. Mauris sit amet sem leo. Nam blandit, elit sodales commodo porta, ligula justo eleifend nisl, ut accumsan ante arcu sed ligula. Suspendisse a quam suscipit, pellentesque metus ac, cursus ipsum. Duis vitae sem sit amet orci venenatis hendrerit. Vivamus nec euismod neque. Sed mattis tristique justo, vehicula tincidunt nulla aliquam nec. Etiam sit amet commodo nibh, in blandit nisl. Donec et scelerisque eros, eu tincidunt erat. Phasellus justo augue, porta sit amet lectus quis, placerat commodo tellus. Quisque odio lacus, vehicula ac orci ut, faucibus ultrices lorem. Nunc varius pulvinar odio a lacinia. Proin et justo quam. Duis vulputate ante at sagittis scelerisque. Integer ultrices imperdiet lobortis.'


function countVowels(string) {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    let numberOfVowelsCounter = 0;
    for (letter of string) {
        if (vowels.includes(letter)) {
            numberOfVowelsCounter += 1;
        }
    }
    return numberOfVowelsCounter;
}

console.log(countVowels(lorem));