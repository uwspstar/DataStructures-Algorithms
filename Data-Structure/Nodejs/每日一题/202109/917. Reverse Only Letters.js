//917. Reverse Only Letters
/*
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Input: s = "ab-cd"
Output: "dc-ba"

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
 
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/
{
    const isEnglishLetter = c => {
        let code = c.charCodeAt(0);
        return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    }
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    //T: O(N)
    //S: O(N)
    var reverseOnlyLetters = function (s) {
        if (s.length < 2) return s;
        
        let arr = s.split('');
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {

            if (isEnglishLetter(arr[left]) && isEnglishLetter(arr[right])) {
                swap(arr, left, right);
                left++;
                right--;
            } else {
                if (!isEnglishLetter(arr[left])) {
                    left++;
                } else if (!isEnglishLetter(arr[right])) {
                    right--;
                }
            }
        }
        return arr.join('');

    };
}
{
    var reverseOnlyLetters = function (s) {
        let result = '';
        let left = 0;
        let right = s.length - 1;
        const isChar = (char) => /[a-zA-Z]/.test(char);
        const arr = s.split('');

        while (right >= left) {
            if (!isChar(arr[left]) && !isChar(arr[right])) {
                left++;
                right--;
            } else if (!isChar(arr[left])) {
                left++;
            } else if (!isChar(arr[right])) {
                right--;
            } else {
                const temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }


        return arr.join('');

    };
}
