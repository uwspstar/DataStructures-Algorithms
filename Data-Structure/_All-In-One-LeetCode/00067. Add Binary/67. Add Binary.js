//67. Add Binary
var addBinary = function (a, b) {

    let carry = 0;
    let result = '';

    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {

        let sum = carry;
        sum += i >= 0 ? (+a[i]) : 0;
        sum += j >= 0 ? (+b[j]) : 0;

        result = (sum % 2) + result;

        carry = parseInt(sum / 2);

    }

    return carry === 1 ? '1' + result : result;
};