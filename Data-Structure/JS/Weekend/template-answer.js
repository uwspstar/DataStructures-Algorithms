// Whole-script strict mode syntax
"use strict";
{
    // slice (-1)
    console.log([0, 1, 2, 3, 4].slice(-1)[0]); // 4
    console.log([0, 1, 2, 3, 4].slice(-1)); //[4]
    console.log([0, 1, 2, 3, 4].slice(2, -1)); // [2, 3]
    console.log([0, 1, 2, 3, 4].slice(2, -1)[0]); // 2
}
//swap function 
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

//count Of Airplanes
{
    const countOfAirplanes = (arr) => {
        // write your code here
        //[(1, 10), (2, 3), (5, 8), (4, 7)]
        let maxNum = 0;
        let map = new Map();
        let line = [];
        let curr = 0;
        for (let i = 0; i < arr.length; i++) {
            let key1 = [...arr[i]][0];
            let key2 = [...arr[i]][1];
            map.set(key1, 1);
            map.set(key2, -1);
        }
        console.log(map);
        // first minus, then plus

        line = [...map.keys()].sort((a, b) => a - b);

        console.log(line);

        for (let i = 0; i < line.length; i++) {
            let key = line[i];
            let val = map.get(key);
            curr = curr + val;
            maxNum = Math.max(maxNum, curr);
            console.log('key=', key, maxNum);
        }
        return maxNum;
    }
    console.log(countOfAirplanes[[(1, 10), (2, 3), (5, 8), (4, 7)]])//
}

//Permutation with a arr
{
    var permute = function (nums) {
        const res = [];
        const backtrack = (path) => {

            if (path.length === nums.length) {
                res.push(path);
                return;
            };

            nums.forEach(n => {
                if (path.includes(n)) return;
                backtrack(path.concat(n));
            });
        };

        backtrack([]);
        return res;
    };

    console.log(permute([1, 2, 3]));
}
//Permutation with a str
{
    const getPermutationStr = (prefix, suffix, res) => {
        if (suffix.length === 0) {
            res.push(prefix);
        } else {
            for (let i = 0; i < suffix.length; i++) {
                getPermutationStr(prefix + suffix[i], suffix.slice(0, i) + suffix.slice(i + 1), res);
            }
        }
        return res;
    }
    const permutationStr = str => {
        let res = [];
        getPermutationStr('', str, res);
        return res;
    }

    console.log(permutationStr('abc'));
}

