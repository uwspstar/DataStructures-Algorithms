//852. 山脉数组的峰顶索引
// 852. Peak Index in a Mountain Array
/*
链接：https://leetcode-cn.com/problems/peak-index-in-a-mountain-array

符合下列属性的数组 arr 称为 山脉数组 ：
arr.length >= 3
存在 i（0 < i < arr.length - 1）使得：
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
给你由整数组成的山脉数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i 。

输入：arr = [0,1,0] 输出：1
输入：arr = [0,2,1,0] 输出：1
*/

// template 2
const peakIndexInMountainArray = arr => {
    const N = arr.length;
    let left = 1;
    let right = N - 2
    let res = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) /2 );
        if (arr[mid] > arr[mid + 1]) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return res;
};

// template 1
const peakIndexInMountainArray = arr => {
    const N = arr.length;
    let left = -1;
    let right = N
    let res = -1;

    while (left + 1 != right) {
        const mid = Math.floor((left + right) /2 );
        
        if (arr[mid] > arr[mid + 1]) {
            res = mid;
            right = mid;
        } else {
            left = mid;
        }
    }
    return res;
};