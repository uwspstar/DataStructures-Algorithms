//415. Add Strings
//Input: num1 = "11", num2 = "123"
//Output: "134"

// from backward, and keep carry

var addStrings = function(num1, num2) {
    let res ='';
    let m = num1.length;
    let n = num2.length;
    let carry = 0;
    let i = m - 1;
    let j = n - 1;
    for (; i >=0 || j >=0; i--, j--) {
        let sum = carry;
        sum += i >=0 ? +num1[i] : 0;
        sum += j >=0 ? +num2[j] : 0;
        carry = parseInt(sum / 10);
        res = (sum % 10) + res;
    }

    return  carry > 0 ? carry + res : res;
}
