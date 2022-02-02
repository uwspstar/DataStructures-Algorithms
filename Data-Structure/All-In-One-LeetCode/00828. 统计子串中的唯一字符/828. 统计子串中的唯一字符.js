//828. 统计子串中的唯一字符
/*
我们定义了一个函数 countUniqueChars(s) 来统计字符串 s 中的唯一字符，并返回唯一字符的个数。

例如：s = "LEETCODE" ，则其中 "L", "T","C","O","D" 都是唯一字符，因为它们只出现一次，所以 countUniqueChars(s) = 5 。

本题将会给你一个字符串 s ，我们需要返回 countUniqueChars(t) 的总和，其中 t 是 s 的子字符串。注意，某些子字符串可能是重复的，但你统计时也必须算上这些重复的子字符串（也就是说，你必须统计 s 的所有子字符串中的唯一字符）。

由于答案可能非常大，请将结果 mod 10 ^ 9 + 7 后再返回。

示例 1：

输入: s = "ABC"
输出: 10
解释: 所有可能的子串为："A","B","C","AB","BC" 和 "ABC"。
     其中，每一个子串都由独特字符构成。
     所以其长度总和为：1 + 1 + 1 + 2 + 2 + 3 = 10
示例 2：

输入: s = "ABA"
输出: 8
解释: 除了 countUniqueChars("ABA") = 1 之外，其余与示例 1 相同。
示例 3：

输入：s = "LEETCODE"
输出：92
 

提示：

0 <= s.length <= 10^4
s 只包含大写英文字符

怎么去简化呢？我们可以简化为求每个字符在几个子串里只出现一次。

例如：

"ABC"  
'C'在子串"C","BC","ABC"中都出现一次，所以'C'能够为答案贡献3
'B'在子串"B","AB","BC","ABC"中都出现一次，所以'B'能够为答案贡献4
'A'在子串"A","AB","ABC"中都出现一次，所以'A'能够为答案贡献3
ans=3+4+3=10
如此一来，这题就转化为两个问题：
1.对于每一个字符来说，在哪一段区间只出现了一次
2.在这一段区间内，这个字符可以为答案贡献多少（即在这段区间，这个字符可以存在于多少子串中）

https://www.youtube.com/watch?v=v0iZs3-_1c4
*/
var uniqueLetterString = function (s) {
    let sum = 0, curr = 0, n = s.length;

    const last = new Array(26).fill(-1);
    const prev = new Array(26).fill(-1);
    const offset = 'A'.charCodeAt(0); // 65

    //console.log('offset=', offset, 'last=',last, 'prev=',prev);

    for (let i = 0; i < n; i++) {
        const index = s.charCodeAt(i) - offset;
        console.log('index=', index);
        //..A)....A......(A
        // left bound i - 1 - last[index]
        // right bound last[index] - prev[index]
        curr += (i - 1 - last[index]) - (last[index] - prev[index]) + 1;
        sum += curr;

        prev[index] = last[index];
        last[index] = i;
    }
    return sum;
};