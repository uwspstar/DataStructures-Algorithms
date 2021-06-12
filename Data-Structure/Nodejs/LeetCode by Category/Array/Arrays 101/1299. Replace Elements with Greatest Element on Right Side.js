//1299. Replace Elements with Greatest Element on Right Side
/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Input: arr = [17,18,5,4,6,1] Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Example 2:

Input: arr = [400] Output: [-1]
Explanation: There are no elements to the right of index 0.
*/
{  //brute force
    var replaceElements = function (arr) {
        if (arr.length < 2) return [-1];

        const getNextMaxValueIndex = (idx, arr) => {
            let p = idx;
            for (let i = idx; i < arr.length; i++) {
                if (arr[p] < arr[i]) {
                    p = i;
                }
            }
            return p;
        }

        for (let i = 0; i < arr.length; i++) {

            let currIdx = i;

            let nextMaxValueIndex = getNextMaxValueIndex(currIdx + 1, arr);

            while (i < nextMaxValueIndex) {
                arr[i] = arr[nextMaxValueIndex];
                i++; // when finished while loop, i need to back one step
            }
            i--;  // i back one step/

        }
        arr[arr.length - 1] = -1;
        return arr;
    };
    //High Five
    //Special Positions in a Binary Matrix
    //Get Biggest Three Rhombus Sums in a Grid
}