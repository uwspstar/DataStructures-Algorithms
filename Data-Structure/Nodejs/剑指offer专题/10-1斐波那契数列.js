// some books fibonacci = [1, 1, 2, 3, 5] start with 1, not 0
// some books fibonacci = [0, 1, 1, 2, 3, 5] start with 0
{
    function fibonacci(n) {
        if (n < 2) return n;
        let a = 1;
        let b = 1;
        let res = 0;
        for (let i = 2; i < n; i++) {
            res = a + b;
            a = b;
            b = res;
            //[res, a, b] = [a + b, b, res];
        }
        return res;
    }
    console.log('fibonacci 3= ', fibonacci(20));
}
{
    const fibonacci = n => {
        if (n < 2) return n;

        let res = [1, 1];

        for (let i = 2; i <= n; i++) {

            res[i] = res[i - 1] + res[i - 2];
        }
        return res[n - 1];
    }
    console.log('fibonacci 2= ', fibonacci(20));
}

{
    const fibonacci = n => {
        if (n < 2) return n;

        return fibonacci(n - 1) + fibonacci(n - 2)
    }
    console.log('fibonacci = ', fibonacci(20));
}