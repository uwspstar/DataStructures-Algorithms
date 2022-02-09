//926. Flip String to Monotone Increasing
//显然，这个问题可以简化成： 对于每种分割方法，左边有多少个 1 需要去反转，右边有多少个 0 需要去反转
var minFlipsMonoIncr = function (S) {
    let cur = 0;
    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === '0') {// first flip all 0 into 1;    
            cur++;
        }
    }
    //"0 0 1 1 0" -> "1 1 1 1 1" , cur = 3
    let res = cur; //3
    // "0 0 1 1 0"
    //"[1,1,0,0,1] -> " [0, 0, 1, 1, 0], sum = 2
    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === '0') {
            cur--;
        } else {
            cur++;
        }
        res = Math.min(res, cur);// change into 000111 case, 
    }
    return res;
};
