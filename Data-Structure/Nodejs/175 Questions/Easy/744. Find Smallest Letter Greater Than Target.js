//744. Find Smallest Letter Greater Than Target
/*
Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

Note that the letters wrap around.

For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'. 

Input: letters = ["c","f","j"], target = "a" Output: "c" 
Input: letters = ["c","f","j"], target = "c" Output: "f" 
Input: letters = ["c","f","j"], target = "d" Output: "f" 
Input: letters = ["c","f","j"], target = "g" Output: "j" 
Input: letters = ["c","f","j"], target = "j" Output: "c"
*/
{
    var nextGreatestLetter = function (letters, target) {

        if (target < letters[0] || target >= letters[letters.length - 1]) {
            return letters[0]
        }

        let left = 0;
        let right = letters.length - 1;

        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            // found in mid
            if (letters[mid] <= target && letters[mid + 1] > target) {
                return letters[mid + 1];
            }

            if (letters[mid] <= target) { 
                left = mid + 1; 
            } else { 
                right = mid;
            }
        }
        return letters[left + 1];
    };
    //Random Point in Non-overlapping Rectangles
    //Minimum Operations to Reduce X to Zero
    //Maximum Value at a Given Index in a Bounded Array
}