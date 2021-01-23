// Whole-script strict mode syntax
"use strict";

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

console.log('================ start top 100 ================');
// maxWaterContainer
{
    const maxWaterContainer = arr => {
        if (arr.length < 2) return 0;
        let ai = 0;
        let bi = arr.length - 1;
        let maxArea = 0;
        while (ai < bi) {
            let width = bi - ai;
            let height = Math.min(arr[ai], arr[bi]);
            maxArea = Math.max(maxArea, width * height);
            arr[ai] < arr[bi] ? ai++ : bi--;
        }
        return maxArea;
    }
    console.log('9-1: maxArea = ', maxWaterContainer([7])) //0
    console.log('9-2: maxArea = ', maxWaterContainer([7, 1])) // 1
    console.log('9-3: maxWaterContainer', JSON.stringify(maxWaterContainer([7, 1, 2, 3, 9]))); //28
    // area = height x width
    // height = min (a, b)
    // width = bi - ai

}
// longestSubString
{
    const longestSubString = str => {
        if (str.length === 0) return 0;
        if (str.length === 1) return 1;

        let map = new Map();
        let slow = 0;
        let fast = 0;
        let maxLen = 0;
        while (fast < str.length) {
            let key = str[fast];
            let value = map.get(key);
            if (value >= 0) {
                slow = value + 1;
                maxLen = Math.max(maxLen, fast - slow);
            }
            map.set(key, fast);
            fast++;
        }
        //console.log({ map });
        return maxLen;
    }
    console.log('10-1: longestSubString', JSON.stringify(longestSubString('asdfadsfasavcbdferes'))); // 9
    console.log('10-2: longestSubString', JSON.stringify(longestSubString('asdfads'))); // 4
}
// passingFlowerWithQueue
{
    const passFlower = num => {
        if (num < 1) return null;
        let queue = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        while (queue.length > 1) {
            for (let i = 0; i < num - 1; i++) {
                queue.push(queue.shift());
            }
            let removed = queue.shift();
        }
        return queue;
    }
    //let queue = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; 

    console.log('passFlower 3:', passFlower(3)) // passFlower 3: [ 'd' ]
    console.log('passFlower 2:', passFlower(2)) // passFlower 2: [ 'g' ]
}
// ToBinary
{
    //10 / 2 = 5 -- 0
    //5  / 2 = 2 -- 1
    const ToBinary = num => {
        let str = '';
        while (num) {
            str = num % 2 + str;
            num = parseInt(num / 2);
        }
        return str;
    }
    console.log('ToBinary 10 ->:', ToBinary(10)); // ToBinary 10 ->: 1010
    console.log('ToBinary 8 ->:', ToBinary(8)); // ToBinary 10 ->: 1000
    console.log('ToBinary 5 ->:', ToBinary(5)); // ToBinary 5 ->: 101
    console.log('ToBinary 10 ->:', (10).toString(2)); // ToBinary 10 ->: 1010
    console.log('ToBinary 5 ->:', (5).toString(2)); // ToBinary 5 ->: 101
}

