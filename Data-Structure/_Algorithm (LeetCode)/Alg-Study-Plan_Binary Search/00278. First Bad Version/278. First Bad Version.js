// 278. First Bad Version
/*
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
*/
{
    var solution = function (isBadVersion) {
        return function (n) {

            let left = 1;
            let right = n;
            while (left < right) {
                let mid = parseInt(left + (right - left) / 2);

                if (isBadVersion(mid)) {// ggg gb bbbbb
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            return left;
        }
    };

    // Single Element in a Sorted Array
    // K-th Smallest Prime Fraction
    // Find the Index of the Large Integer
    // Find Minimum in Rotated Sorted Array II (H)
    // Find Two Non-overlapping Sub-arrays Each With Target Sum (H)
    // Minimum Interval to Include Each Query (H)
}