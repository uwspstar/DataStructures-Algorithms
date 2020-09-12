/*
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/

function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

function power(n, p) {
    if (p === 0) return 1;
    if (p === 1) return n;
    if (n <= 1) return n;
    return n * power(n, p - 1)
}
//base, exponent
console.log('power', power(2, 2)); // 4
console.log('power', power(3, 3)); // 27

