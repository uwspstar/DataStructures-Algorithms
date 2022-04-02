// 202. Happy Number
/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/
{
    var isHappy = function (n) {
        if (n === 1) return true;
        if (n <= 3) return false;

        let set = new Set();

        const getNewNum = n => {
            let arr = n.toString().split('');
            let newNum = 0;
            for (let i = 0; i < arr.length; i++) {
                let num = parseInt(arr[i]);
                newNum += (num * num);
            }
            return newNum;
        }

        while (n) {
            if (n === 1) return true;
            if (set.has(n)) return false; // has same one checked before
            set.add(n);
            n = getNewNum(n);
        }

        return true;
    }
    // Ugly Number (E)
    // Sum of Digits of String After Convert (E)
}