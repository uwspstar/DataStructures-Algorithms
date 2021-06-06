//1065. Index Pairs of a String
/*
Given a text string and words (a list of strings), return all index pairs [i, j] so that the substring text[i]...text[j] is in the list of words.

Input: text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"] Output: [[3,7],[9,13],[10,17]]
Example 2:

Input: text = "ababa", words = ["aba","ab"] Output: [[0,1],[0,2],[2,3],[2,4]]
Explanation: 
Notice that matches can overlap, see "aba" is found in [0,2] and [2,4].
*/
{
    //JS indexOf take seconde input
    //indexOf(searchElement)
    //indexOf(searchElement, fromIndex)
    
    //All strings contains only lowercase English letters.
    //It's guaranteed that all strings in words are different.
    var indexPairs = function (text, words) {
        let res = [];
        for (let word of words) {
            let len = word.length;
            let idx = text.indexOf(word);
            while (idx !== -1) {
                res.push([idx, idx + len - 1]);
                //JS indexOf take seconde input
                idx = text.indexOf(word, idx + 1);
            }
        }
        res.sort((a, b) => {
            return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1];
        })
        return res;
    };
    //Flip Game
    //Concatenated Words
    //Evaluate the Bracket Pairs of a String
}