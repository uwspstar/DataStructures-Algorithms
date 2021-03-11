// Whole-script strict mode syntax
"use strict";

//swap function 
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
// minSubArrayLen
{
    const minSubArrayLen = (nums, target) => {
        if (nums.length === 0) return 0;
        let fast = 0, slow = 0;
        let minLen = nums.length + 1;
        let maxSum = 0;
        while (fast < nums.length) {
            maxSum += nums[fast];
            while (maxSum >= target) {
                minLen = Math.min(minLen, fast - slow + 1);
                if (minLen === 1) return 1;
                maxSum -= nums[slow++];
            }
            fast++;
        }
        return minLen > nums.length ? 0 : minLen;
    }

    console.log('minSubArrayLen-1', minSubArrayLen([1], 4)); //0
    console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 4)); //1
    console.log('minSubArrayLen', minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
    console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 3)); //1
    console.log('minSubArrayLen', minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); //0
}

// binary search : searchInsert
{
    const searchInsert = (arr, num) => {
        if (arr[0] >= num) return 0;
        let len = arr.length;
        if (arr[len - 1] < num) return len;
        let left = 0, right = len - 1;
        while (left <= right) {
            let mid = left + parseInt((right - left) / 2);
            if (arr[mid] === num) return mid;
            arr[mid] > num ? right = mid - 1 : left = mid + 1;
        }
        return right + 1;
    }
    console.log('searchInsert', searchInsert([4, 5], 3)); //0
    console.log('searchInsert', searchInsert([0, 1, 2, 4, 5], 3)); //3 
    console.log('searchInsert', searchInsert([1, 2, 3], 3));//2
    console.log('searchInsert', searchInsert([0, 1, 2, 4], 3));//3
    console.log('searchInsert', searchInsert([0, 1, 2, 4], 5));//4
}
// removeElement
{
    const removeElement = (nums, val) => {
        if (nums.length === 0) return [];
        let point = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[point] = nums[i];
                point++;
            }
        }
        nums.length = point;
        return nums;
    }
    console.log('removeElement', removeElement([3, 2, 2, 3], 3));
    console.log('removeElement', removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
}

