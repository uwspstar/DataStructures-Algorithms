/*
If version1 > version2 return 1.
If version1 < version2 return -1

Input: version1 = "1.0.33" version2 = "1.0.27" Output: 1 
#version1 > version2

Input: version1 = "0.1" version2 = "1.1" Output: -1
#version1 < version2

Input: version1 = "1.01" version2 = "1.001" Output: 0
#ignore leading zeroes, 01 and 001 represent the same number. 

Input: version1 = "1.0" version2 = "1.0.0" Output: 0
#version1 does not have a 3rd level revision number, which defaults to "0"

Split version1 and version2 using . as the delimiter and "convert them to int". Loop through the two lists, comparing the numbers, returning if one is greater than the other.

*/

const compareVersion = (v1, v2) => {
    if (v1.length === 0) return v2.length > 0 ? -1 : 0;
    if (v2.length === 0) return v1.length > 0 ? 1 : 0;
    let arr1 = v1.split('.'); // [1, 0]
    let arr2 = v2.split('.'); // [1, 0, 0]

    let len = Math.max(arr1.length, arr2.length);
    let len1 = arr1.length;
    let len2 = arr2.length;

    for (let i = 0; i < len; i++) {
        let a = i < len1 ? parseInt(arr1[i]) : 0;
        let b = i < len2 ? parseInt(arr2[i]) : 0;

        // console.log('len=', len, 'len1=', len1, 'len2=', len2, 'a=', a, 'b=', b);
        if (a > b) return 1;
        if (a < b) return -1;
    }

    return 0;

}
console.log('compareVersion', compareVersion("1.01", "1.001")); //0
console.log('compareVersion', compareVersion("1.0", "1.0.0")); //0
console.log('compareVersion', compareVersion("1.0.33", "1.0.27")); // 1
console.log('compareVersion', compareVersion("0.1", "1.1")); // -1