// put all zero to right side
// FB mock interview
{
    // put all zero to right side
    const putAllZeroToRight = nums => {

        //[0,  -1,  0, 2, 0, 3, -2, 0]
        //[-1, 2,  3, -2, 0, 3, -2, 0]
        //                          S
        //                P
        let p = 0;
        let start = 0;
        while (start < nums.length) {
            if (nums[start] !== 0) {
                nums[p] = nums[start];
                p++;
            }
            start++;
        }

        for (let i = p + 1; i < nums.length; i++) {
            nums[i] = 0;
        }
        return nums;
    }

    console.log('putAllZeroToRight', putAllZeroToRight([-1, 0, 2, 0, 3, -2, 0]));
}
{
    const putAllZeroToRight = nums => {
        //O(NlogN)
        return nums.sort((a, b) => Math.abs(b) - Math.abs(a)); //zero to right

    }
    console.log('putAllZeroToRight', putAllZeroToRight([-1, 0, 2, 0, 3, -2, 0]));
}
// 101. Symmetric Tree
{  // Easy https://leetcode.com/problems/symmetric-tree/submissions/
    var isSymmetric = function (root) {
        if (!root) return true;

        const isMirror = (n1, n2) => {
            if (n1 === null && n2 === null) return true;
            if (n1 === null && n2 !== null) return false;
            if (n2 === null && n1 !== null) return false;
            if (n1.val !== n2.val) return false;
            return isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
        }

        return isMirror(root, root)
    };
}
{
    //Medium https://leetcode.com/problems/powx-n/
    var myPow = function (x, n) {
        if (n < 0) {
            x = 1 / x;
            n = -n;
        }
        let result = 1;
        while (n !== 0) {
            if (n % 2 !== 0) {
                result = result * x;
            }
            x = x * x;
            n = parseInt(n / 2);
        }
        return result;
    };

    console.log(myPow(2, 10))
}
{
    // array (M * N);
    const spiralArray = (arr) => {
        /*
        [
            [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ]
        ]
        */
        if (arr.length === 0) return [];
        if (arr.length === 1) return arr[0];
        let result = [];
        let rowStart = 0;
        let rowEnd = arr.length - 1;
        let colStart = 0;
        let colEnd = arr[0].length - 1;

        while (rowStart <= rowEnd || colStart <= colEnd) {
            if (rowStart <= rowEnd) {
                for (let i = colStart; i <= colEnd; i++) {
                    result.push(arr[rowStart][i]);
                }
                rowStart++;
            }

            if (colStart <= colEnd) {
                for (let i = rowStart; i <= rowEnd; i++) {
                    result.push(arr[i][colEnd]);
                }
                colEnd--;
            }

            if (rowStart <= rowEnd) {
                for (let i = colEnd; i >= colStart; i--) {
                    result.push(arr[rowEnd][i]);
                }
                rowEnd--;
            }

            if (colStart <= colEnd) {
                for (let i = rowEnd; i >= rowStart; i--) {
                    result.push(arr[i][colStart]);
                }
                colStart++;
            }
        }
        return result;
    }

    let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let B = [[1, 2, 3, 4, 5], [6, 7, 8, 9], [10, 11, 12, 13, 14]];
    console.log(spiralArray(A))
    console.log(spiralArray(B))

}
{
    const minRemoveToValid = str => {
        const res = str.split('');
        const stack = [];

        for (let i = 0; i < res.length; i++) {
            // if ...else if in order
            if (res[i] === '(') {
                stack.push(i);
            } else if (res[i] === ')' && stack.length) {
                // stack has value which is '('
                stack.pop();
            } else if (res[i] === ')') {
                res[i] = '';
            }
        }

        while (stack.length) {
            const currIdx = stack.pop();
            res[currIdx] = '';
        }

        return res;
    }
    //["(a())()","(a)()()"]

    console.log(minRemoveToValid(["(a())()", "(a)()()"]));
}
//rotate
{
    let A = [
        [1, 2],
        [3, 4]
    ]
    const rotate = A => {
        A = A.reverse(); // [ [ 3, 4 ], [ 1, 2 ] ]
        console.log(A);
        for (var i = 0; i < A.length; i++) {
            for (var j = 0; j < i; j++) {
                var temp = A[i][j];
                A[i][j] = A[j][i];
                A[j][i] = temp;

            }
        }
        return A;
    }
    console.log(rotate(A)); // [ [ 3, 1 ], [ 4, 2 ] ]
}
// https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
// 150. 逆波兰表达式求值
// evalRPN
{
    var evalRPN = function (arr) {
        if (arr.length < 2) return arr[0];
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i];
            if (current !== '+' && current !== '-' && current !== '*' && current !== '/') {
                result.push(current);
            } else {
                let n2 = parseInt(result.pop());
                let n1 = parseInt(result.pop());
                if (current === '+') result.push(parseInt(n1 + n2));
                if (current === '-') result.push(parseInt(n1 - n2));
                if (current === '*') result.push(parseInt(n1 * n2));
                if (current === '/') result.push(parseInt(n1 / n2));
                //console.log('n1', n1, 'n2', n2, 'result', result);
            }
        }
        return result[0];
    };

    let tokens = ["2", "1", "+", "3", "*"];
    let t2 = ["4", "13", "5", "/", "+"];
    console.log('e1 :', evalRPN(tokens));
    console.log('e2 :', evalRPN(t2));
}
// replaceSpace
{
    const replaceSpace = s => {
        let count = 0;
        let sOldSize = s.length;
        let arr = s.split('');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == ' ') {
                count++;
            }
        }
        arr.length = arr.length + (2 * count); // not 3 * count, because ' ' also need to use

        let sNewSize = arr.length;
        let j = sOldSize - 1;

        for (let i = sNewSize - 1; j >= 0 && j < i && i >= 0; i--, j--) {
            if (arr[j] != ' ') {
                arr[i] = arr[j];
            } else {
                arr[i] = '0';
                arr[i - 1] = '2';
                arr[i - 2] = '%';
                i -= 2;
            }
            console.log('arr 2 = ', JSON.stringify(arr));
        }
        return arr.join('');
    }
}
// reverseStr jump kth
{
    // 所以当需要固定规律一段一段去处理字符串的时候，要想想在在for循环的表达式上做做文章
    // https://mp.weixin.qq.com/s/XGSk1GyPWhfqj2g7Cb1Vgw
    const reverseStr = (s, k) => {
        if (s.length < 2) return s;
        let n = 0, result = '';
        for (let i = 0; i < s.length; i += k) {
            let tmpStr = s.slice(i, i + k);
            n++;
            if (n & 1 === 1) {
                tmpStr = tmpStr.split('').reverse().join('');
            }
            result += tmpStr;
        }
        return result;
    };
    console.log('abcdefg', reverseStr('abcdefg', 2));
}
// reverseStr jump kth
{
    var reverseStr = function (s, k) {
        if (s.length < 2) return s;
        //const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
        const reverse = s => {
            if (s.length < 2) return s;
            return s.split('').reverse().join('');
        }

        let len = s.length;
        if (len <= k) return reverse(s);

        let result = '';
        while (len > 0) {
            result += reverse(s.slice(0, k));
            result += s.slice(k, 2 * k);
            s = s.slice(2 * k);
            len = s.length;
        }
        return result;
    };

    console.log('abcdefg', reverseStr('abcdefg', 2));
}
// reverseStr
{
    const reverseStr = (s, k) => {
        let result = "";
        for (let i = 0; i < s.length; i += 2 * k) {
            let str1 = s.substr(i, k);
            str1 = str1.split('').reverse().join('');  // reverse first half
            let str2 = s.substr(i + k, k);
            result += str1 + str1;
        }
        return result;
    };
}
// Power Set : all sub set
{
    function allSubsets(arr) {
        if (arr.length === 0) { return [[]]; }
        const prev = allSubsets(arr.slice(1));
        const next = prev.map(el => [...el, arr[0]]);
        return [...prev, ...next];
    }
}
// Power Set : all sub set
{
    function allSubsets(arr) {
        const maxIndex = arr.length - 1;
        let result = [[]];
        arr.forEach(el => {
            result.forEach(subset => {
                result.push([...subset, el]);
            })
        })
        return result;
    }
}
// Power Set : all sub set
{
    const set = ['x', 'y', 'z'];
    const powerSet = (arr = []) => {
        const res = [];
        const { length } = arr;
        const numberOfCombinations = 2 ** length;
        for (let combinationIndex = 0; combinationIndex < numberOfCombinations; combinationIndex += 1) {
            const subSet = [];
            for (let setElementIndex = 0; setElementIndex < arr.length;
                setElementIndex += 1) {
                if (combinationIndex & (1 << setElementIndex)) {
                    subSet.push(arr[setElementIndex]);
                };
            };
            res.push(subSet);
        };
        return res;
    };
    console.log(powerSet(set));
}
// Ransom Note : Array
// https://leetcode.com/problems/ransom-note/
{
    const canConstruct = (ransomNote, magazine) => {
        //你可以假设两个字符串均只含有小写字母
        if (magazine.length < ransomNote.length) return false;
        let arr = Array(26).fill(0);
        console.log('arr1 :', arr);
        for (let i = 0; i < magazine.length; i++) {
            let code = magazine.charCodeAt(i);
            console.log('i', i, 'code1 :', code);
            arr[code - 97]++;
        }
        console.log('arr2 :', arr);
        for (let i = 0; i < ransomNote.length; i++) {
            let code = ransomNote.charCodeAt(i);
            console.log('i', i, 'code1 :', code);
            arr[code - 97]--;
            console.log('code : ', code, '-- arr[code - 97]', arr[code - 97]);
            if (arr[code - 97] < 0) return false;
            console.log('arr4 :', arr);
        }
        console.log('arr3 :', arr);
        return true;
    }
    console.log('canConstruct', canConstruct('aa', 'ab')); //false
}
{
    var canConstruct = function (ransomNote, magazine) {
        let magazineCopy = magazine
        if (ransomNote.length > magazine.length) return false;
        let ransomArr = ransomNote.split("")
        ransomArr.forEach(function replacer(item, index) {
            magazine = magazine.replace(item, "");
        });
        return magazine.length === magazineCopy.length - ransomArr.length;
    };
}
//fourSum : Map
// https://leetcode.com/problems/4sum-ii/
// O(N^2)
{
    const fourSum = (arr1, arr2, arr3, arr4) => {
        let map1 = new Map();
        let count = 0;
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                let key = arr1[i] + arr2[j];
                let value = map1.get(key);
                value ? map1.set(key, value + 1) : map1.set(key, 1);
            }
        }
        for (let i = 0; i < arr3.length; i++) {
            for (let j = 0; j < arr4.length; j++) {
                let key = arr3[i] + arr4[j];
                let value = map1.get(-1 * key);
                value ? count += value : {}
            }
        }
        return count;
    }

    let A = [1, 2]
    let B = [-2, -1]
    let C = [-1, 2]
    let D = [0, 2]
    console.log('fourSum', fourSum(A, B, C, D)) //2
}
// sliding window : minSubArrayLen  
// 209 https://leetcode-cn.com/problems/minimum-size-subarray-sum/
// minSubArrayLen
{
    //console.log(undefined + 1);
    const minSubArrayLen = (nums, target) => {
        if (nums.length === 0) return o;
        let fast = 0, slow = 0;
        let currentMaxSum = 0 //nums[fast];

        let minLen = nums.length + 1; // nice

        //console.log('nums[100000]', nums[100000]);
        //console.log('nums[100000] + 1', nums[100000] + 1);
        //let temp = ++fast;
        //console.log('(nums[++fast]', nums[temp], 'fast', fast,);
        while (fast < nums.length) {
            //currentMaxSum += nums[++fast]; //nums[++fast] can be NaN
            currentMaxSum += nums[fast];
            while (currentMaxSum >= target) { // has to be >=, not >
                let currentLen = fast - slow + 1;
                minLen = Math.min(minLen, currentLen);
                if (minLen === 1) return 1;
                currentMaxSum -= nums[slow++];
            }
            fast++;
        }
        return minLen > nums.length ? 0 : minLen;
    }

    console.log('minSubArrayLen-1', minSubArrayLen([1], 4)); //0
    console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 4)); //1
    console.log('minSubArrayLen', minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
    console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 3)); //1
    console.log('minSubArrayLen', minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); //0

}
{

    const minSubArrayLen = (nums, target) => {
        if (nums.length === 0) return 0;
        let minLen = nums.length + 1;
        let fast = 0;
        let slow = 0;
        let maxSum = nums[fast];
        while (fast < nums.length) {
            if (maxSum < target) {
                fast++; //NOT  nums[++fast]
                if (fast < nums.length) {
                    maxSum += nums[fast];
                    continue;
                }
            } else {
                let currentLen = fast - slow + 1;
                minLen = Math.min(minLen, currentLen);
                if (minLen === 1) return 1;
                maxSum -= nums[slow++]
            }
        }
        return minLen > nums.length ? 0 : minLen;
    }
    console.log('minSubArrayLen-1', minSubArrayLen([1], 4)); //1
    console.log('minSubArrayLen-1', minSubArrayLen([1, 4, 4], 4)); //1
    console.log('minSubArrayLen-1', minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
    console.log('minSubArrayLen-1', minSubArrayLen([1, 4, 4], 3)); //1
    console.log('minSubArrayLen-1', minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); //0

}
// binary search : searchInsert
{
    const searchInsert = (nums, val) => {
        if (nums.length === 0) return 0;
        if (nums[0] > val) return 0;
        let len = nums.length;
        if (nums[len - 1] < val) return len;
        // binary [left, right]
        let left = 0;
        let right = len - 1;
        while (left <= right) {
            let mid = left + parseInt((right - left) / 2);
            if (nums[mid] === val) return mid;
            //move mid => mid - 1 and mid + 1
            nums[mid] > val ? right = mid - 1 : left = mid + 1;
        }
        return right + 1;
    };
    console.log('searchInsert', searchInsert([4, 5], 3)); //0
    console.log('searchInsert', searchInsert([0, 1, 2, 4, 5], 3)); //3 
    console.log('searchInsert', searchInsert([1, 2, 3], 3));//2
    console.log('searchInsert', searchInsert([0, 1, 2, 4], 3));//3
    console.log('searchInsert', searchInsert([0, 1, 2, 4], 5));//4
}
// two pointers
{
    //https://leetcode-cn.com/problems/3sum/
    //https://leetcode-cn.com/problems/4sum/
}
//removeElement
{
    const removeElement = (nums, val) => {
        if (nums.length === 0) return [];
        let fast = 0;
        let slow = 0;
        while (fast < nums.length) {
            if (nums[fast] !== val) {
                nums[slow++] = nums[fast];
            }
            fast++;
        }
        nums.length = slow;
        return nums;
    }
    console.log('removeElement', removeElement([3, 2, 2, 3], 3)); //[ 2, 2 ]
    console.log('removeElement', removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //[ 0, 1, 3, 0, 4 ]
}
// removeElement
{
    var removeElement = function (nums, val) {
        if (nums.length === 0) return 0;
        let point = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[point] = nums[i];
                point++;
            }
        }
        nums.length = point;
        return nums;
    };
    console.log('removeElement', removeElement([3, 2, 2, 3], 3));
    console.log('removeElement', removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
}
// reverseWords : remove element concept
// https://leetcode-cn.com/problems/reverse-words-in-a-string/
// https://mp.weixin.qq.com/s/X3qpi2v5RSp08mO-W5Vicw
{
    const reverseWords = str => {
        if (str.length < 2) return '';
        let arr = str.trim().split(' '); // has empty space
        let point = 0
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] !== '') {
                arr[point] = arr[i];
                point++;
            }
        }
        arr.length = point;
        return arr.join(' ');
    }
    console.log(`result :`, reverseWords('a good   example'));
}
// reverseWords
{
    //The plus sign + is a greedy quantifier, which means one or more times. For example, expression X+ matches one or more X characters. Therefore, the regular expression \s matches a single whitespace character, while \s+ will match one or more whitespace characters

    const reverseWords = function (s) {
        return s.trim().split(/\s+/).reverse().join(' ')
    };
    console.log(`result :`, reverseWords('a good   example'));
}
// reversWords
// https://mp.weixin.qq.com/s/X3qpi2v5RSp08mO-W5Vicw
{
    const reverseWords = function (s) {

        if (s.length < 2) return s;
        let arr = s.split(' ');

        const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
        const removeSpace = (arr) => {
            let result = [];
            for (let i = 0; i < arr.length; i++) {
                arr[i].trim().length ? result.push(arr[i]) : {};
            }
            return result;
        }
        const reverse = (arr, left = 0, right = arr.length - 1) => {
            while (left < right) {
                swap(arr, left, right);
                left++;
                right--;
            }
            return arr;
        }
        return reverse(removeSpace(arr)).join(' ');

    };

    console.log(`result :`, reverseWords('a good   example'));
}
// arrUnionAndDifference
{

    class arrUnionAndDifference {
        constructor() { };
        arrUnion(arr1, arr2) {
            return [...new Set([...arr1, ...arr2])];

        }
        arrAnd(arr1, arr2) {
            let a = [...new Set(arr1)];
            let b = new Set(arr2);
            return arr1.filter(x => b.has(x));
            //return [...new Set(nums1)].filter(n => nums2.includes(n))
        }
        arrDifference(arr1, arr2) {
            let a = [...new Set(arr1)];
            let b = new Set(arr2);
            return a.filter(x => !b.has(x));
        }
    }

    let obj = new arrUnionAndDifference();
    console.log('arr UNION', obj.arrUnion([1, 2, 3, 4], [3, 4, 5, 6]));
    console.log('arr AND', obj.arrAnd([1, 2, 3, 4], [3, 4, 5, 6]));
    console.log('arr DIFF', obj.arrDifference([1, 2, 3, 4], [3, 4, 5, 6]));
}
//isAnagram : https://www.byte-by-byte.com/anagrams/
{
    // 1 : toLowerCase not toLower
    // 2 : sort has to be arr, not string
    const isAnagram = (str1, str2) => {
        if (str1.length !== str2.length) return false;
        return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
    }
    console.log('isAnagram("", "") =', isAnagram("", ""));//isAnagram("", "") = true
    console.log('isAnagram("A", "A") =', isAnagram("A", "A"));//isAnagram("A", "A") = true
    console.log('isAnagram("A", "B") =', isAnagram("A", "B"));//isAnagram("A", "B") = false
    console.log('isAnagram("ab", "ba") =', isAnagram("ab", "ba"));//isAnagram("ab", "ba") = true
    console.log('isAnagram("AB", "ab") =', isAnagram("AB", "ab"));//isAnagram("AB", "ab") = true
}
// isAnagram
// 1 : str1.charCodeAt(i)
{
    const isAnagram = (str1, str2) => {
        if (str1.length !== str2.length) return false;
        let s1 = str1.toLowerCase();
        let s2 = str2.toLowerCase();
        if (s1 === s2) return true;
        let map = {};
        let len = str1.length;
        for (let i = 0; i < len; i++) {
            let index = str1.charCodeAt(i);
            map[index] = (map[index] || 0) + 1;
        }
        for (let i = 0; i < len; i++) {
            let index = str2.charCodeAt(i);
            if (!map[index]) return false; // include check negative and 0
            map[index]--;
        }
        return true;
    }


    console.log('isAnagram("acb", "bba") =', isAnagram("acb", "bba"));//isAnagram("abb", "baa") = true
    console.log('isAnagram("abb", "baa") =', isAnagram("abb", "baa"));//isAnagram("abb", "baa") = true
    console.log('isAnagram("", "") =', isAnagram("", ""));//isAnagram("", "") = true
    console.log('isAnagram("A", "A") =', isAnagram("A", "A"));//isAnagram("A", "A") = true
    console.log('isAnagram("A", "B") =', isAnagram("A", "B"));//isAnagram("A", "B") = false
    console.log('isAnagram("ab", "ba") =', isAnagram("ab", "ba"));//isAnagram("ab", "ba") = true
    console.log('isAnagram("AB", "ab") =', isAnagram("AB", "ab"));//isAnagram("AB", "ab") = true

}
console.log("=====string===END=====================================================")
// firstUniqChar // O(N)
{
    const firstUniqChar = str => {
        if (str.length === 0) return 0;
        if (str.length === 1) return 1;
        for (let c of str) {
            if (str.indexOf(c) === str.lastIndexOf(c)) return str.indexOf(c);
        }
        return -1;
    }
    console.log('firstUniqChar -1 : ', JSON.stringify(firstUniqChar('leetcode'))) //0
    console.log('firstUniqChar -2 : ', JSON.stringify(firstUniqChar(''))) //-1
    console.log('firstUniqChar -3 : ', JSON.stringify(firstUniqChar('l'))) //0
    console.log('firstUniqChar -4 : ', JSON.stringify(firstUniqChar('eetcbebecee'))) //2
}
// firstUniqChar // O(N)
{
    var firstUniqChar = function (s) {
        if (s.length === 0) return -1;
        if (s.length === 1) return 0;
        let map = new Map();
        for (let i = 0; i < s.length; i++) {
            let key = s[i];
            let value = map.get(key);
            value > 0 ? map.set(key, value + 1) : map.set(key, 1);
        }
        for (let key of map.keys()) {
            if (map.get(key) === 1) {
                return s.indexOf(key);
            }
        }
        return -1;
    };
    console.log('firstUniqChar -1 : ', JSON.stringify(firstUniqChar('leetcode'))) //0
    console.log('firstUniqChar -2 : ', JSON.stringify(firstUniqChar(''))) //-1
    console.log('firstUniqChar -3 : ', JSON.stringify(firstUniqChar('l'))) //0
    console.log('firstUniqChar -4 : ', JSON.stringify(firstUniqChar('eetcbebecee'))) //2
}
// firstUniqChar ; fast one max loop 26 characters
{
    var firstUniqChar = function (s) {
        if (s.length === 0) return -1;
        if (s.length === 1) return 0;
        let len = s.length;
        let min = len;
        for (let c of "abcdefghijklmnopqrstuvwxyz") {
            let exist = s.indexOf(c);
            if (exist !== -1 && s.lastIndexOf(c) === exist) {
                min = Math.min(min, exist);
            }
        }
        return min === len ? -1 : min;
    };
    console.log('firstUniqChar -1 : ', JSON.stringify(firstUniqChar('leetcode'))) //0
    console.log('firstUniqChar -2 : ', JSON.stringify(firstUniqChar(''))) //-1
    console.log('firstUniqChar -3 : ', JSON.stringify(firstUniqChar('l'))) //0
    console.log('firstUniqChar -4 : ', JSON.stringify(firstUniqChar('eetcbebecee'))) //2
}
//firstUniqChar
{
    var firstUniqChar = function (s) {
        if (s.length === 0) return -1;
        if (s.length === 1) return 0;
        for (let i = 0; i < s.length; i++) {
            let key = s[i];
            if (s.indexOf(key) === s.lastIndexOf(key)) return i;
        }
        return -1;
    };
}
// findDisappearNumbers
{
    const findDisappearNumbers = nums => {
        if (nums.length === 0) return 1;
        let set = new Set(nums);
        let len = nums.length;
        let p = 0;
        for (let i = 1; i <= len; i++) {
            if (!set.has(i)) {
                nums[p] = i;
                p++;
            }
        }
        return nums.slice(0, p);
    }
    console.log('findDisappearNumbers', JSON.stringify(findDisappearNumbers([4, 3, 2, 7, 8, 2, 3, 1])));
    console.log('findDisappearNumbers', JSON.stringify(findDisappearNumbers([1, 1])));
}
//threeSum
{
    const threeSum = (nums) => {// 总时间复杂度：O(n^2)
        let result = [];
        if (nums == null || nums.length <= 2) return result;

        nums.sort((a, b) => a - b); // O(nlogn)

        for (let i = 0; i < nums.length - 2; i++) { // O(n^2)
            if (nums[i] > 0) break; // 第一个数大于 0，后面的数都比它大，肯定不成立了
            if (i > 0 && nums[i] == nums[i - 1]) continue; // 去掉重复情况
            let target = -nums[i];
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                if (nums[left] + nums[right] === target) {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++; right--; // 首先无论如何先要进行加减操作

                    // 现在要增加 left，减小 right，但是不能重复，比如: [-2, -1, -1, -1, 3, 3, 3], i = 0, left = 1, right = 6, [-2, -1, 3] 的答案加入后，需要排除重复的 -1 和 3
                    while (left < right && nums[left] == nums[left - 1]) left++;
                    while (left < right && nums[right] == nums[right + 1]) right--;
                } else if (nums[left] + nums[right] < target) {
                    left++;
                } else {  // nums[left] + nums[right] > target
                    right--;
                }
            }
        }
        return result;
    }

    console.log('threeSum - 1', threeSum([-4, -1, -1, 0, 1, 2,]));
    console.log('threeSum - 2 :', threeSum([0, 0, 0, 0])) //[0,0,0]
    console.log('threeSum - 8 :', threeSum([-2, 0, 1, 1, 2])) //[[-2,0,2],[-2,1,1]]
    console.log('threeSum - 7 :', threeSum([-1, 0, 0, 0, 0, 1])) //[[0,0,0], [ -1, 0, 1 ]]
    console.log('threeSum - 1 :', threeSum([-1, 0, 1, 2, -1, -4])) //[[-1,-1,2],[-1,0,1]
}
// longestPalindrome : brute force
// j <= len
// checking len > maxStr.length before checking isPalindrome(tmpStr)
{
    const longestPalindrome = str => {
        if (str.length === 1) return str;
        const isPalindrome = str => {
            //console.log('callIsPalindrome', str);
            if (str.length === 1) return true;
            let left = 0;
            let right = str.length - 1;
            while (left < right) {
                if (str[left] !== str[right]) return false;
                left++;
                right--;
            }
            return true;
        }
        let maxStr = '';
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j <= str.length; j++) {
                let tmpStr = str.slice(i, j);
                //console.log('tmpStr : ', tmpStr);
                let len = tmpStr.length;
                if (len > maxStr.length && isPalindrome(tmpStr)) {
                    maxStr = tmpStr;
                    //console.log('maxStr : ', maxStr);
                }
            }
        }
        return maxStr;
    }
    //console.log('longestPalindrome - 1', longestPalindrome("cbbd")) //bb
    console.log('longestPalindrome - 2', longestPalindrome("racecar")) //racecar
    //console.log('longestPalindrome - 3', longestPalindrome("babad")) //bab
    //console.log('longestPalindrome - 4', longestPalindrome("babab")) //babab
    //console.log('longestPalindrome - 5', longestPalindrome("ababbad")) //abba
    //console.log('longestPalindrome - 6', longestPalindrome("c")) //c
    //console.log('longestPalindrome - 7', longestPalindrome("bb")) //bb
}
// repeatStrNTimes
{
    const repeatStrNTimes = (str, num) => {
        let array = new Array(num + 1); //empty arr
        return array.join(str);

    }
    console.log('repeatStrNTimes', repeatStrNTimes('abc', 3));
}

