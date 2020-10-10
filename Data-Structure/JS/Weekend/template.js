const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]
//bubbleSort
{
    console.log('1: bubbleSort', JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));
}
//selectionSort
{

    console.log('2: selectionSort', JSON.stringify(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])));
}
//insertionSort
{

    console.log('3: insertionSort', JSON.stringify(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])));

}
//mergeSort
{

    console.log('4: mergeSortHelp', JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));

}
//quickSort
{

    console.log('5: quickSortHelp', JSON.stringify(quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
}
// reverseInteger
{

    console.log('1: reverseInteger', JSON.stringify(reverseInteger(-321))); // -123
}
// buySellStock
{

    console.log('2: buySellStock', JSON.stringify(buySellStock([9, 11, 8, 5, 7, 10]))); // 5
}
// fibEndCall - tail call
{
    console.log('3: fibEndCall', JSON.stringify(fibEndCall(45))); //1, 1, 2, 3, 5,..., 1134903170
}
// fibonacci - memo
{
    console.log('4: fibonacci', JSON.stringify(fibonacci(45))); //1, 1, 2, 3, 5,..., 1134903170
}
// isBalance
{

    console.log('5: isBalance: ', JSON.stringify(isBalance("[{()()}]")));//true
    console.log('5: isBalance: ', JSON.stringify(isBalance("[[[]")));//false
}
// isPalindrome
{
    console.log('6: isPalindrome', JSON.stringify(isPalindrome('amanaplanacanalpanama'))) // true
}
// sortColor
{
    console.log('7: sortColor', JSON.stringify(sortColor([0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1])));
}
// matrixSpiral
{
    console.log('8: matrixSpiral', JSON.stringify(matrixSpiral(arr)));
    // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
}
//
// LinkList
{
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null
        }
    }
    class LinkList {
        constructor() {
            this.head === null;
        }
        insert() { }
        reverse() { }
        findMiddle() { }
        findLastKth(k) { }

    }
}
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
        traversal() { }
        search(value)
    }

}
