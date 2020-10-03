
console.log('================ start sort ================');

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const bubbleSort = (arr) => {
    if (arr.length < 2) return arr;

    for (let i = arr.length - 1; i >= 0; i--) {
        let isSwap = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
        if (!isSwap) break;
    }

    return arr;
}
const selectionSort = (arr) => {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
        let smallIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j;
            }
        }
        if (smallIndex !== i) swap(arr, smallIndex, i);
    }
    return arr;
}
const insertionSort = (arr) => {
    if (arr.length < 2) return arr;
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] > current) {
                arr[j + 1] = arr[j];
            } else break;
        }
        arr[j + 1] = current;
    }
    return arr;
}
const mergeSortHelp = (arr) => {
    if (arr.length < 2) return arr;
    const merge = (left, right) => {
        if (left.length === 0) return right;
        if (right.length === 0) return left;
        let result = [];
        while (left.length && right.length) {
            left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
        }
        return result.concat(left, right);
    }
    const mergeSort = (arr) => {
        if (arr.length < 2) return arr;
        let mid = arr.length >> 1;
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }
    return mergeSort(arr);
}
const quickSortHelp = (arr) => {
    if (arr.length < 2) return arr;
    const getPivotIndex = (arr, low = 0, high = arr.length - 1) => {
        let pi = low;
        let pivot = arr[high];
        for (let i = low; i <= high; i++) {
            if (arr[i] < pivot) {
                swap(arr, i, pi);
                pi++;
            }
        }
        swap(arr, pi, high);
        return pi;
    }
    const quickSort = (arr, low = 0, high = arr.length - 1) => {
        if (arr.length < 2) return arr;
        if (low < high) {
            let pi = getPivotIndex(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
        return arr;
    }
    return quickSort(arr);
}

console.log('5: quickSortHelp', JSON.stringify(quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
console.log('4: mergeSortHelp', JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
console.log('3: insertionSort', JSON.stringify(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])));
console.log('2: selectionSort', JSON.stringify(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])));
console.log('1: bubbleSort', JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));

console.log('================ end sort ================');

console.log('================ start top 100 ================');
const arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]
const reverseInteger = (num) => {
    if (num >= -9 && num <= 9) return num;

    let negativeFlag = -1;

    num < 0 ? num = num * negativeFlag : negativeFlag = 1;

    //-321-->321
    let result = 0;

    while (num) {
        result = result * 10 + num % 10;
        num = parseInt(num / 10); //parseInt !!!!
    }

    return result * negativeFlag;
}
const buySellStock = (arr) => {
    if (arr.length < 2) return null;
    let maxProfit = 0;
    let currentMax = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        let currentPrice = arr[i];
        currentMax = Math.max(currentMax, currentPrice);
        maxProfit = Math.max(maxProfit, currentMax - currentPrice); //current max - current and compare with maxProfit
    }
    return maxProfit;
}
function fibonacci(n) {
    let memo = {};
    const fib = (n) => {
        if (memo[n]) return memo[n];
        if (n < 3) return 1;
        return memo[n] = fib(n - 1) + fib(n - 2);
    }
    return fib(n);
}
const fibEndCall = (n, n1 = 1, n2 = 1) => {
    // 1, 1, 2, 3, 5, 8,...
    if (n < 3) return n2;
    return fibEndCall(n - 1, n2, n1 + n2);
}
const isBalance = (arr) => {
    if (arr.length % 2 === 1) return false;
    let map = { "{": "}", "[": "]", "(": ")" };
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (map[key]) {
            stack.push(key)
        } else {
            let last = stack.pop();
            if (key !== map[last]) return false;
        }
    }
    return stack.length === 0;
}
const isPalindrome = (str) => {
    if (str.length === 1) return true;
    let startPoint = 0;
    let endPoint = str.length - 1;
    while (startPoint < endPoint) {
        if (str[startPoint] !== str[endPoint]) return false;
        startPoint++;
        endPoint--;
    }
    return true;
}
const sortColor = (arr) => {
    if (arr.length === 1) return arr;
    let p0 = 0;
    let current = 0;
    let p2 = arr.length - 1;
    while (current <= p2) { //current < p2
        if (arr[current] === 2) {
            swap(arr, current, p2)
            p2--;
        } else if (arr[current] === 0) {
            swap(arr, current, p0)
            p0++;
            current++;
        } else current++;
    }
    return arr;
}
const matrixSpiral = (arr) => {
    if (arr.length < 2) return arr;
    let rowStart = 0;
    let rowEnd = arr.length - 1;
    let colStart = 0;
    let colEnd = arr[0].length - 1;
    let result = [];
    while (rowStart < rowEnd && colStart < colEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            result.push(arr[rowStart][i]);
        }
        rowStart++;
        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(arr[i][colEnd]);
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
//45
console.log('8: matrixSpiral', JSON.stringify(matrixSpiral(arr)));
console.log('7: sortColor', JSON.stringify(sortColor([0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1])));
console.log('6: isPalindrome', JSON.stringify(isPalindrome('amanaplanacanalpanama'))) // true
console.log('5: isBalance: ', JSON.stringify(isBalance("[{()()}]")));//true
console.log('4: fibonacci', JSON.stringify(fibonacci(45))); //1, 1, 2, 3, 5,..., 1134903170
console.log('3: fibEndCall', JSON.stringify(fibEndCall(45))); //1, 1, 2, 3, 5,..., 1134903170
console.log('2: buySellStock', JSON.stringify(buySellStock([9, 11, 8, 5, 7, 10]))); // 5
console.log('1: reverseInteger', JSON.stringify(reverseInteger(-321))); // -123

//console.log('arrSubset', JSON.stringify(arrSubset([1, 2, 3])));

console.log('================ end top 100 ================');

console.log('================ start linkedList ================');
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class LinkedList {
    constructor(val) {
        this.head = new Node(val);
    }
    append(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        return this;
    }
    reverse() {
        if (this.head === null) return null;
        let current = this.head;
        let pre = null;
        let next = null;
        //   cur
        //10->20->30->40
        //pre     next
        while (current) {
            next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }
        this.head = pre;
        return this;
    }
    findMid() {
        if (this.head === null) return null;
        let fast = this.head;
        let slow = this.head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow.value;
    }
}
let linkedList = new LinkedList(5);
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
// console.log('linkedList', JSON.stringify(linkedList));
console.log('2: findMid', JSON.stringify(linkedList.findMid()));
console.log('1: reverse', JSON.stringify(linkedList.reverse()));
console.log('================ end linkedList ================');