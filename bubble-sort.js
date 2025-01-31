function sort (arr) {
    let sorted = false;
    let swaps = 0;

    while (!sorted){
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swaps++;
                sorted = false;
            }
        }
    }

    return { swaps, arr };
}

const input = [ 4, 3, 2, 1];

// console.log(input);

const output = sort(input);

// console.log(output);

console.log('Array is sorted in ', output.swaps, ' swaps.');
console.log('First Element: ', output.arr[0]);
console.log('Last Element: ', output.arr[output.arr.length - 1]);
