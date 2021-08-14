//125. 验证回文串
/*
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串

输入: "race a car"
输出: false
解释："raceacar" 不是回文串 
*/
{


    function isNumber(i) {
        return (i >= '0' && i <= '9');
    }

    function isLetter(i) {
        return ((i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z'));
    }

    var isPalindrome = function (s) {
        let arr = s.split('');
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            let a = arr[left].toLowerCase();
            let b = arr[right].toLowerCase();

            if (!isNumber(a) && !isLetter(a)) {
                left++;
                continue;
            }
            if (!isNumber(b) && !isLetter(b)) {
                right--;
                continue;
            }
            if (a !== b) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };
}
{
    function isNumber(i) {
        return (i >= '0' && i <= '9');
    }

    function isLetter(i) {
        return ((i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z'));
    }
    var isPalindrome = function (s) {
        let arr = s.toLowerCase().split('');
        //console.log('arr', arr)
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            let a = arr[left];
            let b = arr[right];
            if (!isNumber(a) && !isLetter(a)) {
                left++;
                continue;
            }
            if (!isNumber(b) && !isLetter(b)) {
                right--;
                continue;
            }
            if (a !== b) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };
}