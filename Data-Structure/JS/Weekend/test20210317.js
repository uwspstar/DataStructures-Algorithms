const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
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