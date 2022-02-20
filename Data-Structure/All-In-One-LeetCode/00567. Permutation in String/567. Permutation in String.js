// 567. Permutation in String
/*
由于排列不会改变字符串中每个字符的个数，所以只有当两个字符串每个字符的个数均相等时，一个字符串才是另一个字符串的排列。

根据这一性质，记 s_1  的长度为 n，我们可以遍历 s_2 中的每个长度为 n 的子串，判断子串和 s_1 中每个字符的个数是否相等，若相等则说明该子串是 s_1 的一个排列。

由于需要遍历的子串长度均为 n，我们可以使用一个固定长度为 n 的滑动窗口来维护 cnt2 ：滑动窗口每向右滑动一次，就多统计一次进入窗口的字符，少统计一次离开窗口的字符。然后，判断 cnt1 是否与 cnt2 相等，若相等则意味着 s_1s 的排列之一是 s_2 的子串。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/permutation-in-string/solution/zi-fu-chuan-de-pai-lie-by-leetcode-solut-7k7u/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

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
{
    var checkInclusion = function (s1, s2) {
        const n = s1.length, m = s2.length;
        if (n > m) return false;

        const cnt1 = new Array(26).fill(0);
        const cnt2 = new Array(26).fill(0);

        for (let i = 0; i < n; ++i) {
            ++cnt1[s1[i].charCodeAt() - 'a'.charCodeAt()];
            ++cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()];
        }

        if (cnt1.toString() === cnt2.toString()) {
            return true;
        }

        for (let i = n; i < m; ++i) {
            ++cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()];
            --cnt2[s2[i - n].charCodeAt() - 'a'.charCodeAt()];
            if (cnt1.toString() === cnt2.toString()) {
                return true;
            }
        }
        return false;
    };
}
{
    var checkInclusion = function (s1, s2) {
        let len1 = s1.length;
        let len2 = s2.length;

        let arr1 = new Array(26).fill(0);
        let arr2 = new Array(26).fill(0);


        for (let i = 0; i < len1; i++) {
            arr1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        // two pointers:  slide window 
        let j = 0;
        for (let i = 0; i < len2; i++) {

            let idx = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
            arr2[idx]++;

            while (j <= i) {
                let idxStart = s2[j].charCodeAt(0) - 'a'.charCodeAt(0);
                if (arr2[idxStart] > arr1[idxStart]) {
                    arr2[idxStart]--;
                    j++;
                } else break;
            }

            if (arr1.join('') === arr2.join('')) {
                return true;
            }
        }

        return false;
    }
}