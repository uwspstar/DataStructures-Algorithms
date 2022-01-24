//520. Detect Capital
/*
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.


Example 1:
Input: word = "USA"
Output: true

Example 2:
Input: word = "FlaG"
Output: false
*/
var detectCapitalUse = function (word) {
    let N = word.length;
    if (N === 1) return true; // very important

    if (word[0] !== word[0].toUpperCase()) {
        for (let i = 1; i < N; i++) {
            if (word[i] === word[i].toUpperCase()) return false;
        }
    } else {
        if (word[1] === word[1].toUpperCase()) {
            for (let i = 2; i < N; i++) {
                if (word[i] !== word[i].toUpperCase()) return false;
            }
        } else {
            for (let i = 2; i < N; i++) {
                if (word[i] === word[i].toUpperCase()) return false;
            }
        }

    }
    return true;
};

var detectCapitalUse = function (word) {
    // word[0] === word[0].toUpperCase()
    let condition = false;
    if (word.charCodeAt(0) < 97) {
        condition = true;
    }
    if (condition === false && word.charCodeAt(1) < 97) {
        return false;
    }
    if (word.charCodeAt(1) >= 97) {
        condition = false;
    }
    for (let i = 1; i < word.length; i++) {
        if ((word.charCodeAt(i) < 97) !== condition) {
            return false;
        }
    }
    return true;
};