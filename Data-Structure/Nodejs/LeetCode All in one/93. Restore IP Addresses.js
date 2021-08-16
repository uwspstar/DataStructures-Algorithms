//93. Restore IP Addresses
/*
Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s. You can return them in any order.

A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots and cannot have leading zeros. For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.

Input: s = "25525511135" Output: ["255.255.11.135","255.255.111.35"]

Input: s = "0000" Output: ["0.0.0.0"]

Input: s = "1111" Output: ["1.1.1.1"]

Input: s = "010010" Output: ["0.10.0.10","0.100.1.0"]

Input: s = "101023" Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
*/
//https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0093.%E5%A4%8D%E5%8E%9FIP%E5%9C%B0%E5%9D%80.md

//startIndex一定是需要的，因为不能重复分割，记录下一层递归分割的起始位置。
//本题明确要求只会分成4段，所以不能用切割线切到最后作为终止条件，而是分割的段数作为终止条件。pointNum表示逗点数量，pointNum为3说明字符串分成了4段了。
//递归调用时，下一层递归的startIndex要从i+2开始（因为需要在字符串中加入了分隔符.），同时记录分割符的数量pointNum 要 +1。
//回溯的时候，就将刚刚加入的分隔符. 删掉就可以了，pointNum也要-1。
{
    /**
 * @param {string} s
 * @return {string[]}
 */
    var restoreIpAddresses = function (s) {
        if (s.length > 12) return [];
        let res = [];

        const backTracking = (s, startIndex, dots) => {
            if (dots === 3) { // 4 blocks
                if (isValid(s, startIndex, s.length - 1)) { // check last block
                    res.push(s);
                    return;
                }
            } else {
                for (let i = startIndex; i < s.length; i++) {
                    if (isValid(s, startIndex, i)) {

                        s = s.substring(0, i + 1) + "." + s.substring(i + 1);
                        dots = dots + 1;

                        backTracking(s, i + 2, dots);

                        dots = dots - 1;//reset
                        s = s.substring(0, i + 1) + s.substring(i + 2);//reset

                    } else break;
                }
            }
        }
        backTracking(s, 0, 0);
        return res;
    };

    function isValid(s, start, end) {
        if (start > end) {
            return false;
        }
        if (s[start] === '0' && start !== end) {
            return false;
        }
        let num = 0;
        for (let i = start; i <= end; i++) {
            if (s.charAt(i) > '9' || s.charAt(i) < '0') {
                return false;
            }
            num = num * 10 + (s.charAt(i) - '0');
            if (num > 255) {
                return false;
            }
        }
        return true;
    }
}
//IP to CIDR
{
    var restoreIpAddresses = function (s) {
        const ans = [];
        const dfs = (n, str, rest) => {
            // console.log(n, str);
            if (n === 4 && rest.length === 0) {
                const tmp = str.substring(0, str.length - 1);
                if (!ans.includes(tmp)) {
                    ans.push(tmp);
                }
                return;
            }
            if (n === 4 || rest.length === 0) {
                return;
            }
            for (let j = 1; j <= 3; j++) {
                const left = rest.substring(0, j);
                const right = rest.substring(j);
                if (left[0] === '0' && left.length > 1) {
                    continue;
                }
                const cur = +left;
                if (cur >= 0 && cur <= 255) {
                    dfs(n + 1, str + cur + '.', right);
                }
            }
        }
        dfs(0, '', s);
        return ans;
    };
}
{
    var restoreIpAddresses = function (s) {
        if (s.length < 4) return [];
        let res = new Set(); // remove repeat
        let path = [];
        function backTracking(remainStr, strLen) {
            if (strLen === 4) {
                let result = [...path].join('.');
                if (result.length === s.length + 3) {
                    res.add(result);
                }
                return;
            }
            for (let i = 1; i < 4; i++) {
                let str = remainStr.slice(0, i);
                if (+str > 255 || !str) continue;
                if (str[0] == '0' && str.length > 1) continue;
                path.push(str)
                backTracking(remainStr.slice(i), strLen + 1); // remainStr.slice(i) as remainStr
                path.pop();
            }
        }
        backTracking(s, 0);
        return [...res];
    };
}