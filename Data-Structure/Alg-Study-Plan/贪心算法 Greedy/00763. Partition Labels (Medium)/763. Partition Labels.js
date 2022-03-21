// 763. Partition Labels
/*
You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

 

Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
*/

// Greedy
{

    var partitionLabels = function (S) {
        const maxPos = {};
        for (let i = 0; i < S.length; i++) { // 存放字母与它的最远位置
            maxPos[S[i]] = i;
        }

        console.log('maxPos=', JSON.stringify(maxPos));

        const res = [];
        let start = 0;                        // 待切割的起始位置
        let scannedCharMaxPos = 0;            // 已扫描的字符中最远的位置

        for (let i = 0; i < S.length; i++) {
            const curCharMaxPos = maxPos[S[i]]; // 当前扫描的字符的最远位置
            console.log('S[i]=', S[i], 'i=', i, 'scannedCharMaxPos=', scannedCharMaxPos, 'curCharMaxPos=', curCharMaxPos)
            scannedCharMaxPos = Math.max(scannedCharMaxPos, curCharMaxPos); // 更新「已扫描的字符中最远的位置」

            if (i == scannedCharMaxPos) { // 正好扫描到「已扫描的字符的最远位置」，到达切割点 
                res.push(i - start + 1);
                start = i + 1;              // 更新，下一个待切割的字符串的起始位置
            }
            console.log('res=', res)
        }
        return res;
    };

    // String Matching in an Array (E)
    // Split a String Into the Max Number of Unique Substrings (M)
    // Largest Merge Of Two Strings (M)
}