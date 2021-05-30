//17. Letter Combinations of a Phone Number
/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Input: digits = "23" 
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Input: digits = "" Output: []

Input: digits = "2" Output: ["a","b","c"]
*/
{
    const getNums = (arr, digits) => {
        let map = new Map();
        map.set('2', 'abc');
        map.set('3', 'def');
        map.set('4', 'ghi');
        map.set('5', 'jkl');
        map.set('6', 'mno');
        map.set('7', 'pqrs');
        map.set('8', 'tuv');
        map.set('9', 'wxyz');
        let str = '';
        for (let i = 0; i < digits.length; i++) {
            let key = digits[i];
            let val = map.get(key);
            arr.push(val);
        }
    }
    var letterCombinations = function (digits) {
        if (digits.length === 0) return [];
        let res = [];
        let path = [];
        let len = digits.length;
        let nums = []; //exp: ['abc','def']
        getNums(nums, digits);
        const backTrack = (idx) => {
            if (path.length === len) {
                res.push([...path].join(''));
                return;
            } else {
                //idx，就是用来遍历digits的（题目中给出数字字符串），同时idx也表示树的深度。
                let str = nums[idx];
                for (let i = 0; i < str.length; i++) {
                    path.push(str[i]);
                    backTrack(idx + 1);
                    path.pop();
                }
            }
        }
        backTrack(0);// depth
        return res;
    };
    //Generate Parentheses
    //Binary Watch
}
{
    var letterCombinations = function (digits) {
        if (digits.length === 0) return [];
        let res = [];
        let path = [];
        let nums = [];
        const map = new Map();
        map.set('2', 'abc');
        map.set('3', 'def');
        map.set('4', 'ghi');
        map.set('5', 'jkl');
        map.set('6', 'mno');
        map.set('7', 'pqrs');
        map.set('8', 'tuv');
        map.set('9', 'wxyz');
        for (let i = 0; i < digits.length; i++) {
            nums.push(map.get(digits[i]));
        }

        const backTrack = (idx) => {
            if (path.length === digits.length) {
                res.push([...path].join(''));
                return;
            } else {
                //idx，就是用来遍历digits的（题目中给出数字字符串），同时idx也表示树的深度。
                let str = nums[idx];
                for (let i = 0; i < str.length; i++) {
                    path.push(str[i]);
                    backTrack(idx + 1);
                    path.pop();
                }
            }
        }

        backTrack(0);

        return res;
    };
    //Generate Parentheses
    //Binary Watch
}