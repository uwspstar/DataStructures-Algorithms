//283. Move Zeroes
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1: Input: nums = [0,1,0,3,12] Output: [1,3,12,0,0]
Example 2: Input: nums = [0] Output: [0]
*/

{
    // T : O(N)
    // S : O(1)
    var swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    var moveZeroes = function (nums) {
        let p = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                swap(nums, i, p);
                p++;
            }
        }
        return nums;
    };
    console.log('moveZeroes=', JSON.stringify(moveZeroes([0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1])));
    //Array Nesting
    //Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
    //Check If Array Pairs Are Divisible by k
    //Longest Substring with At Most Two Distinct Characters
    //Range Sum of Sorted Subarray Sums
    //Rotating the Box
}
{
    // move 0, on left, 1 on right, in place
    // T: O(N) 
    // S: O(1)
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    const sort01 = arr => {
        if (arr.length < 2) return arr;
        let p = -1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                p++;
                swap(arr, i, p);
            }
        }
        return arr;
    }
    console.log('sort01=', JSON.stringify(sort01([0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1])));

}
{
    //75. Sort Colors : 3 way partition (Dutch National Flag problem)
    //Input: nums = [2,0,2,1,1,0] Output: [0,0,1,1,2,2]
    // T: O(N) 
    // S: O(1)

    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    var sortColors = function (nums) {
        let p0 = 0;
        let curr = 0;
        let p2 = nums.length - 1;
        while (curr <= p2) { // < and ==
            if (nums[curr] === 2) { // push 2 to left
                swap(nums, p2, curr);
                p2--;
            } else if (nums[curr] === 0) { // push 0 and 1 to right
                swap(nums, curr, p0);
                curr++;
                p0++;
            } else {
                curr++;
            }
        }
        return nums;
    }

    console.log('sortColors = ', JSON.stringify(sortColors([2, 0, 1, 2, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1])));

}
{
    //quickSort
    //# 快速排序就是个二叉树的前序遍历，归并排序就是个二叉树的后序遍历.
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    // classic quicksort 
    // T : O(NlogN)
    // S : O(1)
    const quickSortHelp = arr => {

        if (arr.length < 2) return arr; //基线条件

        const getPivotIndex = (arr, low = 0, high = arr.length - 1) => {
            let pi = low;
            let pivot = arr[high];
            for (let i = low; i <= high; i++) {
                if (arr[i] < pivot) { // put small on left
                    swap(arr, i, pi);
                    pi++;
                }
            }
            swap(arr, high, pi);
            return pi;
        }

        const quickSort = (arr, low = 0, high = arr.length - 1) => {
            if (arr.length < 2) return arr; //基线条件

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
{
    // random quickSort, find a random number first between index [1, n - 2], 
    // then swap the random number with the last one, index n - 1
    // do classic quickSort

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    const quickSortHelp = arr => {

        if (arr.length < 2) return arr; //基线条件

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
            if (arr.length < 2) return arr; //基线条件

            if (low < high) {
                let i = getRandomInt(low, high);
                //console.log('i=', i, 'low=', low, 'high - 1 =>', high - 1);
                swap(arr, i, high);
                let pi = getPivotIndex(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
            return arr;
        }
        return quickSort(arr);
    }
    console.log('Random - quickSort', JSON.stringify(quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
}