{
    const reverseStr = (s, k) => {
        if (s.length < 2) return s;
        let n = 0, result = '';
        for (let i = 0; i < s.length; i += k) {
            let tmpStr = s.slice(i, i + k);
            n++;
            if (n & 1 === 1) {
                tmpStr = tmpStr.split('').reverse().join('');
            }
            result += tmpStr;
        }
        return result;
    };
    console.log('abcdefg', reverseStr('abcdefg', 2));
}
{
    const reverseStr = (s, k) => {
        for (let i = 0; i < s.length; i += (2 * k)) {
            if (i + k <= s.length) {
                reverse(s.slice(k));
                continue;
            }
            // 3. 剩余字符少于 k 个，则将剩余字符全部反转。
            reverse(s.begin() + i, s.begin() + s.size());
        }
        return s;
    }
}
{
    const reverseStr = (str, k) => {
        if (str.length < 2) return s;
        const reverse = s => {
            return s.split('').reverse().join('');
        }
        let len = str.length;
        if (len <= k) return reverse(str);
        let result = '';
        while (len) {
            result += reverse(str.slice(0, k));
            result += str.slice(k, 2 * k); // not 2k
            str = str.slice(2 * k);
            len = str.length;
        }
        return result
    }
    console.log('abcdefg', reverseStr('abcdefg', 2));
}

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