var readlineSync = require('readline-sync'); 

var name = readlineSync.question('What is your name? ');
console.log("Hello, ", name);