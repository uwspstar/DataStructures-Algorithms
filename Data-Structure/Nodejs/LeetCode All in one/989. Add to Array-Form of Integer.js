//989. Add to Array-Form of Integer
/*
The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

Input: num = [1,2,0,0], k = 34 Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Input: num = [2,7,4], k = 181 Output: [4,5,5]
Explanation: 274 + 181 = 455

Input: num = [2,1,5], k = 806 Output: [1,0,2,1]
Explanation: 215 + 806 = 1021

Input: num = [9,9,9,9,9,9,9,9,9,9], k = 1 Output: [1,0,0,0,0,0,0,0,0,0,0]
Explanation: 9999999999 + 1 = 10000000000
*/

{
    var addToArrayForm = function (num, k) {
        let N = num.length;
        let cur = k;
        let ans = [];
        let i = N;
        while (--i >= 0 || cur > 0) {
            if (i >= 0) {
                cur += num[i];
            }
            ans.push(cur % 10);
            cur = parseInt(cur / 10);
        }
        ans.reverse();
        return ans;
    };
    //Longest Turbulent Subarray
    //Divide Array in Sets of K Consecutive Numbers
    //Find the Minimum Number of Fibonacci Numbers Whose Sum Is K
}
{
    var addToArrayForm = function (num, k) {
        let res = [];
        let sum = k;
        for (let i = num.length - 1; i >=0 || sum > 0; i--) {
            if (i >= 0) {
                sum = sum + num[i];
            } 
            let n =  sum % 10;
            sum = parseInt(sum / 10);
            res.unshift(n);
        }
        if (sum > 0) res.unshift(sum);
        return res;
    }
    console.log(addToArrayForm([2,1,5],806));//[1,0,2,1]
    console.log(addToArrayForm([0],10000));//[1,0,0,0,0]
}