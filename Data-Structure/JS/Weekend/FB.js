//a = a + b
//b = a - b;
//a = a - b;
//array

// validPalindrome
{
    const isPalindrome = str => {
        if (str.length < 2) return true;
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    var validPalindrome = function (s) {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (s[left] !== s[right]) {
                let temp1 = s.substring(left + 1, right + 1);
                let temp2 = s.substring(left, right);
                //console.log(temp1, temp2, isPalindrome(temp1), isPalindrome(temp2)); 
                return isPalindrome(temp1) || isPalindrome(temp2)
            } else {
                left++;
                right--
            }
        }
        return true;
    };

}
// moveZeroes
{
    var moveZeroes = function (nums) {
        let totalZero = 0;

        for (let i = 0, p = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                totalZero++;
            } else {
                nums[p] = nums[i];
                p++;
            };
        }
        //console.log('nums=',nums, 'totalZero=',totalZero);

        for (let i = nums.length - 1; i > nums.length - totalZero - 1; i--) {
            nums[i] = 0;
        }

        //console.log(nums)
    };

}
//isPalindrome
{
    var isPalindrome = function (s) {
        if (s.length < 2) return true;
        let left = 0;
        let right = s.length - 1;
        //A - 65 //a - 97
        //0 - 48 //9 - 57
        const isAlphanumeric = code => {
            return (code >= 97 && code <= 122) || (code >= 48 && code <= 57)
        }
        while (left < right) {
            let cl = s[left].toLowerCase().charCodeAt(0);

            if (!isAlphanumeric(cl)) {
                left++;
                continue;
            }

            let cr = s[right].toLowerCase().charCodeAt(0);

            if (!isAlphanumeric(cr)) {
                right--;
                continue;
            }
            if (cl !== cr) return false;  // has to compare after lower case
            left++;
            right--;
        }
        return true;
    };

}
// multiply
{
    var multiply = function (num1, num2) {

        const m = num1.length;
        const n = num2.length;

        let res = Array(m + n).fill(0);

        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                let temp = +num1.charAt(i) * +num2.charAt(j);
                let posLow = i + j + 1;
                let posHigh = i + j;
                temp += res[posLow];
                res[posLow] = temp % 10;
                res[posHigh] += Math.trunc(temp / 10);
            }
        }
        while (res[0] === 0) {
            res.shift();
        }

        return res.length === 0 ? "0" : res.join('');
    };
}
// nextPermutation
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    const nextPermutation = nums => {
        //[1,2,4,6,3,1] -> [1,2,4,6,3,1] -> [1,2,6,4,3,1] -> [1,2,6,1,3,4]
        //         pi           pi
        if (nums.length === 1) return 1;
        let pi = nums.length - 1;

        for (let i = pi; i >= 0; i--) {
            if (nums[i] > nums[i - 1]) {
                pi = i - 1; break;
            }
        }
        // if pi did not move, return reverse
        if (pi === nums.length - 1) {
            return nums.reverse();
        }

        for (let i = nums.length - 1; i > pi; i--) {
            if (nums[i] > nums[pi]) {
                swap(nums, i, pi);
                break;
            }
        }

        let tmp = nums.slice(pi + 1).sort((a, b) => a - b);
        nums.length = pi + 1;
        nums.push(...tmp);

    };
    console.log(nextPermutation([1, 2, 4, 6, 3, 1])) // [1,2,6,1,3,4]
}
//nextPermutation
{

    var nextPermutation = function (nums) {
        if (nums.length <= 1) return;
        const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
        let pi = nums.length - 2; // need something to compare it
        // [4, 5, 6, 2, 1]
        //     pi
        while (pi >= 0 && nums[pi] > nums[pi + 1]) {
            pi--;
        }
        // Loop through the provided numbers from right to left
        for (let i = nums.length - 1; i > pi; i--) {
            if (nums[i] > nums[pi]) {
                swap(nums, i, pi);// Swap the numbers round
                // Reverse the rest of the array
                console.log('nums', nums);
                let chopped = nums.splice(pi + 1).sort((a, b) => a - b);
                console.log('chopped', chopped);
                nums.push(...chopped);
                return nums;
            }
        }

        // Right-hand swap not found, return lowest permutation instead
        return nums.sort((a, b) => a - b);
    };
    console.log(nextPermutation([4, 5, 8, 6, 2, 1])) // 4, 6, 1 , 2 , 5, 8

}
//removeDuplicates
{
    var removeDuplicates = function (nums) {
        if (nums.length < 2) return nums.length;
        let slow = 0;
        let fast = 0;
        //[1,2,3,2,2,3]
        //           f
        //     s
        while (fast < nums.length) {
            if (nums[fast] !== nums[slow]) {
                slow++;
                nums[slow] = nums[fast];
            }
            fast++;
        }
        return slow + 1;
    };

}
// merge two array
{
    var merge = function (nums1, m, nums2, n) {
        //[1,2, 7, 0, 0, 0]  , [2,5, 6] 
        //      p1                   p2
        //[1,2, 7, 0, 0, 7] 
        //[1,2, 7, 0, 6, 7] 
        //[1,2, 7, 0, 6, 7] 
        //[1,2, 7, 5, 6, 7] 
        //[1,2, 2, 5, 6, 7] 
        //[1,2, 2, 5, 6, 7]

        let p1 = m - 1;
        let p2 = n - 1;
        for (let p = m + n - 1; p >= 0; p--) {
            if (p2 < 0) break;
            if (p1 >= 0 && nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1--];
            } else {
                nums1[p] = nums2[p2--];
            }
        }
    };

}
//addBinary
{
    var addBinary = function (a, b) {
        let result = '';
        let carry = 0;
        for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
            let sum = carry;
            sum += i >= 0 ? parseInt(a[i]) : 0;
            sum += j >= 0 ? parseInt(b[j]) : 0;
            result = (sum % 2) + result;
            carry = parseInt(sum / 2);
        }
        return carry === 1 ? '1' + result : result;
    };

    var addBinary2 = function (a, b) {
        return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
    };

}
//groupAnagrams 
{   // map = { "abc" :["abc", "bac", "cba"], "def" :["def", "edf", "fed"] }
    var groupAnagrams = function (strs) {
        const map = new Map();
        for (let str of strs) {
            let arr = Array.from(str);
            arr.sort();
            let key = arr.toString();
            let list = map.has(key) ? map.get(key) : [];
            list.push(str);
            map.set(key, list);
        }
        return Array.from(map.values());
    };

}
{
    var groupAnagrams = function (strs) {
        const map = new Map();
        for (let str of strs) {
            let arr = Array.from(str);
            arr.sort();
            let key = arr.toString();
            let list = map.has(key) ? map.get(key) : [];
            list.push(str);
            map.set(key, list);
        }
        return Array.from(map.values());
    };
    let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    console.log(groupAnagrams(strs));
}
//26. Remove Duplicates from Sorted Array
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
//https://www.youtube.com/watch?v=9Xxv6J88KVs
{
    var removeDuplicates = function (nums) {
        if (nums.length < 2) return nums.length;
        let slow = 0;
        let fast = 0;
        //[1,2,3,2,2,3]
        //           f
        //     s
        while (fast < nums.length) {
            if (nums[fast] !== nums[slow]) {
                slow++;
                nums[slow] = nums[fast];
            }
            fast++;
        }
        return slow + 1;
    };
    console.log(removeDuplicates([1, 2, 3, 2, 2, 3]));
}
//threeSum
// https://leetcode-cn.com/problems/3sum/
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
                    left++;
                    right--; // 首先无论如何先要进行加减操作

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
//13. 罗马数字转整数
//https://leetcode-cn.com/problems/roman-to-integer/
{
    var romanToInt = function (s) {
        if (s.length === 0) return '';
        const hashTable = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        };
        let result = hashTable[s[0]];
        for (let i = 1; i < s.length; i++) {
            const current = s[i];
            const pre = s[i - 1];
            result = result + hashTable[current];
            if (hashTable[current] > hashTable[pre]) {
                result = result - 2 * hashTable[pre];
                //result = (result + (- hashTable[pre])) - hashTable[pre];
            }
        }
        return result;
    };
    console.log('romanToInt', romanToInt('III')) //3
    console.log('romanToInt', romanToInt('IV')) //4
    console.log('romanToInt', romanToInt('IX')) //9
    console.log('romanToInt', romanToInt('LVIII')) //58
    console.log('romanToInt', romanToInt('MCMXCIV')) //1994
}
{
    var romanToInt = function (s) {
        if (s.length === 0) return 0;
        const map = new Map();
        map.set("I", 1).set("V", 5).set("X", 10).set("L", 50).set("C", 100).set("D", 500).set("M", 1000);
        let result = 0;
        for (let i = 0; i < s.length; i++) {
            let key = s[i];
            result += map.get(key);
            //IV = 1 + 5 = 6
            // 4 = 6 - 2*1
            if (map.get(s[i]) > map.get(s[i - 1])) {
                result = result - 2 * map.get(s[i - 1]);
            }
        }
        return result;
    };
}
//8. String to Integer (atoi)
//https://baffinlee.com/leetcode-javascript/problem/string-to-integer-atoi.html
{
    const myAtoi = (str) => {


        var INT_MAX = 2147483647;
        var INT_MIN = -1 * (INT_MAX + 1);
        let sign = 1;
        let res = 0;
        let i = 0;

        while (str[i] === ' ') i++;

        if (str[i] === '+' || str[i] === '-') {
            sign = str[i] === '+' ? 1 : -1;
            i++;
        }

        while (str[i] >= '0' && str[i] <= '9') {
            res = (res * 10) + (str[i] - 0);
            if (sign === 1 && res > INT_MAX) return INT_MAX;
            if (sign === -1 && res > INT_MAX + 1) return INT_MIN;
            i++;
        }

        return res * sign;
    }
    console.log(myAtoi("42"))
    console.log(myAtoi("-42"))
    console.log(myAtoi("-42 word"))
    console.log(myAtoi(".42 word"))
    console.log(myAtoi("00042 word"))
    console.log(myAtoi("+-42 word"))
}
{
    var myAtoi = function (s) {
        const numValue = parseInt(s.trim(), 10);
        if (isNaN(numValue)) return 0;
        if (numValue < Math.pow(-2, 31)) return Math.pow(-2, 31);
        if (numValue > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
        return numValue;
    };
    console.log(myAtoi("42"))
    console.log(myAtoi("-42"))
    console.log(myAtoi("-42 word"))
    console.log(myAtoi(".42 word"))
    console.log(myAtoi("00042 word"))
    console.log(myAtoi("+-42 word"))
}
//3. Longest Substring Without Repeating Characters
{
    var lengthOfLongestSubstring = function (s) {
        if (s.length < 2) return s.length;
        let maxLen = 0;
        let fast = 0;
        let slow = 0;
        let map = new Map();
        while (fast < s.length) {
            let key = s[fast];
            let value = map.get(key);
            if (value >= slow) {
                slow = value + 1;
            }
            map.set(key, fast);
            maxLen = Math.max(maxLen, fast - slow + 1);
            fast++;
        }
        return maxLen;
    };
    console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('tmmzuxt'));//5
}