// 13. Roman to Integer
/*
13. Roman to Integer
Easy

3651

257

Add to List

Share
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III" Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII" Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV" Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
{

    var romanToInt = function (s) {
        if (s.length === 0) return 0
        let map = new Map();
        map.set("I", 1).set("V", 5).set("X", 10).set("L", 50).set("C", 100).set("D", 500).set("M", 1000);

        let res = map.get(s[s.length - 1]);

        // backward
        for (let i = s.length - 2; i >= 0; i--) {
            if (map.get(s[i]) < map.get(s[i + 1])) {
                res = res - map.get(s[i]);
            } else {
                res = res + map.get(s[i]);
            }
        }
        return res;
    };
}