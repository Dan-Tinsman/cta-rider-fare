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
console.log('List them comma separated like so: 1,2,3,0.5,3.14 (Do not include the G).');

let availableGaavo = readlineSync.question('Gaavo Pieces ($G): ');

// Split the available Gaavo pieces into an array
let gaavoStrArr = availableGaavo.split(',');

// Convert the Gaavo string array to a Gaavo number array
let gaavoSortedNumArr;
try {
    gaavoSortedNumArr = convertArrToSortedNumberArr(gaavoStrArr);
} catch (error) {
    console.error(error);
    return;
}

console.log('Let me see if you have enough Gaavo to create ' + fareAmount + '!');
console.log(gaavoSortedNumArr);


/* ---------------- */
/* Functions        */
/* ---------------- */
function findGaavoPieces() {
    // todo
}

/* ---------------- */
/* Helper Functions */
/* ---------------- */

/* Convert array of strings to a array of sorted numbers */
function convertArrToSortedNumberArr(stringArr) {
    var numberArr = [];
    length = stringArr.length;
 
    for (var i = 0; i < length; i++) {

        // Check if string is not a number
        if (isNaN(stringArr[i])){
            throw 'Please only enter numbers!';
        }

        let number = Number(stringArr[i]);

        // Check if string is negagive or 0
        if (Math.sign(number) === -1 || Math.sign(number) === 0){
            throw 'Please only enter positive numbers!';
        }

        numberArr.push(number);
    }
    let sortedArr = numberArr.sort();
    return sortedArr;
}