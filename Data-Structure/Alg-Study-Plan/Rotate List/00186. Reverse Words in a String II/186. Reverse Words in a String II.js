// 186. Reverse Words in a String II
/*
Given a character array s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by a single space.

Your code must solve the problem in-place, i.e. without allocating extra space.


Example 1:

Input: s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
*/
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    function reverse(arr, start, end) {
        while (start < end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }
    var reverseWords = function (s) {
        reverse(s, 0, s.length - 1);

        let start = 0;
        for (let i = 1; i < s.length; i++) {
            if (s[i] === ' ') { // so, we need to treat the last one after this
                reverse(s, start, i - 1);
                start = i + 1;
                i++;
            }
        }

        reverse(s, start, s.length - 1); // last one not splite by " " 
    };
}