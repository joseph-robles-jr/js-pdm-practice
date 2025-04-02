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

let testArray = [1, 2, 2, 7, 37, 300, 4, 4, 4, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 9, 9, 9, 9];
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci tortor, vulputate eget venenatis vel, convallis in nisi. Mauris sollicitudin consectetur convallis. Morbi ac turpis sodales, faucibus lectus nec, vulputate elit. Proin id leo eros. Sed eu nisi viverra nunc aliquam tempus. Aenean nunc ante, suscipit vehicula tristique eget, gravida id libero. Sed sagittis nisi vel dapibus suscipit. Suspendisse bibendum magna volutpat imperdiet pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim nunc. Nullam sit amet sodales elit, quis tristique augue. Donec sodales pharetra est, quis dictum ex accumsan vel. Mauris sit amet sem leo. Nam blandit, elit sodales commodo porta, ligula justo eleifend nisl, ut accumsan ante arcu sed ligula. Suspendisse a quam suscipit, pellentesque metus ac, cursus ipsum. Duis vitae sem sit amet orci venenatis hendrerit. Vivamus nec euismod neque. Sed mattis tristique justo, vehicula tincidunt nulla aliquam nec. Etiam sit amet commodo nibh, in blandit nisl. Donec et scelerisque eros, eu tincidunt erat. Phasellus justo augue, porta sit amet lectus quis, placerat commodo tellus. Quisque odio lacus, vehicula ac orci ut, faucibus ultrices lorem. Nunc varius pulvinar odio a lacinia. Proin et justo quam. Duis vulputate ante at sagittis scelerisque. Integer ultrices imperdiet lobortis.'


function countOccurrences(elements) {
    let storeCountObject = {};

    for (let item of elements) {

        if (!(item in storeCountObject)) {
            storeCountObject[item] = 1;
        }
        else {
            storeCountObject[item] += 1;
        }
    }

    let concatCountOutput = '';
    for (let item in storeCountObject) {
        concatCountOutput += `${item} : ${storeCountObject[item]}, `;
    }

    return concatCountOutput;
}

function main() {
    let numberCount = countOccurrences(testArray);
    let loremCount = countOccurrences(lorem);


    console.log(`Number Count: ${numberCount}\n\n`);
   

    console.log(`Lorem Ipsum Count: ${loremCount}`);
    
}


main();