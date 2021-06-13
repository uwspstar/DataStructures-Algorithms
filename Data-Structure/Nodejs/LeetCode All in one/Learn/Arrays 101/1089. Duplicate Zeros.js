//1089. Duplicate Zeros
/*
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

Example 1:

Input: [1,0,2,3,0,4,5,0] Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:

Input: [1,2,3] Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]
*/

{
    //Do the above modifications to the input array in place, do not return anything from your function.
    var duplicateZeros = function (arr) {
        let zeroCount = 0;
        let len = arr.length - 1;
        for (let left = 0; left <= len - zeroCount; left++) {
            if (arr[left] == 0) {
                if (left == len - zeroCount) {
                    arr[len] = 0;
                    len -= 1;
                    break;
                }
                zeroCount++;
            }
        }
        let last = len - zeroCount;
        for (let i = last; i >= 0; i--) {
            if (arr[i] == 0) {
                arr[i + zeroCount] = 0;
                zeroCount--;
                arr[i + zeroCount] = 0;
            } else {
                arr[i + zeroCount] = arr[i];
            }
        }
    };
    //Count Servers that Communicate
    //Number of Good Pairs
    //Form Array by Concatenating Subarrays of Another Array

    console.log(duplicateZeros[1, 0, 2, 3, 0, 4, 5, 0])
    console.log(duplicateZeros[1, 2, 3]);
    console.log(duplicateZeros[0, 1, 7, 6, 0, 2, 0, 7]);
    console.log(duplicateZeros[8, 5, 0, 9, 0, 3, 4, 7]);
}


{  //brute force O(N^2) / O(1)
    var duplicateZeros = function (arr) {
        //[1,0,2,3,0,4,5,0]
        let n = arr.length;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                for (let j = arr.length - 1; j > i; j--) {
                    //console.log(arr[j - 1],arr[j])
                    arr[j] = arr[j - 1];
                }
                //console.log(arr)
                arr[i + 1] = 0;
                i++;
            }
        }
        arr.length = n
    };
    //Count Servers that Communicate
    //Number of Good Pairs
    //Form Array by Concatenating Subarrays of Another Array
}
{
    //brute force O(N) / O(N)
    var duplicateZeros = function (arr) {
        let res = [];
        for (let a of arr) {
            if (a !== 0) {
                res.push(a);
            } else {
                res.push(a);
                res.push(a);
            }
        }
        for (let i = 0; i < arr.length; i++) {
            arr[i] = res[i];
        }
    };
}