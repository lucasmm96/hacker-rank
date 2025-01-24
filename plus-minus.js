'use strict';

let inputString = [
    '6',
    '-4, 3, -9, 0, 4, 1'
];
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let negative = 0, zero = 0, positive = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) negative++;
        else if (arr[i] == 0) zero++;
        else positive++;
    }

    const positiveRatio = (positive / arr.length).toFixed(6);
    const negativeRatio = (negative / arr.length).toFixed(6);
    const zeroRatio = (zero / arr.length).toFixed(6);

    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);  
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

main();
