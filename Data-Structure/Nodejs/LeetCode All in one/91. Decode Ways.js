//91. Decode Ways
/*
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.
*/
{
    //Decode Ways II
    var numDecodings = function (str) {
        if (str[0] == '0') return 0;
        if (str.length <= 1) return 1;

        let memo = new Map();

        const decodings = (s) => {
            if (s[0] == '0') return 0;
            if (s.length <= 1) return 1;

            if (memo.has(s)) {
                return memo.get(s);
            }

            let prefix1 = s.slice(0, 1);
            let suffix1 = s.slice(1);
            let prefix2 = s.slice(0, 2);
            let suffix2 = s.slice(2);

            let count = 0;

            count += decodings(suffix1)
            if (+(prefix2) <= 26) {
                count += decodings(suffix2);
            }
            memo.set(s, count);
            return count;
        }
        return decodings(str);
    }
}