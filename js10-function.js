function factorial(number) {
    let factorial = number;
    for(let n = (number - 1); n >= 1; n--) factorial *= n;
    console.log(factorial);   
}

factorial(4);
