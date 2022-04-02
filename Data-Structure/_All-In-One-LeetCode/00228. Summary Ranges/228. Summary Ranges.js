//228. Summary Ranges
/*
You are given a sorted unique integer array nums.

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
*/
{
    // T : O(n), S: O(1)
    const build = (start, end) => {
        if (start === end) return "" + start;
        return start + "->" + end;
    }
    var summaryRanges = function (nums) {
        //You are given a sorted unique integer array nums.
        let res = [];
        let start = nums[0];
        let end = nums[0];

        for (let i = 1; i <= nums.length; i++) {

            if (nums[i] === nums[i - 1] + 1) {
                end = nums[i];
            } else {
                let str = build(start, end)
                res.push(str);
                end = nums[i]; // was nums[i - 1]
                start = nums[i];
            }
        }
        return res;
    };
}
{
    var summaryRanges = function (nums) {
        let start = null;
        let ret = [];

        if (nums.length === 0) {
            return []
        }

        function make(s, t) {
            if (s === t) {
                return `${s}`
            }

            return `${start}->${t}`
        }

        for (let i = 0; i < nums.length; i++) {
            if (start === null) {
                start = nums[i];
                continue;
            }

            if (nums[i] === nums[i - 1] + 1) {
                continue;
            }

            ret.push(make(start, nums[i - 1]))
            start = nums[i]
        }

        ret.push(make(start, nums[nums.length - 1]))

        return ret;
    };
}