//49. Group Anagrams
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
    const encode = str => {
        let arr = Array(26).fill('0');
        for (let c of str) {
            let code = c.charCodeAt(0) - 'a'.charCodeAt(0);
            arr[code]++;
        }
        return arr.join(','); // must use ','
    }
    var groupAnagrams = function (strs) {
        if (strs.length < 2) return [[strs[0]]];
        let map = new Map();
        for (let s of strs) {
            let key = encode(s);
            console.log('key=', key);
            if (map.has(key)) {
                let list = map.get(key);
                map.set(key, [...list, s]);
            } else map.set(key, [s])
        }
        return [...map.values()]
    }
}