const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
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
    console.log('1: bubbleSort   ', JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));
}
//selectionSort
{
    const selectionSort = arr => {
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
    console.log('2: selectionSort', JSON.stringify(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])));
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
    console.log('3: insertionSort', JSON.stringify(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])));

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
                    : result.push(right.shift())
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
        return mergeSort(arr);
    }

    console.log('4: mergeSortHelp', JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));

}
//quickSort
{
    const quickSortHelp = arr => {
        if (arr.length < 2) return arr;
        const getPivotIndex = (arr, low = 0, high = arr.length - 1) => {
            let pivot = arr[high];
            let pi = low;
            for (let i = low; i <= high; i++) {
                if (arr[i] < pivot) {
                    swap(arr, i, pi);
                    pi++;
                }
            }
            swap(arr, high, pi);
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
}
console.log('================ end sort ================');

console.log('================ start top 100 ================');
// reverseInteger
{
    const reverseInteger = num => {
        if (num < 10 && num > -10) return num;
        let isNegativeFlag = -1;
        num > 0 ? isNegativeFlag = 1 : num = isNegativeFlag * num;
        let result = 0;
        //3 2 1->1 2 3
        while (num) {
            result = result * 10 + num % 10;
            num = parseInt(num / 10);
        }
        return result * isNegativeFlag;
    }
    console.log('1: reverseInteger', JSON.stringify(reverseInteger(-321))); // -123
}
// buySellStock
{
    const buySellStock = arr => {
        if (arr.length < 2) return 0;
        let maxProfit = 0;
        let maxCurrentPrice = 0;
        for (let i = arr.length - 1; i >= 0; i--) {
            let currentPrice = arr[i];
            maxCurrentPrice = Math.max(maxCurrentPrice, currentPrice);
            maxProfit = Math.max(maxProfit, maxCurrentPrice - currentPrice);
        }
        return maxProfit;
    }
    console.log('2: buySellStock', JSON.stringify(buySellStock([9, 11, 8, 5, 7, 10]))); // 5
}
// fibEndCall - tail call
{
    //stack overflow
    const fib = n => {
        if (n < 3) return 1;
        return fib(n - 1) + fib(n - 1);
    }
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
        let memo = {}
        const fib = n => {
            if (n < 3) return 1;
            if (memo[n] !== undefined) return memo[n];
            return memo[n] = fib(n - 1) + fib(n - 2);
        }
        return fib(n);
    }
    console.log('4: fibonacci', JSON.stringify(fibonacci(45))); //1, 1, 2, 3, 5,..., 1134903170
}
// isBalance
{
    const isBalance = arr => {
        if (arr.length % 2 !== 0) return false;
        let map = { "{": "}", "[": "]", "(": ")" };
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
    console.log('5: isBalance: ', JSON.stringify(isBalance("[{()()}]")));//true
    console.log('5: isBalance: ', JSON.stringify(isBalance("[[[]")));//false
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
    console.log('6: isPalindrome', JSON.stringify(isPalindrome('amanaplanacanalpanama'))) // true
}
// sortColor
{
    const sortColor = arr => {
        if (arr.length < 2) return arr;
        let p0 = 0;
        let current = 0;
        let p2 = arr.length - 1;
        while (current < p2) {
            if (arr[current] === 0) {
                swap(arr, p0, current);
                p0++;
                current++;
            } else if (arr[current] === 2) {
                swap(arr, p2, current);
                p2--;
            } else current++;
        }
        return arr;
    }
    console.log('7: sortColor', JSON.stringify(sortColor([0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1])));
}
// matrixSpiral
{
    const arr = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]
    ]

    //console.log('8: matrixSpiral', JSON.stringify(matrixSpiral(arr)));
    // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
}
// maxWaterContainer
{
    // area = height x width
    // height = min (a, b)
    // width = bi - ai
    // [7, 1, 2, 3, 9]

    const maxWaterContainer = arr => {
        if (arr.length < 2) return 0;
        if (arr.length === 2) return Math.min(arr[0], arr[1]);
        let maxArea = 0;
        let p1 = 0;
        let p2 = arr.length - 1;
        while (p1 < p2) {
            let height = Math.min(arr[p1], arr[p2]);
            let width = p2 - p1;
            let area = height * width;
            maxArea = Math.max(maxArea, area);
            arr[p1] < arr[p2] ? p1++ : p2--; //arr[p1] > arr[p2] also work
        }
        return maxArea;
    }
    console.log('9-1: maxArea = ', maxWaterContainer([7])) //0
    console.log('9-2: maxArea = ', maxWaterContainer([7, 1])) // 1
    console.log('9-3: maxWaterContainer', JSON.stringify(maxWaterContainer([7, 1, 2, 3, 9]))); //28

}
// longestSubString
{
    //abcdeca
    const longestSubString = str => {
        if (str.length < 2) return str;
        let p1 = 0;
        let p2 = 0;
        let maxLength = 0;
        let map = new Map();
        while (p2 < str.length) {
            let key = str[p2];
            if (!map.get(key)) {
                map.set(key, p2);
            } else {
                let value = map.get(key);
                map.set(key, p2);
                p1 = value + 1;
                maxLength = Math.max(maxLength, p2 - p1);
            }
            p2++;
        }
        //console.log(map, { map });
        return maxLength;
    }
    console.log('10-1: longestSubString', JSON.stringify(longestSubString('asdfadsfasavcbdferes')));
    console.log('10-2: longestSubString', JSON.stringify(longestSubString('asdfads')));
}
console.log('================ end top 100 ================');

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
            let node = new Node(value);
            if (this.head === null) {
                this.head = node;
            }
            else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            return this;
        }
        reverse() {
            if (this.head === null) return this.head;
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
            if (this.head === null) return this.head;
            let fast = this.head;
            let slow = this.head;
            while (fast && fast.next) {
                fast = fast.next.next;
                slow = slow.next;
            }
            return slow.value;
        }
        findLastKth(k) {
            if (this.head === null) return this.head;
            let current = this.head;
            while (current && k > 0) {
                current = current.next;
                k--;
            }
            if (k > 0) return null;
            let fast = current;
            let slow = this.head;
            while (fast) {
                fast = fast.next;
                slow = slow.next;
            }
            return slow.value;
        }
        isCircularFastSlow() { }

    }
    let linkedList = new LinkedList(5);
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    linkedList.append(50);
    //console.log('getLastGivenIndexNode', JSON.stringify(linkedList.getLastGivenIndexNode(3)));
    //console.log(JSON.stringify(linkedList.getHead()));
    console.log('linkedList = ', JSON.stringify(linkedList));
    console.log('findLastKth(3) = ', JSON.stringify(linkedList.findLastKth(3)));
    console.log('findMid = ', JSON.stringify(linkedList.findMid()));
    console.log('reverse = ', JSON.stringify(linkedList.reverse()));
    //console.log('isCircular =', JSON.stringify(linkedList.isCircular()));

    //console.log(JSON.stringify(linkedList.isCircularFastSlow()));
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
        insert(value) {

        }
        traversal() { }
        search(value) { }
    }

}
console.log('================ end tree ================');