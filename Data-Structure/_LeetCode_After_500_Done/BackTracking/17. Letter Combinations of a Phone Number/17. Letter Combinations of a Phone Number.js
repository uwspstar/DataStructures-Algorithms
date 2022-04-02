//https://leetcode.com/problems/letter-combinations-of-a-phone-number/solution/

//17. Letter Combinations of a Phone Number
/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Input: digits = "23" 
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Input: digits = "" Output: []

Input: digits = "2" Output: ["a","b","c"]


In this particular problem, the length of the input is extremely small, 0 <= digits.length <= 4. With such small input sizes, we can safely assume that a brute force solution in which we generate all combinations of letters will be accepted.

Whenever you have a problem where you need to generate all combinations/permutations of some group of letters/numbers, the first thought you should have is backtracking. If you're new to backtracking, check out our backtracking explore card. Backtracking algorithms can often keep the space complexity linear with the input size.

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
    // Time complexity: O(4^N * N) where N is the length of digits
    // Space complexity: O(N), where N is the length of digits

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
                //取过的元素会重复取，for就是从0开始！
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
{
    var letterCombinations = function (digits) {
        if (digits.length === 0) return [];

        let map = new Map();
        map.set('2', 'abc');
        map.set('3', 'def');
        map.set('4', 'ghi');
        map.set('5', 'jkl');
        map.set('6', 'mno');
        map.set('7', 'pqrs');
        map.set('8', 'tuv');
        map.set('9', 'wxyz');

        let res = [];
        let path = [];

        let k = digits.length;
        let nums = [];

        for (let digit of digits) {
            nums.push(map.get(digit));
        }
        //nums= [ 'abc', 'def' ]
        console.log('nums=', nums);

        const backTracking = (idx) => {
            if (path.length === k) {
                let tmp = path.join('');
                res.push(tmp);
            } else {
                let str = nums[idx];

                console.log('idx=', idx, 'str=', str);
                //取过的元素会重复取，for就是从0开始！
                for (let i = 0; i < str.length; i++) {
                    path.push(str[i]);
                    console.log('str[i]=', str[i], 'path=', path, 'idx + 1 =', idx + 1);
                    backTracking(idx + 1);
                    path.pop();
                }
            }
        }

        backTracking(0);

        return res;
    };

    console.log('res=', letterCombinations("23")); å
}