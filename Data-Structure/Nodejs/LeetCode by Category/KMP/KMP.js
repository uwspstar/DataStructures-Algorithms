{
    // Brute force
    // T : O(N * M)
    const search = (pat, txt) => {
        let M = pat.length;
        let N = txt.length;
        for (let i = 0; i <= N - M; i++) {
            let j;
            for (j = 0; j < M; j++) {
                if (pat[j] !== txt[i + j])
                    break;
            }
            if (j === M) return i;
        }
        return -1;
    }
}

/*
首先获取一个关于str2的记录每个位置最长公共前后缀的数组，记为preNextArr。
preNextArr的具体含义：在当前位置之前所有字符构成的字符串中，头部和尾部完全一样的字符串长度，前缀不包括最后一个字符，后缀包括第一个字符。
遍历str1数组，如果遍历到str2的某个位置发现 str1[i] 不等于 str2[i], 则跳转到preNextArr数组中记录的位置继续比较.
*/

{
    // KMP 算法主体
    const getIndexOf = (s, m) => {
        // 首先进行边界条件的判断，如果有一个为空，或者s长度小于m， 则一定无法匹配，直接返回-1
        if (s === null || m === null || m.length < 1 || s.length < m.length) return -1;

        // 将s和m改造为字符数组
        let ss = s.split('');
        let ms = m.split('');

        // 创建两个指针进入while循环，si表示s的索引，mi表示m的索引
        let si = 0;
        let mi = 0;

        let next = getNextArray(ms);

        // 结束条件是si和mi其中有一个遍历完了整个字符数组
        while (si < ss.length && mi < ms.length) {
            if (ss[si] == ms[mi]) {
                // 决策一：如果当前s和m位置的元素相等，则两个指针均向后面移动
                si++;
                mi++;
            } else if (next[mi] == -1) {
                // 决策二： 如果不相等，且此时m位于字符数组的起始位置，那么直接将s向后移
                si++;
            } else {
                // 决策三； 如果不想等，但此时的m不在起始位置，则s不懂， m调正到next【mi】的位置继续向相面比较
                mi = next[mi];
            }
        }
        // 等到循环结束时，s和m一定有一个已经全部遍历完了，如果时m遍历完了，则找到了m，否则返回-1
        return mi == ms.length ? si - mi : -1;
    }

    // 给定一个字符串的字符数组，返回一个数组表示每个元素之前字符串的最长公共前后缀，0位置默认-1，1位置默认0；
    const getNextArray = ms => {
        // 如果数组只有一个元素，默认返回-1；
        if (ms.length == 1) return [-1];

        // 创建一个数组，默认和原始数组等长，使得每个位置的元素信息都可以知道
        let next = [];

        // 初始化0和1位置上的元素
        next[0] = -1;
        next[1] = 0;

        // 给定两个变量pos和cn进入while循环，pos表示当前元素的位置，cn表示当前元素前面一位的元素最长公共前后缀（就是前面那一位的 next[pos - 1]）
        let pos = 2;
        let cn = 0;

        while (pos < next.length) {
            if (ms[pos - 1] == ms[cn]) {
                // 如果前面一位元素与前缀的后一位相等，则next【pos】再前一位的cn基础上+1
                next[pos++] = ++cn;
            } else if (cn > 0) {
                // 如果不相等的话，那么cn指向前缀的后面一位，继续进入循环，此处pos没有进行自增操作，还是在原来的位置
                cn = next[cn];
            } else {
                // 此处如果cn == 0 ，则表示前一位的最长公共前后缀不存在，而且此时，mas[pos - 1] != ms[cn] ，则此位置的公共前后缀也一定为0
                next[pos++] = 0;
            }
        }
        // 返回结果集next数组
        return next;
    }
}