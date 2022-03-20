// 724. Find Pivot Index
/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Example 1:

Input: nums = [1,7,3,6,5,6] Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
*/
{
    var removeDuplicateLetters = function (s) {
        const vis = new Array(26).fill(0);
        const num = _.countBy(s);

        const sb = new Array();
        for (let i = 0; i < s.length; i++) {
            const ch = s[i];
            if (!vis[ch.charCodeAt() - 'a'.charCodeAt()]) {
                while (sb.length > 0 && sb[sb.length - 1] > ch) {
                    if (num[sb[sb.length - 1]] > 0) {
                        vis[sb[sb.length - 1].charCodeAt() - 'a'.charCodeAt()] = 0;
                        sb.pop();
                    } else {
                        break;
                    }
                }
                vis[ch.charCodeAt() - 'a'.charCodeAt()] = 1;
                sb.push(ch);
            }
            num[ch]--;
        }
        return sb.join('');
    };
    // Smallest K-Length Subsequence With Occurrences of a Letter

}