/*
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

//string 
console.log("=====string=============================================================")
//anagrams : Given two strings, write a function to determine whether they are anagrams.
//https://www.byte-by-byte.com/anagrams/
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
// sortString
// 1: sort only for arr
{
    const sortString = str => {
        return str.split('').sort().join('');
    }
    console.log('sortString("acbFCABC") =', sortString("acbFCABC")); // ABCCFabc
}
{
    // lengthOfLongestSubstring :  https://leetcode.com/problems/longest-substring-without-repeating-characters/
    const lengthOfLongestSubstring = str => {
        if (str.length === 1) return str;
        let maxLen = 0;
        let map = new Map();
        let fast = 0;
        let slow = 0;
        let len = str.length;
        while (fast < len) {
            let key = str[fast];
            let value = map.get(key);
            if (value >= slow) { //
                slow = value + 1;
                maxLen = Math.max(maxLen, fast - slow + 1);
            }
            map.set(key, fast);
            fast++;
        }
        return maxLen;

    };
    console.log('lengthOfLongestSubstring("abcabcbb") =', lengthOfLongestSubstring("abcabcbb")); // 3
    console.log('lengthOfLongestSubstring("bbbbb") =', lengthOfLongestSubstring("bbbbb")); // 1
    console.log('lengthOfLongestSubstring("") =', lengthOfLongestSubstring("")); // 0
    console.log('lengthOfLongestSubstring("pwwkew") =', lengthOfLongestSubstring("pwwkew")); // 3
}
{
    var lengthOfLongestSubstring = function (s) {
        if (s.length === 0) return 0;
        let max = 0,
            left = 0,// left是子串当前的起点
            map = new Map();// map记录每个字符最后出现的位置
        for (let i = 0; i < s.length; i++) {
            if (map.has(s.charAt(i))) {
                // 发现已经出现过后，left更新到=旧元素+1开始
                left = Math.max(left, map.get(s.charAt(i)) + 1);
            }
            map.set(s.charAt(i), i);
            max = Math.max(max, i - left + 1);
        }
        return max;
    };
    console.log('lengthOfLongestSubstring("abcabcbb") =', lengthOfLongestSubstring("abcabcbb")); // 3
    console.log('lengthOfLongestSubstring("bbbbb") =', lengthOfLongestSubstring("bbbbb")); // 1
    console.log('lengthOfLongestSubstring("") =', lengthOfLongestSubstring("")); // 0
    console.log('lengthOfLongestSubstring("pwwkew") =', lengthOfLongestSubstring("pwwkew")); // 3
}
//substring nest loop (basic two pointers, i, j)
{
    const subStr = str => {
        if (str.length < 2) return str;
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j < str.length; j++) {
                console.log(str.slice(i, j));
            }
        }
    }
    console.log('subStr("abcdef") : 1 :', subStr("abcdef"));
}
// reverse string with two pointers
// 1: cannot str[left] = str[right], have to use arr;
// Notice two things here. For one, we converted the string into array to swap characters (remember strings are immutable), and we were also able to compute our j pointer from i, rather than having to actually iterate over it separately.
{
    // https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    const reverseStr = str => {
        if (str.length < 2) return str;
        let left = 0;
        let right = str.length - 1;
        let arr = str.split('');
        while (left < right) {
            swap(arr, left, right);
            left++;
            right--;
        }
        return arr.join('');
    }
    console.log('reverseStr("abcdef")', reverseStr("abcdef"));
}
{
    // https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
    //删除排序数组中的重复项 : 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度.
    // 1 : use Array.from()
    const removeDuplicates = nums => {
        return Array.from(new Set(nums));
    }
    console.log('removeDuplicates([1,1,2])', JSON.stringify(removeDuplicates([1, 1, 2])))
    console.log('removeDuplicates([0,0,1,1,1,2,2,3,3,4])', JSON.stringify(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])))

}
{ // 删除排序数组中的重复项 : 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。*/
    // 1: ask question : is it sorted array ?
    // 2 : slow++; before nums[slow] = nums[fast];
    // 3 : using arr.slice(0, slow);
    // 4 : cut off arr length set new length : nums.length = slow + 1;
    const removeDuplicates = nums => {
        if (nums.length < 2) return nums;
        let fast = 1;
        let slow = 0;
        let len = nums.length;
        nums.sort((a, b) => a - b);
        while (fast < len) {
            if (nums[fast] !== nums[slow]) {
                slow++;
                nums[slow] = nums[fast]
            }
            fast++;
        }
        //return nums.slice(0, slow + 1);
        nums.length = slow + 1;
        return nums;
    }

    console.log('removeDuplicates([1,1,2])', JSON.stringify(removeDuplicates([1, 1, 2]))) // [1,2]
    console.log('removeDuplicates([0,0,1,1,1,2,2,3,3,4])', JSON.stringify(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))) //[1,2,3,4]
}
{
    // https://leetcode-cn.com/problems/valid-palindrome/
    // 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。空字符串定义为有效的回文串
    const isPalindrome = str => {
        //return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');


    }
    console.log('isPalindrome("A man, a plan, a canal: Panama")', JSON.stringify(isPalindrome("A man, a plan, a canal: Panama"))) //true
    console.log('isPalindrome("race a car")', JSON.stringify(isPalindrome("race a car"))) //false
}
{
    //https://leetcode-cn.com/problems/reverse-words-in-a-string/
    /*
    给定一个字符串，逐个翻转字符串中的每个单词. 
    无空格字符构成一个 单词 。
    输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
    如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。*/
    var reverseWords = function (s) {
        return s.trim().split(/\s+/).reverse().join(' ');
    };
}
{
    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
    //The difference between .split(" ") and .split(/\s+/) is:
    /*
    The regex " "
    
    Match the space character literally.
    The regex /\s+/
    
    Match a single white space character (tab, line feed, carriage return, vertical tab, form feed) between one and unlimited times. (greedy)
    Short:
    
    " "   splits the array at one single space character.
    /\s/ splits the array at every kind of whitespace character
    +      Matches between one and unlimited times
    */
}