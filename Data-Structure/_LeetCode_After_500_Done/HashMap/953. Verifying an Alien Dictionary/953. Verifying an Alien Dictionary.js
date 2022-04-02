/*

In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
*/
var isAlienSorted = function (words, order) {

    const helper = (w1, w2) => {
        for (let i = 0, j = 0; i < w1.length && j < w2.length; i++, j++) {

            let a = order.indexOf(w1[i]);
            let b = order.indexOf(w2[j]);

            if (a > b) {
                return false;
            } else if (a < b) {
                return true;
            }
        }

        return w1.length <= w2.length;
    }

    for (let i = 1; i < words.length; i++) {

        if (!helper(words[i - 1], words[i])) return false;
    }

    return true;
};