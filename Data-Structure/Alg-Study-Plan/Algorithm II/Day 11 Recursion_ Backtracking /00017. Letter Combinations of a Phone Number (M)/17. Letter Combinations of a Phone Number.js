//17. Letter Combinations of a Phone Number
/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/
{
    // Time complexity: O(4^N * N) where N is the length of digits
    // Space complexity: O(N), where N is the length of digits

    const backTrack = (idx, path, digits, res, nums) => {
        if (path.length === digits.length) {
            res.push([...path].join(''));

        } else {
            //idx，就是用来遍历digits的（题目中给出数字字符串），同时idx也表示树的深度       
            let str = nums[idx];

            for (let i = 0; i < str.length; i++) {
                path.push(str[i]);
                backTrack(idx + 1, path, digits, res, nums);
                path.pop();
            }
        }
    }

    const digitsToLetter = (digits) => {
        let nums = [];
        const map = new Map();
        map.set('2', 'abc');
        map.set('3', 'def');
        map.set('4', 'ghi');
        map.set('5', 'jkl');
        map.set('6', 'mno');
        map.set('7', 'pqrs'); // 4 digits
        map.set('8', 'tuv');
        map.set('9', 'wxyz'); // 4 digits 

        for (let i = 0; i < digits.length; i++) {
            nums.push(map.get(digits[i]));
        }

        return nums;
    }

    var letterCombinations = function (digits) {
        if (digits.length === 0) return [];

        let res = [];
        let path = [];

        // input digits covert to posible letters 
        let nums = digitsToLetter(digits);

        console.log('nums=', nums);

        backTrack(0, path, digits, res, nums);

        return res;
    };
    //Generate Parentheses
    //Binary Watch
}