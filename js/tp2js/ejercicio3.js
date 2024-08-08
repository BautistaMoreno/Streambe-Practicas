function fizzBuzz2(palabra1, palabra2, count_until, fizz_num, buzz_num) {
    let output = [];
    for (let i = 1; i <= count_until; i++) {
        if (i % fizz_num === 0 && i % buzz_num === 0) {
            output.push(palabra1 + palabra2);
        } else if (i % fizz_num === 0) {
            output.push(palabra1);
        } else if (i % buzz_num === 0) {
            output.push(palabra2);
        } else {
            output.push(i);
        }
    }
    return output.join(', ');
}

console.log(fizzBuzz2('Fizz', 'Buzz', 30, 2, 5));