// reverseInteger
{   // -321 -> -123
    const reverseInteger = num => {
        if (num > -10 && num < 10) return num;
        let isNegative = -1;
        num > 0 ? isNegative = 1 : num = num * isNegative;
        let result = 0;
        while (num) {
            result = result * 10 + num % 10;
            num = parseInt(num / 10);
        }
        return result * isNegative;
    }
    console.log('1 - 1: reverseInteger', JSON.stringify(reverseInteger(-321))); // -123
    console.log('1 - 2: reverseInteger', JSON.stringify(reverseInteger(0))); // 0
    console.log('1 - 3: reverseInteger', JSON.stringify(reverseInteger(10))); // 0
}
// buySellStock
{
    const buySellStock = arr => {
        if (arr.length < 2) return 0;
        let maxPrice = 0;
        let maxCurrentPrice = 0
        for (let i = arr.length - 1; i >= 0; i--) {
            let currentPrice = arr[i];
            maxCurrentPrice = Math.max(maxCurrentPrice, currentPrice);
            maxPrice = Math.max(maxPrice, maxCurrentPrice - currentPrice);
        }
        return maxPrice;
    }
    console.log('2: buySellStock', JSON.stringify(buySellStock([9, 11, 8, 5, 7, 10]))); // 5
}
// fibEndCall - tail call
{
    const fibEndCall = (n, f1 = 1, f2 = 1) => {
        if (n < 3) return f2;
        return fibEndCall(n - 1, f2, f2 + f1);
    }
    console.log('3: fibEndCall', JSON.stringify(fibEndCall(45))); //1, 1, 2, 3, 5,..., 1134903170
}
// fibonacci - memo
{
    const fibonacci = n => {
        if (n < 3) return 1;
        let memo = {};
        const fib = n => {
            if (n < 3) return 1;
            if (memo[n]) return memo[n];
            return memo[n] = fib(n - 1) + fib(n - 2);
        }
        return fib(n);
    }
    console.log('4: fibonacci', JSON.stringify(fibonacci(45))); //1, 1, 2, 3, 5,..., 1134903170
}
// isBalance
{
    const isBalance = arr => {
        if (arr.length % 2 === 1) return false;
        let map = { "(": ")", "{": "}", "[": "]" };
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let key = arr[i];
            if (map[key]) {
                result.push(key);
            } else {
                let last = result.pop();
                if (map[last] !== key) return false;
            }
        }
        return result.length === 0;
    }
    console.log('5 - 1: isBalance: ', JSON.stringify(isBalance("[{()()}]")));//true
    console.log('5 - 2: isBalance: ', JSON.stringify(isBalance("[[[]")));//false
    console.log('5 - 3: isBalance: ', JSON.stringify(isBalance("[[[[{(")));//false
}
// isPalindrome
{
    const isPalindrome = arr => {
        if (arr.length < 2) return true;
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            if (arr[left] !== arr[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    console.log('6 - 1: isPalindrome', JSON.stringify(isPalindrome('amanaplanacanalpanama'))) // true
    console.log('6 - 2: isPalindrome', JSON.stringify(isPalindrome('a'))) // true
    console.log('6 - 3: isPalindrome', JSON.stringify(isPalindrome(''))) // true
    console.log('6 - 4: isPalindrome', JSON.stringify(isPalindrome('abcdc'))) // false
}
// sortColor
{
    const sortColor = arr => {
        if (arr.length < 2) return arr;
        let p0 = 0;
        let current = 0;
        let p2 = arr.length - 1;
        while (current <= p2) {
            let value = arr[current];
            if (value === 2) {
                swap(arr, current, p2)
                p2--;
            } else if (value === 0) {
                swap(arr, current, p0)
                p0++;
                current++;
            } else current++;
        }
        return arr;
    }
    console.log('7 - 1: sortColor', JSON.stringify(sortColor([0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]))); // [0,0,0,0,0,1,1,1,1,2,2,2,2,2]
    console.log('7 - 2: sortColor', JSON.stringify(sortColor([0, 1, 2])));// [0,1,2]
    console.log('7 - 3: sortColor', JSON.stringify(sortColor([0, 0, 2, 1])));// [0,0,1,2]
    console.log('7 - 4: sortColor', JSON.stringify(sortColor([2, 0])));// [0,2]
    console.log('7 - 5: sortColor', JSON.stringify(sortColor([2])));// [2]
}
// matrixSpiral
{
    const arr = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]
    ]
    const matrixSpiral = arr => {
        if (arr.length === 0) return null;
        if (arr.length === 1) return arr[0];
        let rowStart = 0;
        let rowEnd = arr.length - 1;
        let colStart = 0;
        let colEnd = arr[0].length - 1;
        let result = []
        while (rowStart <= rowEnd && colStart <= colEnd) {
            for (let i = colStart; i <= colEnd; i++) {
                result.push(arr[rowStart][i]);
            } rowStart++;
            for (let i = rowStart; i <= rowEnd; i++) {
                result.push(arr[i][colEnd]);
            } colEnd--;
            for (let i = colEnd; i >= colStart; i--) {
                result.push(arr[rowEnd][i]);
            } rowEnd--;
            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(arr[i][colStart]);
            } colStart++;
        }
        return result;
    }

    console.log('8: matrixSpiral', JSON.stringify(matrixSpiral(arr)));
    // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
}

console.log('================ end top 100 ================');


console.log('================ start sort ================');
//bubbleSort
{
    //console.log('1: bubbleSort   ', JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));
}
//selectionSort
{

    //console.log('2: selectionSort', JSON.stringify(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])));
}
//insertionSort
{

    //console.log('3: insertionSort', JSON.stringify(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])));

}
//mergeSort
{

    //console.log('4: mergeSortHelp', JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));

}
//quickSort
{

    //console.log('5: quickSortHelp', JSON.stringify(quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
}
console.log('================ end sort ================');

console.log('================ start linkedList ================');
// LinkList
{
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null
        }
    }
    class LinkedList {
        constructor(value) {
            this.head = new Node(value);
            // cannot use if (this.head === null) this.head = new Node(value);
            // the new create a empty obj with constructor
        }
        append(value) { }
        reverse() { }
        findMid() { }
        findLastKth(k) { }
        isCircularFastSlow() { }

    }
    let linkedList = new LinkedList(5);
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    linkedList.append(50);
    console.log('linkedList = ', JSON.stringify(linkedList));
    console.log('findMid = ', JSON.stringify(linkedList.findMid())); //30
    console.log('findLastKth(4) = ', JSON.stringify(linkedList.findLastKth(4))); //20
    console.log('reverse = ', JSON.stringify(linkedList.reverse()));
    console.log('isCircularFastSlow', JSON.stringify(linkedList.isCircularFastSlow()));
    console.log('linkedList = ', JSON.stringify(linkedList));
}
console.log('================ end linkedList ================');

console.log('================ start tree ================');
// Tree
{
    class TreeNode {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
    class Tree {
        constructor() {
            this.root = null;
        }
        insert(value) { }
        traversal() { } // 3 ways
        search(value) { }
        delete(value) { }
    }
    let t = new Tree();
    t.insert(8);
    t.insert(2);
    t.insert(3);
    t.insert(9);
    console.log('tree : ', JSON.stringify(t))

}
console.log('================ end tree ================');
