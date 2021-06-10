//158. Read N Characters Given Read4 II - Call multiple times
//https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/
{
    var solution = function (read4) {
        const buffer = Array(4);
        let num = 0;
        let j = 0;
        return function (buf, n) {
            let i = 0;
            while (i < n) {
                if (num > 0) {
                    buf[i++] = buffer[j++];
                    num--;
                } else {
                    j = 0;
                    num = read4(buffer);
                    if (num === 0) {
                        return i;
                    }
                }
            }
            return i;
        };
    };
}