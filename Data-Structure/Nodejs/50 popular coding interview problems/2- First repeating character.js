/*
Given a string str, create a function that returns the first repeating character.
If such character doesn't exist, return the null character '\0'.

Input: str = "inside code" Output: 'i'
Input: str = "programming" Output: 'r'
Input: str = "abcd" Output: '\0'
Input: str = "abba" Output: 'b'
*/
{
    const firstRepeatChar = str => {
        let set = new Set();
        for (let i = 0; i < str.length; i++) {
            if (set.has(str[i])) {
                return str[i];
            } else {
                set.add(str[i]);
            }
        }
        return "";
    }
    console.log(firstRepeatChar('inside code'));//i
    console.log(firstRepeatChar('programming'));//"r"
    console.log(firstRepeatChar('abcd'));//""
    console.log(firstRepeatChar('abba'));//b
}