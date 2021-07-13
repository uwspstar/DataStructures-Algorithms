/*
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true

因此，我们维护两张哈希表，第一张哈希表 s2t 以 s 中字符为键，映射至 t 的字符为值，第二张哈希表 t2s 以 t 中字符为键，映射至 s 的字符为值。从左至右遍历两个字符串的字符，不断更新两张哈希表，如果出现冲突（即当前下标 index 对应的字符 s[index] 已经存在映射且不为 t[index] 或当前下标 index 对应的字符 t[index] 已经存在映射且不为 s[index] 时说明两个字符串无法构成同构，返回 false。

*/
{
    var isIsomorphic = function (s, t) {
        if (s.length !== t.length) return false;
        const s2t = {};
        const t2s = {};
        const len = s.length;
        for (let i = 0; i < len; ++i) {
            const x = s[i], y = t[i];

            console.log('x= s[i]=',x, 'y= t[i]=',y,'s2t[x]=', s2t[x], 's2t[x]=', s2t[x]);

            if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {
                return false;
            }
            s2t[x] = y;
            t2s[y] = x;

            console.log('s2t=',s2t)
            console.log('t2s=',t2s)
        }
        return true;
    };
    console.log(isIsomorphic('paper','title'));
    //console.log(isIsomorphic('egg','add'));
}