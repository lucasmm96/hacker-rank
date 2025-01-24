'use strict';

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    const max = Math.max(...candles);
    let counter = 0;

    candles.forEach(item => {
        if (item === max) counter++;   
    });
    
    return counter;
}

function main() {
    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    console.log(result);
}

// Test data
const inputString = [
    '1',
    '3 2 1 3 4'
];

let currentLine = 0;

main();