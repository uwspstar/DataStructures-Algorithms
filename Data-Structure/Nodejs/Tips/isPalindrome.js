const isPalindrome = (str, left, right) => {
    while (left < right) {
        if (str[left++] !== str[right--]) return false;
    }
    return true;
}