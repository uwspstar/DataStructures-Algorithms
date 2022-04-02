//8. String to Integer (atoi)
var myAtoi = function (s) {
    if (s.length === 0) return 0;
    let res = 0;

    const MAX = Math.pow(2, 31) - 1;
    const MIN = -1 * (MAX + 1);

    let i = 0;
    let sign = 1;

    // remove space
    while (s[i] === ' ') {
        i++;
    }
    // s[i] not s[0] , we do no modify s
    if (s[i] === '+' || s[i] === '-') {
        s[i] === '+' ? sign = 1 : sign = -1;
        i++;
    }
    // get result
    while (s[i] >= '0' && s[i] <= '9') {
        res = res * 10 + (+s[i]);
        if (sign === 1 && res >= MAX) return MAX;
        if (sign === -1 && res >= MAX + 1) return MIN;
        i++;
    }

    return sign * res;
};