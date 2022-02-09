// 127. Word Ladder
/*
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
*/
{
    var ladderLength = function (beginWord, endWord, wordList) {

        let set = new Set(wordList);
        let q = [[beginWord, 1]]; //q = [["hit", 1]];

        while (q.length > 0) {
            //q = [["hit", 1]];
            let [word, seq] = q.shift();
            //q = [];
            if (word === endWord) return seq; // matched , returned 
            
            for (let i = 0; i < word.length; i++) { // "hit".length = 3
                for (let j = 0; j < 26; j++) {  // loop 26 
                    let newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                    if (set.has(newWord)) {
                        set.delete(newWord);
                        // all changing 1 letter words (is the words in the set) in the same level, and added to the queue, 
                        // so step word === endWord will check it
                        q.push([newWord, seq + 1]);
                    }
                }
            }
        }
        return 0;
    };
}