const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function checkOddEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} is an Even number.`);
    } else {
        console.log(`${number} is an Odd number.`);
    }
}
function startREPI() {
    rl.question('Enter a number (or type "exit" to quit): ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Exiting the program. Goodbye!');
            rl.close();
            return;
        }
        const number = parseFloat(input);
        if (!isNaN(number)) {
            checkOddEven(number);
        } else {
            console.log('Please enter a valid number.');
        }
        startREPI();
    });
}
startREPI();