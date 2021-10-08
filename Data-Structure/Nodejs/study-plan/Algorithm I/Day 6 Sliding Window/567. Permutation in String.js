// 567. Permutation in String
// https://leetcode.com/problems/permutation-in-string/
// 排列不会改变字符串中每个字符的个数，所以只有当两个字符串每个字符的个数均相等时，一个字符串才是另一个字符串的排列
{
    var checkInclusion = function (s1, s2) {
        const len1 = s1.length;
        const len2 = s2.length;
        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);

        for (let i = 0; i < len1; i++) {
            count1[s1[i].charCodeAt(0) - 97]++;
        }

        let start = 0;

        for (let i = 0; i < len2; i++) {
            count2[s2[i].charCodeAt(0) - 97]++;

            while (start <= i && count2[s2[start].charCodeAt(0) - 97] > count1[s2[start].charCodeAt(0) - 97]) {
                count2[s2[start].charCodeAt(0) - 97]--;
                start++;
            }
            if (count1.join('') === count2.join('')) {
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
            //arr1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)] ++;
            arr1[s1[i].charCodeAt(0) - 97]++;
        }

        // two pointers
        let j = 0;
        for (let i = 0; i < len2; i++) {

            let idx = s2[i].charCodeAt(0) - 97;
            arr2[idx]++;

            while (j <= i) {
                let idxStart = s2[j].charCodeAt(0) - 97;
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