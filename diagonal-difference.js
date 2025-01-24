'use strict';

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let size = inputString[0], sum_left = 0, sum_right = 0;

    for (let left = 0, right = (size - 1); left < size && right >= 0; left++, right--) {
        sum_left += arr[left][left];
        sum_right += arr[left][right];
    }

    return Math.abs(sum_left - sum_right)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);
    console.log(result);
}

// Test data
const inputString = [
    '3',
    '11 2 4',
    '4 5 6',
    '10 8 -12'
];

let currentLine = 0;

main();
