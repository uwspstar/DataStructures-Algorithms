{
    //T: O(x.length), S:O(1)
    //Input: x = -123 Output: -321
    // careful the boundary
    // const max = Math.pow(2, 31) - 1; ---> not Math.pow(2, 32) - 1
    // const min = Math.pow(-2, 31);
    // careful the x = parseInt(x / 10); divide need to parseInt

    var reverse = function (x) {
        let sign = 1;
        if (x < 0) {
            sign = -1;
            x = x * sign;
        }

        const max = Math.pow(2, 31) - 1;
        const min = Math.pow(-2, 31);

        //123
        let num = 0;
        while (x > 0) {
            let n = x % 10; // 3, 2, 1
            num = num * 10 + n; // 3 , 30+2, 320+1
            x = parseInt(x / 10); // 12, 1, 0 // care for 
        }

        num = sign * num;
        return (num < min || num > max) ? 0 : num;
    };
}