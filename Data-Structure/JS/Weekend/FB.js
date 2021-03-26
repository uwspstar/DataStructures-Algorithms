//a = a + b
//b = a - b;
//a = a - b;
//array
//13. 罗马数字转整数
//https://leetcode-cn.com/problems/roman-to-integer/
{
    var romanToInt = function (s) {
        if (s.length === 0) return '';
        const hashTable = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        };
        let result = hashTable[s[0]];
        for (let i = 1; i < s.length; i++) {
            const current = s[i];
            const pre = s[i - 1];
            result = result + hashTable[current];
            if (hashTable[current] > hashTable[pre]) {
                result = result - 2 * hashTable[pre];
                //result = (result + (- hashTable[pre])) - hashTable[pre];
            }
        }
        return result;
    };
    console.log('romanToInt', romanToInt('III')) //3
    console.log('romanToInt', romanToInt('IV')) //4
    console.log('romanToInt', romanToInt('IX')) //9
    console.log('romanToInt', romanToInt('LVIII')) //58
    console.log('romanToInt', romanToInt('MCMXCIV')) //1994
}
//8. String to Integer (atoi)
//https://baffinlee.com/leetcode-javascript/problem/string-to-integer-atoi.html
{
    const myAtoi = (str) => {
        var i = 0;
        var sign = 1;
        var res = 0;
        var INT_MAX = 2147483647;
        var INT_MIN = -1 * INT_MAX - 1;

        while (str[i] === ' ') i++;

        if (str[i] === '+' || str[i] === '-') {
            sign = str[i] === '+' ? 1 : -1;
            i++;
        }

        while (str[i] >= '0' && str[i] <= '9') {
            res = (res * 10) + (str[i] - 0);
            if (sign === 1 && res > INT_MAX) return INT_MAX;
            if (sign === -1 && res > INT_MAX + 1) return INT_MIN;
            i++;
        }

        return res * sign;
    }
    console.log(myAtoi("42"))
    console.log(myAtoi("-42"))
    console.log(myAtoi("-42 word"))
    console.log(myAtoi(".42 word"))
    console.log(myAtoi("00042 word"))
    console.log(myAtoi("+-42 word"))
}
{
    var myAtoi = function (s) {
        const numValue = parseInt(s.trim(), 10);
        if (isNaN(numValue)) return 0;
        if (numValue < Math.pow(-2, 31)) return Math.pow(-2, 31);
        if (numValue > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
        return numValue;
    };
    console.log(myAtoi("42"))
    console.log(myAtoi("-42"))
    console.log(myAtoi("-42 word"))
    console.log(myAtoi(".42 word"))
    console.log(myAtoi("00042 word"))
    console.log(myAtoi("+-42 word"))
}
//3. Longest Substring Without Repeating Characters
{
    var lengthOfLongestSubstring = function (s) {
        if (s.length < 2) return s.length;
        let maxLen = 0;
        let fast = 0;
        let slow = 0;
        let map = new Map();
        while (fast < s.length) {
            let key = s[fast];
            let value = map.get(key);
            if (value >= slow) {
                slow = value + 1;
            }
            map.set(key, fast);
            maxLen = Math.max(maxLen, fast - slow + 1);
            fast++;
        }
        return maxLen;
    };
    console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('tmmzuxt'));//5
}