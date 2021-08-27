/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Example 1: Input: s = "anagram", t = "nagaram" Output: true
Example 2: Input: s = "rat", t = "car" Output: false
*/

var isAnagram = function (str1, str2) {
    if (str1.length !== str2.length) return false;
    //s and t consist of lowercase English letters
    if (str1 === str2) return true;

    let map = {};
    let len = str1.length;

    for (let i = 0; i < len; i++) {
        let index = str1.charCodeAt(i);
        map[index] = (map[index] || 0) + 1;
    }
    for (let i = 0; i < len; i++) {
        let index = str2.charCodeAt(i);
        if (!map[index]) return false;
        map[index]--;
    }
    return true;
};

//Palindrome Permutation
//s and t consist of lowercase English letters
var isAnagram = function (str1, str2) {
    if (str1.length !== str2.length) return false;
    if (str1 === str2) return true;

    let map = new Map();// should faster than {};
    let len = str1.length;

    for (let i = 0; i < len; i++) {
        let key1 = str1[i];
        let key2 = str2[i];
        map.set(key1, map.has(key1) ? map.get(key1) + 1 : 1);
        map.set(key2, map.has(key2) ? map.get(key2) - 1 : -1);
    }
    for (let key of map.keys()) {
        if (map.get(key) !== 0) return false;
    }
    return true;
};

//Get Watched Videos by Your Friends
//Check Array Formation Through Concatenation
//Sorting the Sentence