console.log('================ start top 100 ================');
// maxWaterContainer
{
    const maxWaterContainer = arr => {
        if (arr.length < 2) return 0;
        let ai = 0;
        let bi = arr.length - 1;
        let maxArea = 0;
        while (ai < bi) {
            let height = Math.min(arr[ai], arr[bi]);
            let width = bi - ai;
            maxArea = Math.max(maxArea, height * width);
            // not ai < bi
            arr[ai] < arr[bi]
                ? ai++
                : bi--;
        }
        return maxArea;
    }

    // area = height x width
    // height = min (a, b)
    // width = bi - ai

    console.log('9-1: maxArea = ', maxWaterContainer([7])) //0
    console.log('9-2: maxArea = ', maxWaterContainer([7, 1])) // 1
    console.log('9-3: maxWaterContainer', JSON.stringify(maxWaterContainer([7, 1, 2, 3, 9]))); //28

}
// longestSubString
{
    const longestSubString = str => {
        if (str.length === 0) return 0;
        if (str.length === 1) return 1;
        let maxLen = 0;
        let map = new Map();
        let fast = 0;
        let slow = 0;
        while (fast < str.length) {
            let key = str[fast];
            let value = map.get(key);
            if (value >= slow) {
                slow = value + 1;
            }
            map.set(key, fast);
            maxLen = Math.max(maxLen, fast - slow + 1);
            fast++;
        }
        return maxLen;
    }
    console.log('10-1: longestSubString', JSON.stringify(longestSubString('asdfadsfasavcbdferes'))); // 9
    console.log('10-2: longestSubString', JSON.stringify(longestSubString('asdfads'))); // 4
    console.log('10-3: longestSubString', longestSubString('au'));
}
// longestSubString
{
    const longestSubString = s => {

        if (s.length < 2) return s.length;

        let work = []
        let len = 0;
        for (let i = 0; i < s.length; i++) {
            const index = work.indexOf(s[i]);
            if (index < 0) { //not in the string
                work.push(s[i]);
                if (work.length >= len) {
                    len = work.length;
                }
            } else {
                work.push(s[i]);
                work.splice(0, index + 1);
            }
        }
        return len;
    };
    console.log('10-1: longestSubString', JSON.stringify(longestSubString('asdfadsfasavcbdferes'))); // 9
    console.log('10-2: longestSubString', JSON.stringify(longestSubString('asdfads'))); // 4
    console.log('10-3: longestSubString', longestSubString('au'));
}
// passingFlowerWithQueue
{
    const passingFlowerWithQueue = num => {
        let queue = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        while (queue.length > 1) {
            for (let i = 0; i < num - 1; i++) {
                queue.push(queue.shift());
            }
            let removed = queue.shift();
        }
        return queue;
    }
    //let queue = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; 

    console.log('passingFlowerWithQueue 3:', passingFlowerWithQueue(3)) // passFlower 3: [ 'd' ]
    console.log('passingFlowerWithQueue 2:', passingFlowerWithQueue(2)) // passFlower 2: [ 'g' ]
}
// ToBinary
{
    // 10 / 2 = 5 --- 0
    //  5 / 2 = 2 --- 1
    //  2 / 2 = 1 --- 0
    const ToBinary = num => {
        let str = "";
        while (num) {
            str = num % 2 + str;
            num = parseInt(num / 2);
        }
        return str;
    }
    console.log('ToBinary 10 ->:', ToBinary(10)); // ToBinary 10 ->: 1010
    console.log('ToBinary 8 ->:', ToBinary(8)); // ToBinary 10 ->: 1000
    console.log('ToBinary 5 ->:', ToBinary(5)); // ToBinary 5 ->: 101
    console.log('ToBinary 10 ->:', (10).toString(2)); // ToBinary 10 ->: 1010
    console.log('ToBinary 5 ->:', (5).toString(2)); // ToBinary 5 ->: 101
}

