/*
You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] 
without any duplicates. You are allowed to swap any two elements. 
You need to find the minimum number of swaps required to sort the array in ascending order.

For example, given the array  we perform the following steps:

i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
It took  5 swaps to sort the array.
*/


// Complete the minimumSwaps function below.
function minimumSwaps(arr) {

let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === i + 1) {
                    const temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = arr[j];
                    swaps++;
                }
            }
        }
    }
    return swaps;
}