// reversWords
{
    //console.log(`result :`, reverseWords('a good   example'));
}
// arrUnionAndDifference
{

    //let obj = new arrUnionAndDifference();
    //console.log('arr union', obj.arrUnion([1, 2, 3, 4], [3, 4, 5, 6]));
    //console.log('arr union', obj.arrAnd([1, 2, 3, 4], [3, 4, 5, 6]));
    //console.log('arr difference', obj.arrDifference([1, 2, 3, 4], [3, 4, 5, 6]));
}
//isAnagram : https://www.byte-by-byte.com/anagrams/
{

    //console.log('isAnagram("", "") =', isAnagram("", ""));//isAnagram("", "") = true
    //console.log('isAnagram("A", "A") =', isAnagram("A", "A"));//isAnagram("A", "A") = true
    //console.log('isAnagram("A", "B") =', isAnagram("A", "B"));//isAnagram("A", "B") = false
    //console.log('isAnagram("ab", "ba") =', isAnagram("ab", "ba"));//isAnagram("ab", "ba") = true
    //console.log('isAnagram("AB", "ab") =', isAnagram("AB", "ab"));//isAnagram("AB", "ab") = true
}
// isAnagram
// 1 : str1.charCodeAt(i)
{

    //console.log('isAnagram("acb", "bba") =', isAnagram("acb", "bba"));//isAnagram("abb", "baa") = true
    //console.log('isAnagram("abb", "baa") =', isAnagram("abb", "baa"));//isAnagram("abb", "baa") = true
    //console.log('isAnagram("", "") =', isAnagram("", ""));//isAnagram("", "") = true
    //console.log('isAnagram("A", "A") =', isAnagram("A", "A"));//isAnagram("A", "A") = true
    //console.log('isAnagram("A", "B") =', isAnagram("A", "B"));//isAnagram("A", "B") = false
    //console.log('isAnagram("ab", "ba") =', isAnagram("ab", "ba"));//isAnagram("ab", "ba") = true
    //console.log('isAnagram("AB", "ab") =', isAnagram("AB", "ab"));//isAnagram("AB", "ab") = true

}
// firstUniqChar // O(N)
{

    //console.log('firstUniqChar -1 : ', JSON.stringify(firstUniqChar('leetcode'))) //0
    //console.log('firstUniqChar -2 : ', JSON.stringify(firstUniqChar(''))) //-1
    //console.log('firstUniqChar -3 : ', JSON.stringify(firstUniqChar('l'))) //0
    //console.log('firstUniqChar -4 : ', JSON.stringify(firstUniqChar('eetcbebecee'))) //2
}
// firstUniqChar // O(N) 
// hashmap
{

    //console.log('firstUniqChar -1 : ', JSON.stringify(firstUniqChar('leetcode'))) //0
    //console.log('firstUniqChar -2 : ', JSON.stringify(firstUniqChar(''))) //-1
    //console.log('firstUniqChar -3 : ', JSON.stringify(firstUniqChar('l'))) //0
    //console.log('firstUniqChar -4 : ', JSON.stringify(firstUniqChar('eetcbebecee'))) //2
}
// firstUniqChar ; fast one max loop 26 characters
{
    //console.log('firstUniqChar -1 : ', JSON.stringify(firstUniqChar('leetcode'))) //0
    //console.log('firstUniqChar -2 : ', JSON.stringify(firstUniqChar(''))) //-1
    //console.log('firstUniqChar -3 : ', JSON.stringify(firstUniqChar('l'))) //0
    //console.log('firstUniqChar -4 : ', JSON.stringify(firstUniqChar('eetcbebecee'))) //2
}
//firstUniqChar
// indexOf = lastIndexOf
{
    //console.log('firstUniqChar -1 : ', JSON.stringify(firstUniqChar('leetcode'))) //0
    //console.log('firstUniqChar -2 : ', JSON.stringify(firstUniqChar(''))) //-1
    //console.log('firstUniqChar -3 : ', JSON.stringify(firstUniqChar('l'))) //0
    //console.log('firstUniqChar -4 : ', JSON.stringify(firstUniqChar('eetcbebecee'))) //2
}
// findDisappearNumbers
{

    //console.log('findDisappearNumbers', JSON.stringify(findDisappearNumbers([4, 3, 2, 7, 8, 2, 3, 1])));
    //console.log('findDisappearNumbers', JSON.stringify(findDisappearNumbers([1, 1])));
}
//threeSum
{

    //console.log('threeSum - 2 :', threeSum([0, 0, 0, 0])) //[0,0,0]
    //console.log('threeSum - 8 :', threeSum([-2, 0, 1, 1, 2])) //[[-2,0,2],[-2,1,1]]
    //console.log('threeSum - 7 :', threeSum([-1, 0, 0, 0, 0, 1])) //[[0,0,0], [ -1, 0, 1 ]]
    //console.log('threeSum - 1 :', threeSum([-1, 0, 1, 2, -1, -4])) //[[-1,-1,2],[-1,0,1]
}
// sliding window : minSubArrayLen  
// 209 https://leetcode-cn.com/problems/minimum-size-subarray-sum/
// minSubArrayLen
{
    //console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 4)); //1
    //console.log('minSubArrayLen', minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
    //console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 3)); //1
    //console.log('minSubArrayLen', minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); //0
}
// sliding window : longestPalindrome
// longestPalindrome : brute force
// j <= len
// checking len > maxStr.length before checking isPalindrome(tmpStr)
{

    //console.log('longestPalindrome - 1', longestPalindrome("cbbd")) //bb
    //console.log('longestPalindrome - 2', longestPalindrome("racecar")) //racecar
    //console.log('longestPalindrome - 3', longestPalindrome("babad")) //bab
    //console.log('longestPalindrome - 4', longestPalindrome("babab")) //babab
    //console.log('longestPalindrome - 5', longestPalindrome("ababbad")) //abba
    //console.log('longestPalindrome - 6', longestPalindrome("c")) //c
    //console.log('longestPalindrome - 7', longestPalindrome("bb")) //bb
}
// repeatStrNTimes
// new Array(num + 1)
{
    //console.log('repeatStrNTimes', repeatStrNTimes('abc', 3));
}
// sliding window : maxWaterContainer
{

    // area = height x width
    // height = min (a, b)
    // width = bi - ai

    //console.log('9-1: maxArea = ', maxWaterContainer([7])) //0
    //console.log('9-2: maxArea = ', maxWaterContainer([7, 1])) // 1
    //console.log('9-3: maxWaterContainer', JSON.stringify(maxWaterContainer([7, 1, 2, 3, 9]))); //28

}
// sliding window : longestSubString
{
    //console.log('10-1: longestSubString', JSON.stringify(longestSubString('asdfadsfasavcbdferes'))); // 9
    //console.log('10-2: longestSubString', JSON.stringify(longestSubString('asdfads'))); // 4
    //console.log('10-3: longestSubString', longestSubString('au'));
}
// sliding window : longestSubString
{

    //console.log('10-1: longestSubString', JSON.stringify(longestSubString('asdfadsfasavcbdferes'))); // 9
    //console.log('10-2: longestSubString', JSON.stringify(longestSubString('asdfads'))); // 4
    //console.log('10-3: longestSubString', longestSubString('au'));
}
// Queue : passingFlowerWithQueue
{
    //let queue = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; 

    //console.log('passingFlowerWithQueue 3:', passingFlowerWithQueue(3)) // passFlower 3: [ 'd' ]
    //console.log('passingFlowerWithQueue 2:', passingFlowerWithQueue(2)) // passFlower 2: [ 'g' ]
}
// Math : ToBinary
{
    // 10 / 2 = 5 --- 0
    //  5 / 2 = 2 --- 1
    //  2 / 2 = 1 --- 0

    //console.log('ToBinary 10 ->:', ToBinary(10)); // ToBinary 10 ->: 1010
    //console.log('ToBinary 8 ->:', ToBinary(8)); // ToBinary 10 ->: 1000
    //console.log('ToBinary 5 ->:', ToBinary(5)); // ToBinary 5 ->: 101
    //console.log('ToBinary 10 ->:', (10).toString(2)); // ToBinary 10 ->: 1010
    //console.log('ToBinary 5 ->:', (5).toString(2)); // ToBinary 5 ->: 101
}

