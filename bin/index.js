var readlineSync = require('readline-sync'); // package recommended from here: https://nodejs.dev/en/learn/accept-input-from-the-command-line-in-nodejs/

/**
 *  Requirements: 
 *  1. Collect the fare amount riders are trying to make
 *  2. Collect all of the Gaavo pieces they have
 *  3. Tell the rider the exact combinations of Gaavo pieces that will match the fare,
 *     or 
 *     Tell the rider there is no possible combination that will work
 **/

// TODO:
// - check for negative numbers on fareAmount input


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

console.log('Let me see if you have enough Gaavo to create ' + fareAmount + '...');
let answer = findGaavoPieces(gaavoSortedNumArr, fareAmount);

if (answer.length === 0){
    console.log("You do not have the correct Gaavo pieces to pay this fare.")
} else {
    console.log("You can use the following Gaavo Pieces to pay this fare: ", answer);
}



/* ---------------- */
/* Functions        */
/* ---------------- */
function findGaavoPieces(gaavoPieces, fareAmount) {
    let slicedArr = sliceArr(gaavoPieces, fareAmount);
    
    let answer = [];

    // check to see if we can find the exact Gaavo piece for the fare
    let onePieceAnswer = slicedArr.find(piece => piece === fareAmount);
    if (onePieceAnswer !== undefined) {
        answer.push(onePieceAnswer);
    }

    return answer;
}

/* ---------------- */
/* Helper Functions */
/* ---------------- */

/* Slice Array if any element in gaavoPieces > fareAmount */
function sliceArr(gaavoPieces, fareAmount) {
    const spliceCondition = (fare) => fare > fareAmount;
    let sliceIndex = gaavoPieces.findIndex(spliceCondition);
    return gaavoPieces.slice(0, sliceIndex);
}

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