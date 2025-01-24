function miniMaxSum(arr) {
    let leftSum = 0;
    let rightSum = 0;
    arr.sort((a, b) => a -b);
    for (let i = 0; i < 4; i++) leftSum += arr[i];
    for (let i = 4; i > 0; i--) rightSum += arr[i];
    console.log(`${leftSum} ${rightSum}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([7, 69, 2, 221, 8974]);
miniMaxSum([2, 7, 69, 221, 8974]);



