{
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