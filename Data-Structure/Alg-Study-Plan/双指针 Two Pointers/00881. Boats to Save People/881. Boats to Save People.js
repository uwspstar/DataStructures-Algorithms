// 881. Boats to Save People
/*
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

Example 1:
Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Example 2:
Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

Example 3:
Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
*/
{
    // Greedy, Two Pointers
    // Return the minimum number of boats to carry every given person.
    // Let people[i] to the currently lightest person, and people[j] to the heaviest.

    // Then, as described above, if the heaviest person can share a boat with the lightest person (if people[j] + people[i] <= limit) then do so; otherwise, the heaviest person sits in their own boat.

    var numRescueBoats = function (arr, limit) {
        //sort by weight
        arr.sort((a, b) => a - b);
        let i = 0, j = arr.length - 1;
        let ans = 0;
        while (i <= j) {
            ans++;
            if (arr[i] + arr[j] <= limit) {
                i++;
            }
            j--;
        }
        return ans
    };

    // Swap Adjacent in LR String (M)
    // Transpose Matrix (E)
    // Find the Kth Largest Integer in the Array (M)
}
