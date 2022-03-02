{
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

        let arr = s.split('');

        let startIndex = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === ' ') {
                reverse(arr, startIndex, i - 1);
                startIndex = i + 1;
            }
        }
        // last word need to reverse
        reverse(arr, startIndex);

        return arr.join('');
    };
}
{
    var reverseWords = function (s) {
        let arr = s.split(' ')
        let reversed = '';
        for (let i = 0; i < arr.length; i++) {
            reversed += arr[i].split('').reverse().join('') + ' '
        }
        return reversed.trim()
    };
}