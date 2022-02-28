//50. Pow(x, n)
{   // recursion
    const fastPow = (x, n) => {
        if (n === 0) return 1; // base

        let half = fastPow (x, parseInt(n / 2));

        if (n % 2 === 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }

    var myPow = function (x, n) {
        if (x === 1) return 1;
        if (x === 0 && n > 0) return 0;
        if (n === 1) return x;
        if (n === 0) return 1;
        if (n === -1 && x !== 0) return 1 / x;

        if (n < 0) {
            n = -n;
            x = 1 / x;
        }

        return fastPow(x, n);
    };
}
{  // iteration
    var myPow = function (x, n) {
        if (x === 1) return 1;
        if (x === 0 && n > 0) return 0;
        if (n === 1) return x;
        if (n === 0) return 1;
        if (n === -1 && x !== 0) return 1 / x; 

        if (n < 0) {
            n = -n;
            x = 1 / x;
        }

        let ans = 1;

        while (n) {
            if (n % 2 === 1) {
                ans = ans * x;
            }
            x = x * x;
            n = parseInt(n / 2);
        }

        return ans;
    };
}