function lonelyinteger(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lonely = true;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) if (arr[i] === arr[j]) lonely = false;
        }
        if (lonely) return arr[i];
    }
}

let input = [ 0, 1, 0, 2, 1 ];

let output = lonelyinteger(input);

console.log(output);
