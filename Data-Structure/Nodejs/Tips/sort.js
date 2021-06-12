// sort even and odd
//Sort O(NlogN)
{
    var sortArrayByParity = function (nums) {
        nums.sort((a, b) => a % 2 - b % 2);
        return nums
    };
}
//sort Math.abs()