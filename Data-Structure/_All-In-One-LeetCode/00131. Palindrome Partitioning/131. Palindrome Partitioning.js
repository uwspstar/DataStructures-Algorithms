//131. Palindrome Partitioning
/*
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.
*/
var partition = function (s) {
    let res = [];
    let path = [];

    const isPalindrome = (s) => {
        return s === s.split('').reverse().join('');
    }

    const backTracking = (idx) => {
        if (idx >= s.length) {
            console.log(path, idx, s.length);
            res.push(path.slice());//deep copy string

        } else {
            for (let i = idx; i < s.length; i++) {
                let str = s.substring(idx, i + 1);
                if (isPalindrome(str)) {
                    path.push(str);
                    backTracking(i + 1);
                    path.pop();
                }
            }
        }
    }

    backTracking(0);

    return res;
};