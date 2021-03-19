
{
    var reverseStr = function (s, k) {
        let n = 0, result = '';
        for (let i = 0; i < s.length; i += k) {
            let t = s.slice(i, i + k);
            n++;
            if (n % 2 === 1) {
                t = t.split('').reverse().join('');
            }
            result += t;
        }
        return result;
    };
}
{
    var reverseStr = function (s, k) {
        if (s.length < 2) return s;
        //const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
        const reverse = s => {
            if (s.length < 2) return s;
            return s.split('').reverse().join('');
        }

        let len = s.length;
        if (len <= k) return reverse(s);

        let result = '';
        while (len > 0) {
            result += reverse(s.slice(0, k));
            result += s.slice(k, 2 * k);
            s = s.slice(2 * k);
            len = s.length;
        }
        return result;
    };

    console.log('abcdefg', reverseStr('abcdefg', 2));
}