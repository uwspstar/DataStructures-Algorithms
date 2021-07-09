//186. Reverse Words in a String II
/*
Given a character array s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by a single space.

Your code must solve the problem in-place, i.e. without allocating extra space.

Example 1:
Input: s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]

Example 2: Input: s = ["a"] Output: ["a"]
*/
{
    //Your code must solve the problem in-place, i.e. without allocating extra space.
    //["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    const reverse = (arr, left = 0, right = arr.length - 1) => {
        while (left < right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    var reverseWords = function (s) {
        if (s.length < 2) return s;
        reverse(s);
        let p = 0;
        let i = 0
        for (; i < s.length; i++) {
            if ((s[i] === ' ' && i < s.length)) {
                reverse(s, p, i - 1);
                p = i + 1;
            }
        }
        reverse(s, p, i - 1); //last empty to end
        return s;
    };
    //Reverse Words in a String
}