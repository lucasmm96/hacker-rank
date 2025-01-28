/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
    const extractedVowels = [];
    const extractedConsonants = [];

    for (let char of s) vowels.includes(char) ? extractedVowels.push(char) : extractedConsonants.push(char);
    
    [ ...extractedVowels, ...extractedConsonants].forEach(item => console.log(item))
}

vowelsAndConsonants('javascriptloops');
