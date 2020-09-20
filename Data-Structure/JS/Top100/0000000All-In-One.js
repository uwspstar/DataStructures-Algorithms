const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const sortColor = (arr) => {
    if (arr.length < 2) return arr;
    let p0 = 0;
    let p2 = arr.length - 1;
    let current = 0;
    while (current <= p2) {
        if (arr[current] === 2) {
            swap(arr, current, p2);
            p2--;
        } else if (arr[current] === 0) {
            swap(arr, p0, current);
            p0++;
            current++;
        } else current++;
    }
    return arr;

}
const fibonacci = function (n) {
    let memo = {};
    const fib = (n) => {
        if (n <= 2) return 1;
        if (memo[n] !== undefined) return memo[n];
        return memo[n] = fib(n - 1) + fib(n - 2);

    }
    return fib(n);
}

console.log('fibonacci', fibonacci(45)); //1, 1, 2, 3, 5,..., 1134903170
console.log('sortColor', sortColor([0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]));