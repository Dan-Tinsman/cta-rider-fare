var readlineSync = require('readline-sync'); // package recommended from here: https://nodejs.dev/en/learn/accept-input-from-the-command-line-in-nodejs/

/**
 *  Requirements: 
 *  1. Collect the fare amount riders are trying to make
 *  2. Collect all of the Gaavo pieces they have
 *  3. Tell the rider the exact combinations of Gaavo pieces that will match the fare,
 *     or 
 *     Tell the rider there is no possible combination that will work
 **/

/**
 *  Notes: 
 *  - No assumptions about what currency denominations exist
 **/


// Ask for the fare
let fareAmount = readlineSync.questionFloat('What is the required Fare Amount? ');

// Ask for all of the available Gaavo pieces
console.log('Please list all of the Gaavo Pieces you have available.');
console.log('List them comma separated like so: 1,4,7,3,12');

let availableGaavo = readlineSync.question('Gaavo Pieces ($G): ');

// Split the available Gaavo pieces into an array
let gaavoStrArr = availableGaavo.split(',');

// Convert the Gaavo string array to a Gaavo number array
try {
    let gaavoNumArr = convertArrToNumbers(gaavoStrArr);
    console.log(gaavoNumArr);
} catch (error) {
    console.error(error);
}

console.log('Let me see if you have enough Gaavo to create ' + fareAmount + '!');


/* ---------------- */
/* Helper Functions */
/* ---------------- */

/* Convert array of strings to array of numbers */
function convertArrToNumbers(stringArr) {
    var numberArr = [];
    length = stringArr.length;
 
    for (var i = 0; i < length; i++) {
        if (isNaN(stringArr[i])){
            throw 'Please only enter numbers!';
        }
        numberArr.push(Number(stringArr[i]));
    }
    return numberArr;
}