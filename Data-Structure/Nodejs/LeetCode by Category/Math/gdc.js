{

    const gdc = (m, n) => {
        if (m < n) return gdc(n, m);
        let p = n;
        while (n > 0) {
            if (m % p === 0 && n % p == 0) {
                console.log('iterator','m=', m, 'n', n, 'p=', p);
                return p;
            }
            p -= 1;
        }

        return 1;
    }
    console.log(gdc(640, 400));
}
{
    const gdc = (m, n, p = n) => {
        if (m < n) return gdc(n, m);
        if (n <= 0) return 1;

        if (m % p === 0 && n % p == 0) {
            console.log('recursive : ','m=', m, 'n', n, 'p=', p);
            return p;
        }
        p -= 1;

        return gdc(m, n, p);
    }
    console.log(gdc(640, 400));
}