// reverseInteger
{
    // -321 -> - 123
    const reverseInteger = num => {
        if (num < 10 && num > -10) return num;
        let isNegative = -1;
        num > 0 ? isNegative = 1 : num = isNegative * num;
        let result = 0;
        while (num) {
            result = result * 10 + num % 10;
            num = parseInt(num / 10);
        }
        return result * isNegative;
    }
    console.log('1 - 1: reverseInteger', JSON.stringify(reverseInteger(-321))); // -123
    console.log('1 - 2: reverseInteger', JSON.stringify(reverseInteger(0))); // 0
    console.log('1 - 3: reverseInteger', JSON.stringify(reverseInteger(10))); // 0

}
// buySellStock
{
    const buySellStock = arr => {
        if (arr.length < 2) return arr;
        let maxProfit = 0;
        let maxCurrentPrice = 0;
        for (let i = arr.length - 1; i >= 0; i--) {
            let currentPrice = arr[i];
            maxCurrentPrice = Math.max(maxCurrentPrice, currentPrice);
            maxProfit = Math.max(maxProfit, maxCurrentPrice - currentPrice);
        }
        return maxProfit
    }
    console.log('2: buySellStock', JSON.stringify(buySellStock([9, 11, 8, 5, 7, 10]))); // 5
}
// fibEndCall - tail call
// https://leetcode-cn.com/problems/fibonacci-number/solution/4chong-jie-jue-fang-shi-du-ji-bai-liao-1-92ud/
{

    const fibEndCall = (n, f1 = 1, f2 = 1) => {
        if (n < 3) return f2;
        return fibEndCall(n - 1, f2, f2 + f1);
    }
    console.log('3: fibEndCall', JSON.stringify(fibEndCall(45))); //1, 1, 2, 3, 5,..., 1134903170
}
// fibonacci - memo
{
    const fibonacci = n => {
        if (n < 3) return 1;
        let memo = {};
        const fib = n => {
            if (n < 3) return 1;
            if (memo[n]) return memo[n];
            return memo[n] = fib(n - 1) + fib(n - 2);
        }
        return fib(n);
    }
    console.log('4: fibonacci', JSON.stringify(fibonacci(45))); //1, 1, 2, 3, 5,..., 1134903170
}
{
    console.log(!2); // false
    console.log(![2].length); // false
    console.log(![].length); // true
}
// isBalance
{
    // 括号匹配是使用Stack栈解决的经典问题
    // 如果还记得编译原理的话，编译器在 词法分析的过程中处理括号、花括号等这个符号的逻辑，也是使用了Stack这种数据结构
    const isBalance = arr => {
        if (arr.length % 2 !== 0) return false;
        const map = { "(": ")", "{": "}", "[": "]" };
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let key = arr[i];
            if (map[key]) {
                result.push(key);
            } else {
                let last = result.pop();
                if (map[last] !== key) return false;
            }
        }
        return !result.length; //result.length === 0;
    }
    console.log('5: isBalance: ', JSON.stringify(isBalance("[{()()}]")));//true
    console.log('5: isBalance: ', JSON.stringify(isBalance("[[[]")));//false
}
// isPalindrome
{
    const isPalindrome = arr => {
        if (arr.length < 2) return true;
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            if (arr[left] !== arr[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    console.log('6 - 1: isPalindrome', JSON.stringify(isPalindrome('amanaplanacanalpanama'))) // true
    console.log('6 - 2: isPalindrome', JSON.stringify(isPalindrome('a'))) // true
    console.log('6 - 3: isPalindrome', JSON.stringify(isPalindrome(''))) // true
    console.log('6 - 4: isPalindrome', JSON.stringify(isPalindrome('abcdc'))) // false
}
// sortColor
{
    const sortColor = arr => {
        if (arr.length < 2) return arr;
        let p0 = 0;
        let current = 0;
        let p2 = arr.length - 1;
        while (current <= p2) {
            if (arr[current] === 2) {
                swap(arr, current, p2);
                p2--;
            } else if (arr[current] === 0) {
                swap(arr, current, p0);
                p0++;
                current++;
            } else current++;
        }
        return arr;
    }

    console.log('7 - 1: sortColor', JSON.stringify(sortColor([0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]))); // [0,0,0,0,0,1,1,1,1,2,2,2,2,2]
    console.log('7 - 2: sortColor', JSON.stringify(sortColor([0, 1, 2])));// [0,1,2]
    console.log('7 - 3: sortColor', JSON.stringify(sortColor([0, 0, 2, 1])));// [0,0,1,2]
    console.log('7 - 4: sortColor', JSON.stringify(sortColor([2, 0])));// [0,2]
    console.log('7 - 5: sortColor', JSON.stringify(sortColor([2])));// [2]
}
// matrixSpiral
{
    const arr = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]
    ]
    const matrixSpiral = arr => {
        if (arr.length === 0) return arr;
        if (arr.length === 1) return arr[0]
        let colStart = 0;
        let colEnd = arr[0].length - 1;
        let rowStart = 0;
        let rowEnd = arr.length - 1;
        let result = [];
        while (rowStart <= rowEnd && colStart <= colEnd) {
            for (let i = colStart; i <= colEnd; i++) {
                result.push(arr[rowStart][i]);
            } rowStart++;

            for (let i = rowStart; i <= rowEnd; i++) {
                result.push(arr[i][colEnd]);
            } colEnd--;

            for (let i = colEnd; i >= colStart; i--) {
                result.push(arr[rowEnd][i]);
            } rowEnd--;

            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(arr[i][colStart]);
            } colStart++;
        }
        return result;

    }
    console.log('8: matrixSpiral', JSON.stringify(matrixSpiral(arr)));
    // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
}
// Spiral Matrix III : https://leetcode-cn.com/submissions/detail/152308727/
{
    //[[1,2,3],
    // [8,9,4],
    // [7,6,5]]
    {
        const generateMatrix = n => {
            if (n === 0) return [];
            if (n === 1) return [[1]];
            //let result = [];
            let rowStart = 0;
            let rowEnd = n - 1;
            let colStart = 0;
            let colEnd = n - 1;
            let count = 1;
            let result = Array.from({ length: n }, () => new Array(n));
            /*
            for (let i = 0; i < n; i++) {
                let arr = new Array(n);
                result.push(arr);
            }*/
            while (rowStart <= rowEnd && colStart <= colEnd) {
                for (let i = colStart; i <= colEnd; i++) {
                    result[rowStart][i] = count++;
                }
                rowStart++;
                for (let i = rowStart; i <= rowEnd; i++) {
                    result[i][colEnd] = count++;
                }
                colEnd--;
                for (let i = colEnd; i >= colStart; i--) {
                    result[rowEnd][i] = count++;
                }
                rowEnd--;
                for (let i = rowEnd; i >= rowStart; i--) {
                    result[i][colStart] = count++;
                }
                colStart++;
            }
            return result;
        };

        console.log('generateMatrix(3) : ', generateMatrix(3));
        console.log('generateMatrix(0) : ', generateMatrix(0));
        console.log('generateMatrix(1) : ', generateMatrix(1));
        console.log('generateMatrix(4) : ', generateMatrix(4));
    }
}
//bubbleSort
{
    const bubbleSort = arr => {
        if (arr.length < 2) return arr;
        for (let i = arr.length - 1; i >= 0; i--) {
            let isSwap = false;
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    isSwap = true;
                }
            }
            if (!isSwap) break;
        }
        return arr;
    }
    console.log('1 - 1: bubbleSort   ', JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));//[1,2,3,4,5,6,7,8]
    console.log('1 - 2: bubbleSort   ', JSON.stringify(bubbleSort([8, 2, 1, 3, 5])));//[1,2,3,5,8]
    console.log('1 - 3: bubbleSort   ', JSON.stringify(bubbleSort([0])));//[0]
    console.log('1 - 4: bubbleSort   ', JSON.stringify(bubbleSort([8, 1])));//[1,8]
}
//selectionSort
{
    const selectionSort = arr => {
        if (arr.length < 2) return arr;
        for (let i = 0; i < arr.length; i++) {
            let smallIndex = i;
            for (let j = smallIndex; j < arr.length; j++) {
                if (arr[j] < arr[smallIndex]) {
                    smallIndex = j;
                }
            }
            if (smallIndex !== i) swap(arr, smallIndex, i);
        }
        return arr;
    }
    console.log('2: selectionSort', JSON.stringify(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])));
}
//insertionSort
{
    const insertionSort = arr => {
        if (arr.length < 2) return arr;
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;
            for (; j >= 0; j--) {
                if (arr[j] > current) {
                    arr[j + 1] = arr[j];
                } else break;
            }
            arr[j + 1] = current;
        }
        return arr;
    }
    console.log('3: insertionSort', JSON.stringify(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])));

}
//mergeSort
{
    const mergeSortHelp = arr => {
        if (arr.length < 2) return arr;
        const merge = (left, right) => {
            if (left.length === 0) return right;
            if (right.length === 0) return left;
            let result = [];
            while (left.length && right.length) {
                left[0] < right[0]
                    ? result.push(left.shift())
                    : result.push(right.shift());
            }
            return result.concat(left, right);
        }
        const mergeSort = arr => {
            if (arr.length < 2) return arr;
            let mid = arr.length >> 1;
            let left = mergeSort(arr.slice(0, mid));
            let right = mergeSort(arr.slice(mid));
            return merge(left, right);
        }
        return mergeSort(arr);
    }
    console.log('4: mergeSortHelp', JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));

}
//quickSort
{
    const quickSortHelp = arr => {
        if (arr.length < 2) return arr;
        const getPivotIndex = (arr, low = 0, high = arr.length - 1) => {
            let pi = low;
            let pivot = arr[high];
            for (let i = low; i <= high; i++) {
                if (arr[i] < pivot) {
                    swap(arr, i, pi);
                    pi++;
                }
            }
            swap(arr, high, pi);
            return pi;
        }
        const quickSort = (arr, low = 0, high = arr.length - 1) => {
            if (arr.length < 2) return arr;
            if (low < high) {
                let pi = getPivotIndex(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
            return arr;
        }
        return quickSort(arr);
    }
    console.log('5: quickSortHelp', JSON.stringify(quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
}
// Stack & Queue
{
    class Stack {
        constructor() {
            this.result = [];
        }
        //[1, 2, 3]
        push(x) {
            this.result.push(x);
        }
        pop() {
            return this.result.pop();
        }
        peek() {
            return this.result[this.result.length - 1];
        }
        isEmpty() {
            return this.result.length === 0;
        }
    }
    class Queue {
        constructor() {
            this.result = [];
        }
        enqueue(x) {
            this.result.push(x);
        }
        dequeue() {
            return this.result.shift(x);
        }
        peek() {
            return this.result[0];
        }
        isEmpty() {
            return !this.result.length;
        }
    }
    /*
    实现 MyQueue 类：
        void push(int x) 将元素 x 推到队列的末尾
        int pop() 从队列的开头移除并返回元素
        int peek() 返回队列开头的元素
        boolean empty() 如果队列为空，返回 true ；否则，返回 false
    */
    /*
     将一个栈当作输入栈，用于压入 push 传入的数据；另一个栈当作输出栈，用于 pop 和 peek 操作。
     每次 pop 或 peek 时，若输出栈为空则将输入栈的全部数据依次弹出并压入输出栈，这样输出栈从栈顶往栈底的顺序就是队列从队首往队尾的顺序。
    */
    class twoStackToQueue {
        // 使用栈来模式队列的行为，如果仅仅用一个栈，是一定不行的，所以需要两个栈
        constructor() {
            this.inStack = []
            this.outStack = [];
        }
        in2Out() {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop());
            }
        }
        push(x) {
            this.inStack.push(x);
        }
        pop() {
            // 3 -> 2 -> 1
            // 1 -> 2 -> 3
            if (this.outStack.length === 0) {
                this.in2Out();
            }
            return this.outStack.pop(x);
        }
        peek() {
            // in  : 1, 2, 3
            // out : 3, 2, 1
            if (this.outStack.length === 0) {
                this.in2Out();
            }
            return this.outStack[this.outStack.length - 1];
        }
        isEmpty() {
            return this.inStack.length === 0 && this.outStack.length === 0;
        }
    }

    {
        class twoQueueToStack {
            constructor() {
                this.queue = [];
                this._queue = [];
            }
            push(x) {
                this.queue.push(x);
            }
            pop() {
                while (this.queue.length > 1) {
                    this._queue.push(this.queue.shift());
                }
                let ans = this.queue.shift();
                while (this._queue.length) {
                    this.queue.push(this._queue.shift());
                }
                return ans;
            }
            top() {
                return this.queue.slice(-1)[0];
            }
            empty() {
                return !this.queue.length;
            }
        }
    }
}
// LinkList
{
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null
        }
    }
    class LinkedList {
        constructor(value) {
            this.head = new Node(value);
            // cannot use if (this.head === null) this.head = new Node(value);
            // the new create a empty obj with constructor
        }
        append(value) {
            let newNode = new Node(value);
            if (this.head === null) {
                this.head = newNode;
            } else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
            return this;
        }
        //Better way : https://mp.weixin.qq.com/s/pnvVP-0ZM7epB8y3w_Njwg
        reverseListRecursive = (pre = null, current = this.head) => {
            if (current === null) return pre;
            let next = current.next;
            current.next = pre;
            return this.reverseListRecursive(current, next);
        }
        reverseList = (current = this.head) => {
            // 1->2->3->4->5->NULL
            if (current === null) return null;
            // last node or only one node 
            if (current.next === null) return current;
            let newHeadNode = this.reverseList(current.next);
            console.log('current.next', current.next, 'newHeadNode : ', newHeadNode);
            // change references for middle chain
            current.next.next = current;
            current.next = null;
            // send back new head node in every recursion 
            return newHeadNode;
        }
        reverse() {
            if (this.head === null) return null;
            let current = this.head;
            let pre = null;
            let next = null;
            while (current) {
                next = current.next;
                current.next = pre;
                pre = current;
                current = next;
            }
            this.head = pre;
            return this;
        }
        findMid() {
            if (this.head === null) return null;
            let fast = this.head;
            let slow = this.head;
            while (fast && fast.next) {
                fast = fast.next.next;
                slow = slow.next;
            }
            return slow.value;
        }
        findLastKth(k) {
            if (this.head === null) return null;
            let fast = this.head;
            let slow = this.head;
            while (fast && k) {
                fast = fast.next;
                k--;
            }
            if (k > 0) return null;
            while (fast) {
                fast = fast.next;
                slow = slow.next;
            }
            return slow.value;
        }
        isCircularFastSlow() {
            if (this.head === null) return false;
            let fast = this.head;
            let slow = this.head;
            if (this.head.next) fast = fast.next;  //at the beginning, fast one step ahead

            while (fast && fast.next) {
                if (fast.next === slow) return true;
                if (fast.next.next === slow) return true;
                fast = fast.next.next;
                slow = slow.next;
            }
            return false;
        }
        detectCycleNode = head => {
            if (head === null) return null;
            let fast = head;
            let slow = head;
            while (fast && fast.next) {
                fast = fast.next.next;
                slow = slow.next;
                if (fast === slow) {
                    let index = head;
                    while (index !== fast) {
                        index = index.next;
                        fast = fast.next;
                    }
                    return index1;
                }
            }
            return null;
        }

    }
    let linkedList = new LinkedList(5);
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    linkedList.append(50);
    console.log('linkedList = ', JSON.stringify(linkedList));
    console.log('findMid = ', JSON.stringify(linkedList.findMid())); //30
    console.log('findLastKth(4) = ', JSON.stringify(linkedList.findLastKth(4))); //20
    console.log('reverse = ', JSON.stringify(linkedList.reverse()));

    console.log('*** reverseListRecursive = ', JSON.stringify(linkedList.reverseListRecursive()));
    //console.log('*** reverseList = ', JSON.stringify(linkedList.reverseList()));
    console.log('isCircularFastSlow', JSON.stringify(linkedList.isCircularFastSlow()));
    console.log('detectCycleNode', JSON.stringify(linkedList.detectCycleNode()));
    console.log('linkedList = ', JSON.stringify(linkedList));
}
// Tree
{
    class TreeNode {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
    class Tree {
        constructor() {
            this.root = null;
        }
        insertNewNode(newNode, node) {
            if (node.value < newNode.value) {
                node.left === null
                    ? node.left = newNode
                    : this.insertNewNode(node.left, newNode);
            } else {
                node.right === null
                    ? node.right = newNode
                    : this.insertNewNode(node.right, newNode);
            }
        }
        insert(value) {
            let newNode = new TreeNode(value)
            return this.root === null
                ? this.root = newNode
                : this.insertNewNode(newNode, this.root);
        }
        traversal() {

        } // 3 ways
        search(value) { }
        delete(value) { }
    }
    let t = new Tree();
    t.insert(8);
    t.insert(2);
    t.insert(3);
    t.insert(9);
    console.log('tree : ', JSON.stringify(t))

}

{
    //206. 反转链表
    // https://leetcode.com/problems/reverse-linked-list/
    /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (nex t=== undefined ? null : next)
 * }
 */
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    var reverseList = function (head) {
        if (head == null || head.next == null) {
            return head
        }
        let current = head;
        let next = null;
        let pre = null;
        // 1->2->3 , 3->2->1
        while (current) {
            next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }
        head = pre;
        return head;
    };

}
{   //recursive
    var reverseList = function (head) {
        if (head == null || head.next == null) {
            return head
        }
        console.log('head.val', head.val)
        let curr = reverseList(head.next);
        head.next.next = head
        head.next = null
        return curr
    };
}
{
    const reverse = (pre, current) => {
        if (current === null) return pre;
        let next = current.next;
        current.next = pre;
        return (current, next);
    }
    var reverseList = function (head) {
        if (head === null) return null;
        return reverse(null, head);
    }

}
// linked list circular detectCycle
// https://leetcode.com/problems/linked-list-cycle-ii/submissions/
{
    const detectCycleNode = head => {
        if (head === null) return null;
        let fast = head;
        let slow = head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) {
                let index = head;
                while (index !== fast) {
                    index = index.next;
                    fast = fast.next;
                }
                return index1;
            }
        }
        return null;
    }

}
{
    const getPermutations = str => {

    }
    console.log('getPermutations', getPermutations('a'));// => [ 'a']
    console.log('getPermutations', getPermutations('ab'));// =>  [ 'ab', 'ba']
    console.log('getPermutations', getPermutations('abc')); // => [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

}
// tree 
//////////////////////
//       a
//      / \
//     b   c
//    / \   \
//   d   e   f
/////////////////////
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//preOrder recursive : Time: O(N), Space: O(N)
{
    const dfs = root => {
        if (root === null) return;
        console.log(root.val);
        dfs(root.left);
        dfs(root.right)

    }
    console.log('dfs-preOrder', dfs(a)); //abdecf

}
//inOrder recursive : Time: O(N), Space: O(N)
{
    const dfs = root => {
        if (root === null) return;

        dfs(root.left);
        console.log(root.val);
        dfs(root.right)

    }
    console.log('dfs-inOrder', dfs(a));

}
//postOrder recursive : Time: O(N), Space: O(N)
{
    const dfs = root => {
        if (root === null) return;

        dfs(root.left);
        dfs(root.right)
        console.log(root.val);

    }
    console.log('dfs-postOrder', dfs(a));
}
// tree: dfs
{

}
// tree: bfs
{

}
//graph:
{
    const graph = {
        0: [1, 2],
        1: [2],
        2: [0, 3],
        3: [3]
    };

    const visited = new Set();
    const dfs = node => {
        console.log(node);
        visited.add(node);
        graph[node].forEach(c => {
            if (!visited.has(c)) {
                dfs(c)
            }
        })
    }
    dfs(2);
    //console.log(dfs(2));
}
{

}