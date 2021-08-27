{
    //Two Pointers
    // T: O(N)
    // S: O(1)
    var reverseString = function (s) {
        //The input string is given as an array of characters s.
        if (s.length < 2) return s;
        const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            swap(s, left, right);
            left++;
            right--;
        }
        return s;
    }
}