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
var fareAmount = readlineSync.question('What is the required Fare Amount? ');

// Ask for all of the available Gaavo pieces
console.log('Please list all of the Gaavo Pieces you have available.');
console.log('List them comma separated like so: 1,4,7,3,12');

var availableGaavo = readlineSync.question('Gaavo Pieces ($G): ');

// Split the available Gaavo pieces into an array
var gaavoArr = availableGaavo.split(',');

console.log('Let me see if you have enough Gaavo to create ' + fareAmount + '!');
gaavoArr.forEach(gaavoPiece => {
    console.log(gaavoPiece)
});