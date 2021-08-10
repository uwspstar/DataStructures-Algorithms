const helper = arr => {

    if (arr.length == 1) return arr;

    let v1 = [];
    let v2 = [];

    for (let i = 0; i < arr.length; i += 2) {
        v1.push(arr[i]);
    }

    for (let i = 1; i < arr.length; i += 2) {
        v2.push(arr[i]);
    }

    let res = [];

    v1 = helper(v1);
    v2 = helper(v2);

    for (let x of v1) {
        res.push(x);
    }

    for (let x of v2) {
        res.push(x);
    }
    
    return res;
}
var beautifulArray = function (n) {
    let res = []
    for (let i = 1; i <= n; i++) {
        res.push(i);
    }
    return helper(res);
};