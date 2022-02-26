{
    const isAlpha = c => {
        return ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'))
    }

    var isPalindrome = function (s) {
        s = s.toLowerCase()
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (isAlpha(s[left]) && isAlpha(s[right])) {
                if (s[left] !== s[right]) {
                    return false;
                }
                else {
                    left++;
                    right--;
                }
            } else if (!isAlpha(s[left])) {
                left++;
            } else if (!isAlpha(s[right])) {
                right--;
            }
        }
        return true;
    };
}