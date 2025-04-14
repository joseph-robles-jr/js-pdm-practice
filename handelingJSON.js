const fs = require('fs');

const jsonData = require(`./handelingJSONdata.json`)

function forLoop(ourInput) {
    let i = 1;
    let output = 'Index, Sub-Index, Key, Value\n';

    for (item of ourInput.Employee_Info) {
        let l = 1
        for (key in item) {
            let formatedI = String(i).padStart(7,'0'); //formats w/ 7 digits always for cleaner output.
            output += `${formatedI} , ${l} : ${key} : ${item[key]}`;
            l++;
        }
        output += `\n`;
        i++
    }
    output += `Parsing Complete for ${i - 1} objects.`
    return output;
}


function main() {
    let results = forLoop(jsonData);
    fs.writeFileSync('results.txt', results);
}

main();