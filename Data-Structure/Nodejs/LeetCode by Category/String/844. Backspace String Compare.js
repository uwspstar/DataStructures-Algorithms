//844. Backspace String Compare
/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Input: s = "ab#c", t = "ad#c" Output: true
Explanation: Both s and t become "ac".
 
Input: s = "ab##", t = "c#d#" Output: true
Explanation: Both s and t become "".

Input: s = "a##c", t = "#a#c" Output: true
Explanation: Both s and t become "c".

Input: s = "a#c", t = "b" Output: false
Explanation: s becomes "c" while t becomes "b".
*/
{
    var backspaceCompare = function (S, T) {
        const backspaceHelper = (str) => {
            let arr = [];
            for (let char of str) {
                (char === '#') ? arr.pop() : arr.push(char);
            }
            return arr.join("");
        }

        return backspaceHelper(S) === backspaceHelper(T);
    };
    //Crawler Log Folder
}