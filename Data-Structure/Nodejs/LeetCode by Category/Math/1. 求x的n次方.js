//1. 求x的n次方
{
    // O(logN) : 求x的n次方
    const powerOfN = (x, n) => {
        if (n === 0) return 1;
        let t = powerOfN(x, n / 2);
        if (n % 2 === 1) return t * t * x;
        return t * t;
    }
}

{
    // O(N)
    const powerOfN = (x, n) => {
        if (n === 0) return 1;
        if (n % 2 === 1) return powerOfN(x, n / 2) * powerOfN(x, n / 2) * x
        return powerOfN(x, n / 2) * powerOfN(x, n / 2);
    }
}

{
    // O(N)
    const powerOfN = (x, n) => {
        if (n === 0) return 1;
        return powerOfN(x, n - 1) * x;
    }
}

{ // O(N)
    const powerOfN = (x, n) => {
        if (n === 0) return 1;
        let res = 1;
        for (let i = 1; i < n; i++) {
            res *= x;
        }
        return res;
    }
}