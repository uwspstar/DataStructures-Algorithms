//168. Excel Sheet Column Title
/*
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:
Input: columnNumber = 1
Output: "A"

Example 2:
Input: columnNumber = 28
Output: "AB"

Example 3:
Input: columnNumber = 701
Output: "ZY"
*/
var convertToTitle = function (cn) {
    let res = '';
    let code = 'A'.charCodeAt(0); // 65 , 'a' = 97
    while (cn > 0) {
        cn--;
        res = String.fromCharCode(cn % 26 + code) + res;//String.fromCharCode
        console.log('res=', res);
        cn = parseInt(cn / 26);
    }
    return res;
};