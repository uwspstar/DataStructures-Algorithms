{
    const countTriples = n => {
        let result = 0
        for (let i = n; i > 2; i--) {
            let left = 1
            let right = i - 1
            while (left < right) {
                if (left * left + right * right < i * i) {
                    left++
                    continue
                }
                if (left * left + right * right > i * i) {
                    right--
                    continue
                }
                if (left * left + right * right === i * i) {
                    result++
                    left++
                    right--
                }
            }
        }

        return result * 2
    };
    console.log(countTriples(10));
    console.log(countTriples(5));
}
{
    //brute force
    var countTriples = function (n) {
        let arr = [];
        for (let i = 1; i <= n; i++) {
            arr.push(i * i);
        }
        console.log(arr)

        let res = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 1; j < arr.length; j++) {
                let c = arr[i] + arr[j];
                if (arr.indexOf(c) >= 0) res++;
            }
        }
        return res;
    };
    console.log(countTriples(10));
    console.log(countTriples(5));
}