const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
{
    const sortColor = arr => {
        if (arr.length < 2) return arr;
        let current = 0;
        let p0 = 0;
        let p2 = arr.length - 1;
        while (current <= p2) {
            if (arr[current] === 2) {
                swap(arr, current, p2)
                p2--;
            } else if (arr[current] === 0) {
                swap(arr, current, p0)
                p0++;
                current++
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
//matrixSpiral
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
        let colStart = 0, colEnd = arr[0].length - 1;
        let rowStart = 0, rowEnd = arr.length - 1;
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
//generateMatrix
{
    //[[1,2,3],
    // [8,9,4],
    // [7,6,5]]
    const generateMatrix = n => {
        if (n === 0) return [];
        if (n === 1) return [[1]]
        let result = Array.from({ length: n }, () => new Array(n));
        // exp : let result = Array.from(26).fill(0);
        let rowStart = 0, rowEnd = n - 1, colStart = 0, colEnd = n - 1;
        let count = 1;
        while (rowStart <= rowEnd && colStart <= colEnd) {
            for (let i = colStart; i <= colEnd; i++) {
                result[rowStart][i] = count++;
            }
            rowStart++;
            for (let i = rowStart; i <= rowEnd; i++) {
                result[i][colEnd] = count++;
            }
            colEnd--;
            for (let i = colEnd; i >= colStart; i--) {
                result[rowEnd][i] = count++;
            }
            rowEnd--;
            for (let i = rowEnd; i >= rowStart; i--) {
                result[i][colStart] = count++;
            }
            colStart++;
        }
        return result;
        // [ [ 1, 2, 3 ], 
        //[ <1 empty item>, 9, 4 ], 
        //[ 7, 6, 5 ] ]
    }
    console.log('generateMatrix(3) : ', generateMatrix(3));
    console.log('generateMatrix(0) : ', generateMatrix(0));
    console.log('generateMatrix(1) : ', generateMatrix(1));
    console.log('generateMatrix(4) : ', generateMatrix(4));
}
// LinkedList
{
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }
    class LinkedList {
        constructor(value) {
            this.head = new Node(value)
        }
        append = value => {
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
        findMid = () => {
            if (this.head === null) return null;
            let slow = this.head;
            let fast = this.head;
            while (fast && fast.next) {
                fast = fast.next.next;
                slow = slow.next;
            }
            return slow.value;
        }
        findLastKth = k => {
            if (this.head === null) return null;
            let fast = this.head;
            let slow = this.head;
            while (fast && k > 0) {
                fast = fast.next;
                k--;
            }
            if (k > 0) return null;
            while (fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow.value;
        }
        isCircularFastSlow = () => {
            if (this.head === null) return false;
            let fast = this.head;
            let slow = this.head;
            if (fast && fast.next) {
                if (fast.next === slow) return true;
                if (fast.next.next === slow) return true;
                fast = fast.next.next;
                slow = slow.next
            }
            return false;
        }
        reverse = () => {
            if (this.head === null) return null;
            let current = this.head;
            let next = null;
            let pre = null;
            while (current) {
                next = current.next;
                current.next = pre;
                pre = current;
                current = next;
            }
            this.head = pre;
            return this;
        }
        //better way : https://mp.weixin.qq.com/s/pnvVP-0ZM7epB8y3w_Njwg
        reverseListRecursive = (pre = null, current = this.head) => {
            if (current === null) return pre;
            let next = current.next;
            current.next = pre;
            return this.reverseListRecursive(current, next);
        }
        reversList = (current = this.head) => {
            // 1->2->3->4->5->NULL
            if (current === null) return null;
            // last node or only one node 
            if (current.next === null) return current;
            let newHeadNode = this.reversList(current.next);
            console.log('current.next', current.next, 'newHeadNode : ', newHeadNode);
            // change references for middle chain
            current.next.next = current;
            current.next = null;
            // send back new head node in every recursion 
            return newHeadNode;
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
    //console.log('*** reversList = ', JSON.stringify(linkedList.reversList()));
    //console.log('reverse = ', JSON.stringify(linkedList.reverse()));
    console.log('*** reverseListRecursive = ', JSON.stringify(linkedList.reverseListRecursive()));
    console.log('isCircularFastSlow', JSON.stringify(linkedList.isCircularFastSlow()));
    console.log('linkedList = ', JSON.stringify(linkedList));

}
// quickSortHelp
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
    console.log('quickSortHelp   ', JSON.stringify(quickSortHelp([8, 2, 1, 3, 5])));//[1,2,3,5,8]
    console.log('quickSortHelp   ', JSON.stringify(quickSortHelp([0])));//[0]
    console.log('quickSortHelp   ', JSON.stringify(quickSortHelp([8, 1])));//[1,8]
}
// mergeSortHelp
{
    const mergeSortHelp = arr => {
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
        const mergeSort = arr => {
            if (arr.length < 2) return arr;
            let mid = arr.length >> 1; // not arr.length >> 2
            let left = mergeSort(arr.slice(0, mid));
            let right = mergeSort(arr.slice(mid));
            return merge(left, right)
        }
        return mergeSort(arr);

    }
    console.log('4: mergeSortHelp', JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
    console.log('mergeSortHelp   ', JSON.stringify(mergeSortHelp([8, 2, 1, 3, 5])));//[1,2,3,5,8]
    console.log('mergeSortHelp   ', JSON.stringify(mergeSortHelp([0])));//[0]
    console.log('mergeSortHelp   ', JSON.stringify(mergeSortHelp([8, 1])));//[1,8]
}
// insertionSort
{
    const insertionSort = arr => {
        if (arr.length < 2) return arr;
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;
            for (; j >= 0; j--) {
                if (arr[j] > current) {
                    arr[j + 1] = arr[j]
                } else break;
            }
            arr[j + 1] = current;
        }
        return arr;

    }
    console.log('3: insertionSort', JSON.stringify(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])));
    console.log('insertionSort   ', JSON.stringify(insertionSort([8, 2, 1, 3, 5])));//[1,2,3,5,8]
    console.log('insertionSort   ', JSON.stringify(insertionSort([0])));//[0]
    console.log('insertionSort   ', JSON.stringify(insertionSort([8, 1])));//[1,8]
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
    console.log('selectionSort   ', JSON.stringify(selectionSort([8, 2, 1, 3, 5])));//[1,2,3,5,8]
    console.log('selectionSort   ', JSON.stringify(selectionSort([0])));//[0]
    console.log('selectionSort   ', JSON.stringify(selectionSort([8, 1])));//[1,8]
}
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