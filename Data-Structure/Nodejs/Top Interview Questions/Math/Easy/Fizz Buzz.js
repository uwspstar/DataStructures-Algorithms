var fizzBuzz = function (n) {

    if (n === 0) return ['0'];
    if (n === 1) return ['1'];

    const result = [];

    for (let i = 1; i <= n; i++) {

        if (i % 15 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i + '');
        }

    }
    return result;

};