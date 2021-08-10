/*asked by AirBNB:

Given a sorted list of positive numbers, find the smallest positive number that cannot be a sum of any subset in the list.

Example:
Input: [1, 2, 3, 8, 9, 10]
Output: 7
Numbers 1 to 6 can all be summed by a subset of the list of numbers, but 7 cannot.

def findSmallest(nums):
  # Fill this in.

print findSmallest([1, 2, 3, 8, 9, 10])
# 7
*/

//t: O(N) s:O(1)
const findSmallest =  arr => {
    let res = 1; // teh smallest num

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > res) return res;
        res += arr[i];
    }

    return res;
}

console.log('res =', findSmallest([1, 2, 3, 8, 9, 10])); //