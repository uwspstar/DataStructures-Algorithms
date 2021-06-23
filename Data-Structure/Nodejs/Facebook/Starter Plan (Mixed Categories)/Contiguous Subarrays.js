//Contiguous Subarrays
/*
You are given an array arr of N integers. For each index i, you are required to determine the number of contiguous subarrays that fulfill the following conditions:

The value at index i must be the maximum element in the contiguous subarrays, and
These contiguous subarrays must either start from or end on index i.
Signature
int[] countSubarrays(int[] arr)

Input
Array arr is a non-empty list of unique integers that range between 1 to 1,000,000,000
Size N is between 1 and 1,000,000
Output
An array where each index i contains an integer denoting the maximum number of contiguous subarrays of arr[i]

Example:
arr = [3, 4, 1, 6, 2]
output = [1, 3, 1, 5, 1]
Explanation:
For index 0 - [3] is the only contiguous subarray that starts (or ends) with 3, and the maximum value in this subarray is 3.
For index 1 - [4], [3, 4], [4, 1]
For index 2 - [1]
For index 3 - [6], [6, 2], [1, 6], [4, 1, 6], [3, 4, 1, 6]
For index 4 - [2]
So, the answer for the above input is [1, 3, 1, 5, 1]
*/
{
    function countSubarrays(arr) {
        //arr = [3, 4, 1, 6, 2]
        //output = [1, 3, 1, 5, 1]
        if (arr.length === 0) return [];
        if (arr.length === 1) return [1];

        let res = [1]; //first
        const getCountSubarray = (arr, index) => {
            let curr = arr[index];
            let left = index - 1;
            let right = index + 1;
            let count = 1; //self also count
            while (left >= 0 && curr > arr[left]) {
                count++;
                left--;
            }
            while (right < arr.length && curr > arr[right]) {
                count++;
                right++;
            }
            console.log('count=',count,'arr=',arr, 'index=', index);
            return count;
        }
        //between first and last
        for (let i = 1; i < arr.length - 1; i++) {
            res.push(getCountSubarray(arr, i));
        }
        res.push(1);//last 

        //console.log('res=',res)
        return res;
    }
    console.log('countSubarrays = ',countSubarrays([3, 4, 1, 6, 2]));
}
{
    const countSubarrays = arr => {
        // initialization: this holds true because each element is its own subarray.
        let ans = new Array(arr.length).fill(1);

        // walk through 1..n element
        // go left and right from current element checking conditions in while loop
        for (let i = 0; i < arr.length; i++) {
            /** maintenance: if it holds true before an iteration of a loop, then it 
             *  holds true before the next iteration of the loop.
             * i = 0, current = arr[0], left=-1, right=1 
             */
            let curr = arr[i];
            let left = i - 1;
            let right = i + 1;

            // termination: compare each element to the left of 'current' element to 'current' and 
            // increment ans[i] (counter) till neither conditions are met.
            while (left >= 0 && curr > arr[left]) {
                ans[i]++;
                left--;
            }

            // termination: compare each element to the right of 'current' element to 'current' and 
            // increment ans[i] (counter) till neither conditions not met.
            while (right < arr.length && curr > arr[right]) {
                ans[i]++;
                right++;
            }
        }
        return ans;
    }
    console.log(countSubarrays([3, 4, 1, 6, 2]));
}