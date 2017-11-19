// Dependencies
var prompt = require('prompt');

// Start the prompt
prompt.start();

// Get two numbers from user
prompt.get(['num1', 'num2'], function (err, result) {
    getGreatestCommonFactor(result.num1, result.num2)
});

function getGreatestCommonFactor(num1, num2) {
    console.log("Highest common factor!")
    var gcf = 1;
    for(var i = 1; i < num1 && i < num2; i++) {
        if (num2 % i == 0 && num1 % i == 0) {
            gcf = i;
        }
    }
    
    console.log(`The greatest common factor between ${num1} and ${num2} is ${gcf}`);    
}


