//268. Missing Number
var missingNumber = function(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}
//Find the Duplicate Number
//Couples Holding Hands