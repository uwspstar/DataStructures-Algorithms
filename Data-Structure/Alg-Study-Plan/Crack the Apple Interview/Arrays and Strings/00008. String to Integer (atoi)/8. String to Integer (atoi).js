{
    // https://leetcode.com/problems/string-to-integer-atoi/
    // case 1 lowerLimit
    // case 2 upperLimit
    // case 3 "+-321" ->  0

    var myAtoi = function (s) {
        const lowerLimit = -(2 ** 31); // case 1
        const upperLimit = 2 ** 31 - 1; // case 2
        const isNum = (c) => {
            return c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0)
        }
        s = s.trim();
        let p = 0;
        let sign = 1;
        while (s[p] === '-' || s[p] === '+') {
            if (s[p] === '-') sign = -1;;
            p++;
        }
        if (p > 1) return 0; // case 3
        
        let res = 0;
        for (let i = p; i < s.length; i++) {
            if (isNum(s[i])) {
                res = res * 10 + (+s[i]);
            } else break;
        }
        res = res * sign;
        if (res < lowerLimit) {
            return lowerLimit;
        } else if (res > upperLimit) {
            return upperLimit;
        }
        return res;
    };
}