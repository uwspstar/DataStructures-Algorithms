const arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const reverseInteger = (num) => {
    if (num >= -9 && num <= 0) return num;
    let negative = -1;
    num > 0 ? negative = 1 : num = num * (-1);
    // 321
    let result = 0;
    while (num) {
        result = result * 10 + num % 10;
        num = parseInt(num / 10);
    }
    return negative * result;

}
const buySellStock1 = (arr) => {
    if (arr.length < 2) return null;
    let maxProfit = 0;
    let currentMaxPrice = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        let currentPrice = arr[i];
        currentMaxPrice = Math.max(currentMaxPrice, currentPrice);
        maxProfit = Math.max(maxProfit, currentMaxPrice - currentPrice);
    }
    return maxProfit;
}
const buySellStock = arr => {
    if (arr.length < 2) return null;
    let maxProfit = 0;
    let maxCurrent = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        maxCurrent = Math.max(maxCurrent, arr[i]);
        maxProfit = Math.max(maxProfit, maxCurrent - arr[i]);
    }
    return maxProfit;
}
const isPalindrome = str => {
    if (str.length < 2) return true;
    let start = 0;
    let end = str.length - 1;
    while (start <= end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}
const isBalance = arr => {
    if (arr.length % 2 !== 0) return false;
    let map = { "{": "}", "[": "]", "(": ")" };
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (map[key]) {
            stack.push(key);
        } else {
            let last = stack.pop();
            if (map[last] !== key) return false;
        }
    }
    return stack.length === 0;
}
const sortColor = arr => {
    if (arr.length === 1) return arr;
    let current = 0;
    let p0 = 0;
    let p2 = arr.length - 1;
    while (current <= p2) {
        if (arr[current] === 2) {
            swap(arr, current, p2);
            p2--;
        } else if (arr[current] === 0) {
            swap(arr, current, p0);
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
const matrixSpiral = (arr) => {
    if (arr.length < 2) return arr;

    let colStart = 0;
    let colEnd = arr[0].length - 1;
    let rowStart = 0;
    let rowEnd = arr.length - 1;

    let result = [];

    while (colStart < colEnd && rowStart < rowEnd) {

        for (let i = colStart; i <= colEnd; i++) {
            result.push(arr[rowStart][i])
        }
        rowStart++;

        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(arr[i][colEnd])
        }
        colEnd--;

        for (let i = colEnd; i >= colStart; i--) {
            result.push(arr[rowEnd][i]);
        }
        rowEnd--;

        for (let i = rowEnd; i >= rowStart; i--) {
            result.push(arr[i][colStart]);
        }
        colStart++;
    }
    return result;
}
// this is swap
// a, b   order is important
// a = a + b
// b = a - b
// a = a - b
console.log('matrixSpiral', JSON.stringify(matrixSpiral(arr)));
console.log('fibonacci', fibonacci(45)); //1, 1, 2, 3, 5,..., 1134903170
console.log('sortColor', JSON.stringify(sortColor([0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1])));
console.log('isBalance: ', isBalance("[{()}]"));//true
console.log('isPalindrome', isPalindrome('amanaplanacanalpanama')) // true
console.log('buySellStock', buySellStock([9, 11, 8, 5, 7, 10])); // 5
console.log('reverseInteger', reverseInteger(-321))// -123