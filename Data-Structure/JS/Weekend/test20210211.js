// Whole-script strict mode syntax
"use strict";

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

console.log('================ start top 100 ================');
{
    const findDisappearNumbers = nums => {
        if (nums.length === 0) return 1;
        let set = new Set(nums);
        let len = nums.length;
        let p = 0;
        for (let i = 1; i <= len; i++) {
            if (!set.has(i)) {
                nums[p] = i;
                p++;
            }
        }
        return nums.slice(0, p);
    }
    console.log('findDisappearNumbers', JSON.stringify(findDisappearNumbers([4, 3, 2, 7, 8, 2, 3, 1])));
    console.log('findDisappearNumbers', JSON.stringify(findDisappearNumbers([1, 1])));
}
//threeSum
{
    const threeSum = nums => {
        if (nums.length < 2) return [];
        nums.sort((a, b) => a - b);
        let len = nums.length;

        if (nums[len - 1] < 0) return [];
        if (nums[0] > 0) return [];

        let result = [];
        let i = 0;
        while (i < len - 2) {
            if (nums[i] > 0) break;
            let left = i + 1;
            let right = len - 1;
            while (left < right) {
                if (nums[i] * nums[right] > 0) break;
                let sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                }
                if (sum <= 0) {
                    while (nums[left] === nums[++left]) { };
                } else {
                    while (nums[right] === nums[--right]) { };
                }
            }
            while (nums[i] === nums[++i]) { }
        }
        return result;
    }
    console.log('threeSum - 2 :', threeSum([0, 0, 0, 0])) //[0,0,0]
    console.log('threeSum - 8 :', threeSum([-2, 0, 1, 1, 2])) //[[-2,0,2],[-2,1,1]]
    console.log('threeSum - 7 :', threeSum([-1, 0, 0, 0, 0, 1])) //[[0,0,0], [ -1, 0, 1 ]]
    console.log('threeSum - 1 :', threeSum([-1, 0, 1, 2, -1, -4])) //[[-1,-1,2],[-1,0,1]
}
// longestPalindrome
{
    const isPalindrome = str => {
        if (str.length < 2) return true;
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    const longestPalindrome = str => {
        if (str.length < 2) return str;
        let maxLen = 0;
        let result = "";
        let len = str.length;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j <= len; j++) {
                // slice() extracts up to but not including endIndex. so j <= len
                let test = str.slice(i, j);
                if (isPalindrome(test) && test.length > maxLen) {
                    result = test;
                    maxLen = test.length;
                }
            }
        }
        return result;
    }
    console.log('longestPalindrome - 1', longestPalindrome("cbbd")) //bb
    console.log('longestPalindrome - 2', longestPalindrome("racecar")) //racecar
    console.log('longestPalindrome - 3', longestPalindrome("babad")) //bab
    console.log('longestPalindrome - 4', longestPalindrome("babab")) //babab
    console.log('longestPalindrome - 5', longestPalindrome("ababbad")) //abba
    console.log('longestPalindrome - 6', longestPalindrome("c")) //c
    console.log('longestPalindrome - 7', longestPalindrome("bb")) //bb
}
// repeatStrNTimes
{
    const repeatStrNTimes = (str, n) => {
        if (n < 2) return str;

        let arr = new Array(n + 1);
        return arr.join(str);
    }
    console.log('repeatStrNTimes', repeatStrNTimes('abc', 3)); //abcabcabc
}
// maxWaterContainer
{
    const maxWaterContainer = arr => {
        if (arr.length < 2) return 0;
        let maxArea = 0;
        let ai = 0;
        let bi = arr.length - 1;
        while (ai < bi) {
            let height = Math.min(arr[ai], arr[bi]);
            let width = bi - ai;
            maxArea = Math.max(maxArea, height * width);
            arr[ai] < arr[bi]
                ? ai++
                : bi--;
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
        if (str.length < 2) return str.length;
        let map = new Map();
        let maxLen = 0;
        let slow = 0;
        let fast = 0;
        while (fast < str.length) {
            let key = str[fast];
            let value = map.get(key);
            if (value >= slow) {
                slow = value + 1;
            }
            map.set(key, fast);
            maxLen = Math.max(maxLen, fast - slow + 1);
            fast++;
        }
        console.log('map', map);
        return maxLen;
    }
    console.log('10-1: longestSubString', JSON.stringify(longestSubString('asdfadsfasavcbdferes'))); // 9
    console.log('10-2: longestSubString', JSON.stringify(longestSubString('asdfads'))); // 4
}
// passingFlowerWithQueue
{
    const passingFlowerWithQueue = n => {
        let queue = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        while (queue.length > 1) {
            for (let i = 0; i < n - 1; i++) {
                queue.push(queue.shift());
            }
            let removeItem = queue.shift();
        }
        return queue;
    }
    //let queue = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; 

    console.log('passingFlowerWithQueue 3:', passingFlowerWithQueue(3)) // passFlower 3: [ 'd' ]
    console.log('passingFlowerWithQueue 2:', passingFlowerWithQueue(2)) // passFlower 2: [ 'g' ]
}
// ToBinary
{
    const ToBinary = num => {
        let str = "";
        // 10 / 2 -> 5 --- 0
        // 5  / 2 -> 2 --- 1
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
{
    const reverseInteger = num => {
        if (num > -10 && num < 10) return num;
        let isNegative = -1;
        num < 0 ? num = num * isNegative : isNegative = 1;
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
        let maxProfit = 0;
        let currentMaxPrice = 0;
        for (let i = arr.length - 1; i >= 0; i--) {
            let currentPrice = arr[i];
            currentMaxPrice = Math.max(currentMaxPrice, currentPrice)
            maxProfit = Math.max(maxProfit, currentMaxPrice - currentPrice);
        }
        return maxProfit;
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
        let result = [];
        let map = { "(": ")", "{": "}", "[": "]" };
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
    console.log('5 - 4: isBalance: ', JSON.stringify(isBalance("[{(")));//false
}
// isPalindrome
{
    const isPalindrome = str => {
        if (str.length < 2) return true;
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
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
        let p2 = arr.length - 1;
        let current = 0;
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
        if (arr.length === 0) return [];
        if (arr.length === 1) return arr[0];
        let rowStart = 0;
        let rowEnd = arr.length - 1;
        let colStart = 0;
        let colEnd = arr[0].length - 1;
        let result = [];
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
    const bubbleSort = arr => {
        if (arr.length < 2) return arr;
        for (let i = arr.length - 1; i >= 0; i--) {
            let isSwap = false;
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    isSwap = true;
                }
            }
            if (!isSwap) break;
        }
        return arr;
    }
    console.log('1: bubbleSort - 1', JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));
    console.log('2: bubbleSort - 2', JSON.stringify(bubbleSort([8, 1, 9, 3, -1, 5, 6, 7])));
}
//selectionSort
{
    const selectionSort = arr => {
        if (arr.length < 2) return arr;
        for (let i = 0; i < arr.length; i++) {
            let smallIndex = i;
            for (let j = smallIndex; j < arr.length; j++) {
                if (arr[j] < arr[smallIndex]) {
                    smallIndex = j;
                }
            }
            if (smallIndex !== i) swap(arr, smallIndex, i);
        }
        return arr;
    }
    console.log('2: selectionSort - 1', JSON.stringify(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])));
    console.log('2: selectionSort - 2', JSON.stringify(selectionSort([8, 1, 9, 3, -1, 5, 6, 7])));
}
//insertionSort
{
    const insertionSort = arr => {
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
    console.log('3: insertionSort - 1', JSON.stringify(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])));
    console.log('3: insertionSort - 2', JSON.stringify(insertionSort([8, 1, 9, 3, -1, 5, 6, 7])));
}
//mergeSort
{

    const mergeSortHelp = arr => {
        if (arr.length < 2) return arr;
        const merge = (left, right) => {
            if (left.length === 0) return right;
            if (right.length === 0) return left;
            let result = [];
            while (left.length && right.length) {
                left[0] < right[0]
                    ? result.push(left.shift())
                    : result.push(right.shift());
            }
            return result.concat(left, right);
        }
        const mergeSort = arr => {
            if (arr.length < 2) return arr;
            let mid = arr.length >> 1;
            let left = mergeSort(arr.slice(0, mid));
            let right = mergeSort(arr.slice(mid));
            return merge(left, right);
        }
        return mergeSort(arr)
    }
    console.log('4: mergeSortHelp - 1', JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
    console.log('4: mergeSortHelp - 2', JSON.stringify(mergeSortHelp([8, 1, 9, 3, -1, 5, 6, 7])));
}
//quickSort
{
    const quickSortHelp = arr => {
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
    console.log('5: quickSortHelp - 1', JSON.stringify(quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
    console.log('5: quickSortHelp - 2', JSON.stringify(quickSortHelp([8, 1, 9, 3, -1, 5, 6, 7])));
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
        append(value) {
            let newNode = new Node(value);
            if (this.head === null) {
                this.head = newNode;
            } else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
            return this;
        }
        reverse() {
            if (this.head === null) return null;
            let current = this.head;
            let pre = null;
            let next = null;
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
            let slow = this.head;
            let fast = this.head;
            while (fast && fast.next) {
                fast = fast.next.next;
                slow = slow.next;
            }
            return slow.value;
        }
        findLastKth(k) {
            if (this.head === null) return null;
            let fast = this.head;
            let slow = this.head;
            while (k && fast) {
                fast = fast.next;
                k--;
            }
            if (k > 0) return null;
            while (fast) {
                fast = fast.next;
                slow = slow.next;
            }
            return slow.value;
        }
        isCircularFastSlow() {
            if (this.head === null) return false;
            let fast = this.head;
            let slow = this.head;
            if (this.head.next) fast = fast.next;  //at the beginning, fast one step ahead

            while (fast && fast.next) {
                if (fast.next === slow) return true;
                if (fast.next.next === slow) return true;
                fast = fast.next.next;
                slow = slow.next;
            }
            return false;
        }

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
        insertNewNode(newNode, node) {
            if (node.value < newNode.value) {
                node.left === null
                    ? node.left = newNode
                    : this.insertNewNode(node.left, newNode);
            } else {
                node.right === null
                    ? node.right = newNode
                    : this.insertNewNode(node.right, newNode);
            }
        }
        insert(value) {
            let newNode = new TreeNode(value)
            return this.root === null
                ? this.root = newNode
                : this.insertNewNode(newNode, this.root)
        }
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