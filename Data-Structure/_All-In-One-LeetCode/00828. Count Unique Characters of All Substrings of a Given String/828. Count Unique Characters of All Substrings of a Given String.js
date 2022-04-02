//828. Count Unique Characters of All Substrings of a Given String
/*
我们定义了一个函数 countUniqueChars(s) 来统计字符串 s 中的唯一字符，并返回唯一字符的个数。

例如：s = "LEETCODE" ，则其中 "L", "T","C","O","D" 都是唯一字符，因为它们只出现一次，所以 countUniqueChars(s) = 5 。

本题将会给你一个字符串 s ，我们需要返回 countUniqueChars(t) 的总和，其中 t 是 s 的子字符串。注意，某些子字符串可能是重复的，但你统计时也必须算上这些重复的子字符串（也就是说，你必须统计 s 的所有子字符串中的唯一字符）。

由于答案可能非常大，请将结果 mod 10 ^ 9 + 7 后再返回。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-unique-characters-of-all-substrings-of-a-given-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
//https://www.cnblogs.com/zhengxch/p/14901108.html