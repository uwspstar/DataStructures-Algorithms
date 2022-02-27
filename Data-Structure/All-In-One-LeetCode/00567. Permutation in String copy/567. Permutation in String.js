// 567. Permutation in String
/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false

由于排列不会改变字符串中每个字符的个数，所以只有当两个字符串每个字符的个数均相等时，一个字符串才是另一个字符串的排列。

根据这一性质，记 s_1  的长度为 n，我们可以遍历 s_2 中的每个长度为 n 的子串，判断子串和 s_1 中每个字符的个数是否相等，若相等则说明该子串是 s_1 的一个排列。

由于需要遍历的子串长度均为 n，我们可以使用一个固定长度为 n 的滑动窗口来维护 cnt2 ：滑动窗口每向右滑动一次，就多统计一次进入窗口的字符，少统计一次离开窗口的字符。然后，判断 cnt1 是否与 cnt2 相等，若相等则意味着 s_1s 的排列之一是 s_2 的子串。


链接：https://leetcode-cn.com/problems/permutation-in-string/solution/zi-fu-chuan-de-pai-lie-by-leetcode-solut-7k7u/
*/
{
    var checkInclusion = function (s1, s2) {
        const N = s1.length;
        const M = s2.length;

        if (N > M) return false;

        const arr1 = new Array(26).fill(0);
        const arr2 = new Array(26).fill(0);
        //"ab" , "eidbaooo" 
        for (let i = 0; i < N; ++i) {
            arr1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            arr2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        //console.log('arr1=',arr1, 'arr2=',arr2)

        if (arr1.toString() === arr2.toString()) {
            return true;
        }

        // N = 2, M = 8
        for (let i = N; i < M; ++i) {
            arr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
            // i - N ->  window size = N
            arr2[s2[i - N].charCodeAt() - 'a'.charCodeAt()]--;

            if (arr1.toString() === arr2.toString()) {
                return true;
            }
        }

        return false;
    };
}