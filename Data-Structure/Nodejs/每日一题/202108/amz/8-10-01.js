/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
Example 2:

Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]

var relativeSortArray = function(arr1, arr2) {
    let res = [];
    let tmp = [];
    let map = new Map();

    for (let i = 0; i < arr1.length; i++) {
        let idx = arr2.indexOf(arr1[i]);
        if (idx < 0){
            tmp.push(arr1[i]);
        } else {
            if (map.has(arr1[i])) {
                map.set( arr1[i] , 1 + map.get(arr1[i]));
            }else {
                 map.set( arr1[i] , 1)
            }
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let key = arr2[i];
        let val = map.get(key);
        while (val > 0) {
           res.push(key);
            val--;
        }
    }

    tmp.sort((a, b) => a - b);
    res.push(...tmp);

    return res;
};
*/