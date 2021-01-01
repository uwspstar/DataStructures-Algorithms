// Whole-script strict mode syntax
"use strict";

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
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

console.log('================ start top 100 ================');
// reverseInteger
{

    //console.log('1: reverseInteger', JSON.stringify(reverseInteger(-321))); // -123
}
// buySellStock
{

    //console.log('2: buySellStock', JSON.stringify(buySellStock([9, 11, 8, 5, 7, 10]))); // 5
}
// fibEndCall - tail call
{
    //console.log('3: fibEndCall', JSON.stringify(fibEndCall(45))); //1, 1, 2, 3, 5,..., 1134903170
}
// fibonacci - memo
{
    //console.log('4: fibonacci', JSON.stringify(fibonacci(45))); //1, 1, 2, 3, 5,..., 1134903170
}
// isBalance
{

    //console.log('5: isBalance: ', JSON.stringify(isBalance("[{()()}]")));//true
    //console.log('5: isBalance: ', JSON.stringify(isBalance("[[[]")));//false
}
// isPalindrome
{
    //console.log('6: isPalindrome', JSON.stringify(isPalindrome('amanaplanacanalpanama'))) // true
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
    const matrixSpiral = arr => {
        if (arr.length === 0) return null;
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
// maxWaterContainer
{
    // area = height x width
    // height = min (a, b)
    // width = bi - ai

    const maxWaterContainer = arr => {
        if (arr.length < 2) return 0;
        let maxArea = 0;
        let ai = 0;
        let bi = arr.length - 1;
        while (ai < bi) {
            let width = bi - ai;
            let height = Math.min(arr[ai], arr[bi]);
            let area = width * height;
            maxArea = Math.max(maxArea, area);
            arr[ai] < arr[bi] ? ai++ : bi--;
        }
        return maxArea;
    }
    console.log('9-1: maxArea = ', maxWaterContainer([7])) //0
    console.log('9-2: maxArea = ', maxWaterContainer([7, 1])) // 1
    console.log('9-3: maxWaterContainer', JSON.stringify(maxWaterContainer([7, 1, 2, 3, 9]))); //28

}
// longestSubString
{
    const longestSubString = str => {
        if (str.length < 2) return str.length;
        let maxLen = 0;
        let map = new Map();
        let fast = 0;
        let slow = 0;
        while (fast < str.length) {
            let key = str[fast];
            let value = map.get(key);
            if (value) {
                slow = value + 1;
                map.set(key, fast);
                maxLen = Math.max(maxLen, fast - slow);
            } else {
                map.set(key, fast);
            }
            fast++;
        }
        return maxLen;
    }
    console.log('10-1: longestSubString', JSON.stringify(longestSubString('asdfadsfasavcbdferes'))); // 9
    console.log('10-2: longestSubString', JSON.stringify(longestSubString('asdfads'))); // 4
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
            let pre = null;
            let next = null;
            let current = this.head;
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
        findLastKth(k) {
            if (this.head === null) return null;
            let current = this.head;
            while (k > 0) {
                if (current) {
                    current = current.next;
                } else break;
                k--;
            }
            let fast = current;
            let slow = this.head;
            while (fast) {
                fast = fast.next;
                slow = slow.next;
            }
            return slow.value;
        }
        isCircularFastSlow() {
            if (this.head === null) return null;
            let fast = this.head;
            let slow = this.head;
            while (fast.next !== null && fast.next.next !== null) {
                fast = fast.next.next;
                slow = slow.next;
                if (fast === slow) return true;
            }
            return false;
        }
        isCircular() {
            if (this.head === null) return true;
            let current = this.head;
            while (current.next !== null && current.next !== this.head) {
                current = current.next;
            }
            return current.next === this.head
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
    console.log('findLastKth(3) = ', JSON.stringify(linkedList.findLastKth(4))); //20
    console.log('reverse = ', JSON.stringify(linkedList.reverse()));
    console.log(JSON.stringify(linkedList.isCircularFastSlow()));
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
        insertNewNode(node, newNode) {
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
            let newNode = new TreeNode(value);
            this.root === null
                ? this.root = newNode
                : this.insertNewNode(this.root, newNode);
        }
        traversal() { }
        search(value) { }
        delete(value) { }
    }
    let t = new Tree();
    t.insert(8);
    t.insert(2);
    t.insert(3);
    t.insert(9);
    console.log('tree after insert : ', JSON.stringify(t))

}
console.log('================ end tree ================');