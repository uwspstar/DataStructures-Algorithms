/*
Given a list of "unique numbers", generate all possible subsets "without duplicates". This includes the empty set as well.

We can break down this problem into generating subsets for a smaller portion of the list first. Given that generating subsets for nums will have all subsets created from nums[0:1], we can start generating the subsets for everything up to the first index, then the second index, then the third index etc.

Note that all subsets for nums[0:1], is just [[], [nums[0]]. Now also note that given all subsets of nums[0: i], to generate all subsets of nums[0: i + 1] is just all subsets of nums[0: i], and all subsets of nums[0: i] appended with nums[i + 1].

Given that intuition, our answer just needs to iterate through all input numbers, with the result starting off as [[]], and then take the results so far, iterate through everything and append everything with the current number iterated through so far.

*/

const generateAllSubsets = (nums) => {
    if (nums.length === 0) return [];
    if (nums.length === 1) return [[], nums[0]];
    let result = [[], nums];
    for (let i = 0; i < nums; i++) {
        result.push(nums[i]);
    }
}


console.log('generateAllSubsets', generateAllSubsets([1, 2, 3]))
// [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]