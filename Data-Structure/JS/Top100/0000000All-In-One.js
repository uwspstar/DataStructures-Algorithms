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
const buySellStock = (arr) => {
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
const isPalindrome = (str) => {
    if (str.length < 2) return true;
    let low = 0;
    let high = str.length - 1;
    while (low <= high) {
        if (str[low] !== str[high]) return false;
        low++;
        high--;
    }
    return true;
}
const isBalance = (arr) => {
    if (arr.length % 2 !== 0) return false;
    let map = { "[": "]", "(": ")", "{": "}", }
    let stock = [];
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (map[key]) {
            stock.push(arr[i]);
        } else {
            let last = stock.pop(); // not arr.pop()
            if (key !== map[last]) return false;
        }
    }
    return stock.length === 0;
}
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
console.log('isBalance: ', isBalance("[{()}]"));//true
console.log('isPalindrome', isPalindrome('amanaplanacanalpanama')) // true
console.log('buySellStock', buySellStock([9, 11, 8, 5, 7, 10])); // 5
console.log('reverseInteger', reverseInteger(-321))// -123