// Math : reverseInteger
{
    // -321 -> - 123

    // console.log('1 - 1: reverseInteger', JSON.stringify(reverseInteger(-321))); // -123
    // console.log('1 - 2: reverseInteger', JSON.stringify(reverseInteger(0))); // 0
    // console.log('1 - 3: reverseInteger', JSON.stringify(reverseInteger(10))); // 0

}
// buySellStock
{
    const buySellStock = arr => {
        if (arr.length < 2) return arr;
        let maxProfit = 0;
        let maxCurrentPrice = 0;
        for (let i = arr.length - 1; i >= 0; i--) {
            let currentPrice = arr[i];
            maxCurrentPrice = Math.max(maxCurrentPrice, currentPrice);
            maxProfit = Math.max(maxProfit, maxCurrentPrice - currentPrice);
        }
        return maxProfit
    }
    console.log('2: buySellStock', JSON.stringify(buySellStock([9, 11, 8, 5, 7, 10]))); // 5
}
// fibEndCall - tail call
// https://leetcode-cn.com/problems/fibonacci-number/solution/4chong-jie-jue-fang-shi-du-ji-bai-liao-1-92ud/
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
        if (arr.length % 2 !== 0) return false;
        const map = { "(": ")", "{": "}", "[": "]" };
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
        if (arr.length === 0) return arr;
        if (arr.length === 1) return arr[0]
        let colStart = 0;
        let colEnd = arr[0].length - 1;
        let rowStart = 0;
        let rowEnd = arr.length - 1;
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
    console.log('1 - 1: bubbleSort   ', JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));//[1,2,3,4,5,6,7,8]
    console.log('1 - 2: bubbleSort   ', JSON.stringify(bubbleSort([8, 2, 1, 3, 5])));//[1,2,3,5,8]
    console.log('1 - 3: bubbleSort   ', JSON.stringify(bubbleSort([0])));//[0]
    console.log('1 - 4: bubbleSort   ', JSON.stringify(bubbleSort([8, 1])));//[1,8]
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
        return mergeSort(arr);
    }
    console.log('4: mergeSortHelp', JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));

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
        reversList(head = this.head) {
            /*
            if (head === null || head.next === null) return head;
            console.log('this.head = ', JSON.stringify(this.head));
            let current = this.reversList(head.next);
            console.log('current = ', JSON.stringify(current));
            head.next.next = head;
            //head = null;
            return this.head; current;
            */
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
            let fast = this.head;
            let slow = this.head;
            while (fast && k) {
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
    console.log('*** reversList = ', JSON.stringify(linkedList.reversList()));
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
                : this.insertNewNode(newNode, this.root);
        }
        traversal() {

        } // 3 ways
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
{
    //206. 反转链表
    // https://leetcode.com/problems/reverse-linked-list/
    /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (nex t=== undefined ? null : next)
 * }
 */
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    var reverseList = function (head) {
        if (head == null || head.next == null) {
            return head
        }
        let current = head;
        let next = null;
        let pre = null;
        // 1->2->3 , 3->2->1
        while (current) {
            next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }
        head = pre;
        return head;
    };

}
{   //recursive
    var reverseList = function (head) {
        if (head == null || head.next == null) {
            return head
        }
        console.log('head.val', head.val)
        let curr = reverseList(head.next);
        head.next.next = head
        head.next = null
        return curr
    };
}