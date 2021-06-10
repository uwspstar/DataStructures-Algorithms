/*
ou are working on a project for Amazon Video and need to cut films into scenes. To help streamline the creation of the final films, the team needs to develop an automated way of breaking up individual shots (short sequence from a particular camera angle) in a film into scenes (a sequence of shots). There is already an algorithm that breaks the film up into shots and labels them with a letter. Identical shots are labelled with the same letter.

Write a function to split the film into as many short scenes as possible without confusing viewers by having the same shot appear in different scenes. This will partition the sequence of shot labels into scenes so that no shot label appears in more than one scene and each scene is as short as possible. The output should be the length of each scene.


Input
The input to the function/method consists of an argument -
inputList, a list of characters representing the sequence of shots.

Output
Return a list of integers representing the length of each scene, in the order in which it appears in the given sequence of shots.

Examples
Example 1:
Input:
inputList = [a, b, a, b, c, b, a, c, a, d, e, f, e, g, d, e, h, i, j, h, k, l, i, j]

Output:
[9, 7, 8]

Explanation:
The first scene consists of the shots a, b, and c.  The second scene consists of d, e, f, and g.  Finally, the last scene consists of h, i, j, k, and l.  The answer is 9, 7, 8 because a, b, and c only appear in the first 9 characters, then d, e, f, and g appear in the next 7.  The final 8 characters consist entirely of h, i, j, k, and l.

Example 2
Input:
inputList = [a, b, c]

Output:
[1, 1, 1]

Explanation:
Because there are no recurring shots, all shots can be in the minimal length 1 scene.

Example 3
Input:
inputList = [a, b, c, a]

Output:
[4]

Explanation:
Because ‘a’ appears more than once, everything between the first and last appearance of ‘a’ must be in the same list.

*/
/*
A string s of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.



Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
*/
/*
Let's try to repeatedly choose the smallest left-justified partition. 
Consider the first label, say it's 'a'. 
The first partition must include it, and also the last occurrence of 'a'. 
However, between those two occurrences of 'a', there could be other labels that make the minimum size of this partition bigger. 
For example, in "abccaddbeffe", the minimum first partition is "abccaddb". 
This gives us the idea for the algorithm: For each letter encountered, process the last occurrence of that letter, extending the current partition [anchor, j] appropriately.
*/
{
    /**
 * @param {string} s
 * @return {number[]}
 */
    var partitionLabels = function (S) {
        const maxPos = {};
        for (let i = 0; i < S.length; i++) { // 存放字母与它的最远位置
            maxPos[S[i]] = i;
        }

        const res = [];
        let start = 0;                        // 待切割的起始位置
        let scannedCharMaxPos = 0;            // 已扫描的字符中最远的位置

        for (let i = 0; i < S.length; i++) {
            const curCharMaxPos = maxPos[S[i]]; // 当前扫描的字符的最远位置
            scannedCharMaxPos = Math.max(scannedCharMaxPos, curCharMaxPos); // 更新「已扫描的字符中最远的位置」

            if (i == scannedCharMaxPos) { // 正好扫描到「已扫描的字符的最远位置」，到达切割点
                res.push(i - start + 1);
                start = i + 1;              // 更新，下一个待切割的字符串的起始位置
            }
        }
        return res;
    };
    //Longest Repeating Character Replacement
    //Split Array into Fibonacci Sequence
    //Cinema Seat Allocation
}