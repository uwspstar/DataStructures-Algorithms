//179. Largest Number
/*
Given a list of non-negative integers nums, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.

Input: nums = [10,2]
Output: "210"
 
Input: nums = [3,30,34,5,9]
Output: "9534330"

//having a custom comparator, where instead of just comparing the string value of the two items, the combined string value of the two items can be compared instead.
//return 1 if str(a) + str(b) > str(b) + str(a) else -1

*/
{
    var largestNumber = function (nums) {

        const compare = (a, b) => {
            let x = +(a.toString() + b.toString());
            let y = +(b.toString() + a.toString());
            return y > x ? 1 : -1; //desc
        }

        nums.sort(compare);

        return nums[0] === 0 ? '0' : nums.join('');
    }
}