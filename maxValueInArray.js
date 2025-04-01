let numbers = [0, 1, 1, 8, 9, 9, 9, 8, 8, 9, 9, 1, 9, 1, 1, 9, 7, 2, 5, 3];


function findMaxValue(arrayOfNumbers){
    var maxValue = 0;
    for (number of arrayOfNumbers){
        if (maxValue < number) {
            maxValue = number;
            console.log("new Max")
        }
    }
    
    return maxValue;
}

let maxValueOfNum = findMaxValue(numbers);

console.log("The Maximum Value is " + maxValueOfNum );