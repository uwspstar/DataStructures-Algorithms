// /524. Longest Word in Dictionary through Deleting
/*
Given a string s and a string array dictionary, return the longest string in the dictionary that can be formed by deleting some of the given string characters. If there is more than one possible result, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

 

Example 1:

Input: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"] Output: "apple" 

Example 2:
Input: s = "abpcplea", dictionary = ["a","b","c"] Output: "a"
*/
{
    //brute force
    var findLongestWord = function(s, arr) {
        arr.sort((a, b) => b.length -  a.length);
        console.log(arr);
        arr.length = arr.length - s.length;
        console.log(arr);

    }; 

    console.log(findLongestWord('abpcplea', ["a","b","c"]));
    
}