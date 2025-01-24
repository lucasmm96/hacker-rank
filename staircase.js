const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Type size: ', (size) => {
    staircase(size);
    rl.close();
});

function staircase(size) {
    for (let i = 1; i <= size; i++){
        let text = '';
        for (let j = (size - i); j > 0; j--) text += ' ';
        for (let x = 0; x < i; x++) text += '#';
        console.log(text);
    }
}
