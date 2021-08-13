// 49. Group Anagrams
/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/
{
    var groupAnagrams = function (strs) {

        if (strs.length < 2) return [[strs[0]]];

        let map = new Map();
        
        for (let s of strs) {
            let key = s.split('').sort().join('');
            if (map.has(key)) {
                let list = map.get(key);
                console.log(key, list)
                map.set(key, [...list, s])
            } else {
                map.set(key, [s])
            }
        }
        return [...map.values()];
    };
}