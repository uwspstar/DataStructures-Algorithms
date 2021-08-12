/*
Apple:

Create a class that initializes with a list of numbers and has one method called sum. sum should take in two parameters, start_idx and end_idx and return the sum of the list from start_idx (inclusive) to end_idx` (exclusive).

You should optimize for the sum method.
*/
class ListFastSum {
    constructor(nums) {
        this.nums = nums;
        this.total = 0;
    }
    sum(start, end) {
        for (let i = start; i < end; i++) {
            this.total += this.nums[i];
        }
        return this.total;
    }
}
let lfs = new ListFastSum([1, 2, 3, 4, 5, 6, 7]);
console.log(lfs.sum(2, 5)); // 12
console.log((new ListFastSum([1, 2, 3, 4, 5, 6, 7])).sum(2, 5)); // 12