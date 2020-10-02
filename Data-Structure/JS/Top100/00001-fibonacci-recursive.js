// think about how to save space ,
// if n < 2 return n [0,1,1,2,3.....]
// 1, 1, 2, 3, 5
// O(n) time | O(1) space
const fib1 = (n) => {
    if (n <= 0) return 0;
    if (n <= 2) return 1;

    const lastTwo = [1, 1];
    let count = 3;
    while (count <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        count++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0]
}

const fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 2) + fib(n - 1);
}
// 1 : regular loop
// time : O(N), space: O(N)
const fibonacciRegular = function (n) {
    if (n <= 2) return 1;
    let result = [1, 1];
    for (let i = 2; i < n; i++) {  // not use for (let i = n; i <= 2; i--) 
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n - 1];
}

// 2 : recursive
const fibonacciMemo1 = function (n) {
    let memo = {}; // or memo with Map
    const fibonacciMemo = function (n) {
        //since recursive does not use loop, need to put the loop condition outside
        if (n < 3) return 1;
        if (memo[n] !== undefined) return memo[n];
        return memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
    }
    return fibonacciMemo(n);
}
const fibonacciMemo = n => {
    let memo = {};
    const fib = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (memo[n] !== undefined) return memo[n];
        return memo[n] = fib(n - 1) + fib(n - 2);
    }
    return fib(n);
}

// 3: recursive , no memo
const fibonacciNoMemo = function (n) {
    //since recursive does not use loop, need to put the loop condition outside
    if (n < 3) return 1;
    return result = fibonacciNoMemo(n - 1) + fibonacciNoMemo(n - 2);
}

// time and space : keep in mind
// 1, 1, 2, 3
const fibonacciSpace = n => {
    if (n < 3) return 1;
    let result = [1, 1];
    //let nextFib;
    for (let i = 2; i < n; i++) {
        nextFib = result[0] + result[1];
        result[0] = result[1]
        result[1] = nextFib;
    }
    return result[1];

}

const fibonacci = n => {
    let memo = {};
    const fib = n => {
        return n < 3 ? 1
            : (memo[n] !== undefined) ? memo[n]
                : memo[n] = fib(n - 1) + fib(n - 2);
    }
    return fib(n);
}

//console.log('fib', fib(45))// 1134903170 //very slow
console.log('fibonacciMemo', fibonacciMemo(45))// 1134903170
//console.log(fibonacci2(40));
//console.log(fibonacci2(45)); // 1134903170  very slow
//console.log(fibonacciRecursive(7)); // [1, 1, 2, 3, 5, 8, 13]


//console.log(fibonacci(40));//102334155
//console.log(fibonacci(1000));//4.346655768693743e+208  very fast

//console.log(fibonacciSpace(4))

// this is swap
// a, b   order is important
// a = a + b
// b = a - b
// a = a - b

// https://wangdoc.com/es6/function.html#%E5%B0%BE%E9%80%92%E5%BD%92

//非尾递归的 Fibonacci 数列实现如下。

function Fibonacci(n) {
    if (n <= 1) { return 1 };

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

Fibonacci(10) // 89
Fibonacci(100) // 超时
Fibonacci(500) // 超时

//尾递归优化过的 Fibonacci 数列实现如下。

function Fibonacci2(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) { return ac2 };

    return Fibonacci2(n - 1, ac2, ac1 + ac2);
}

/*

Fibonacci2(100) // 573147844013817200000
Fibonacci2(1000) // 7.0330367711422765e+208
Fibonacci2(10000) // Infinity

由此可见，“尾调用优化”对递归操作意义重大

*/