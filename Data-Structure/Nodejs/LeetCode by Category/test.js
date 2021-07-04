{

    const test = (m, n) => {
        if (m < n) return test(n, m);
        let p = n;
        while (n > 0) {
            if (m % p === 0 && n % p == 0) {
                console.log('m=', m, 'n', n, 'p=',p);
                return p;
            }
            p -= 1;
        }

        return 1;
    }
    console.log(test(640, 400));




    let arr = [3, 2, 1, 6, 0, 5]

    console.log(Math.max(...arr))
    console.log(arr.indexOf(Math.max(...arr)))

}