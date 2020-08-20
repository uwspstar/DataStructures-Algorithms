// think about how to save space ,
// if n < 2 return n [0,1,1,2,3.....]
// 1, 1, 2, 3, 5
// O(n) time | O(1) space
const fib = (n) => {
    if (n <= 0) return 0;
    if (n <= 2) return 1;

    const lastTwo = [1, 1];
    let counter = 3;
    while (count <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        count++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0]
}

// 1 : regular loop
// time : O(N), space: O(N)
const fibonacciRegular = function (n) {
    if (n <= 2) return 1;
    let result = [1, 1];
    for (let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n - 1];
}

// 2 : recursive
const fibonacciMemo = function (n) {
    let memo = {}; // or memo with Map
    const fibonacciMemo = function (n) {
        if (n < 3) return 1;
        if (memo[n] !== undefined) return memo[n];
        return memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);

    }
    return fibonacciMemo(n);
}


// 3: recursive , no memo
const fibonacciNoMemo = function (n) {
    if (n < 3) return 1;
    return result = fibonacciNoMemo(n - 1) + fibonacciNoMemo(n - 2);
}

//console.log(fibonacci2(40));
//console.log(fibonacci2(45)); // 1134903170  very slow
//console.log(fibonacciRecursive(7)); // [1, 1, 2, 3, 5, 8, 13]


//console.log(fibonacci(40));//102334155
//console.log(fibonacci(1000));//4.346655768693743e+208  very fast

// time and space
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
console.log(fibonacciSpace(4))

// this is swap
// a, b   order is important
// a = a + b
// b = a - b
// a = a - b

