const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];


console.log('quickSortHelp', quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7]));
console.log('mergeSortHelp', mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7]));
console.log('insertionSort', insertionSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log('selectionSort', selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log('bubbleSort', bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));