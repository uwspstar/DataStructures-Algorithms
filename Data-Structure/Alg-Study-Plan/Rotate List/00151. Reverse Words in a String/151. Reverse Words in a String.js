//151. Reverse Words in a String
{
    var reverseWords = function (s) {
        let s1 = s.split(' ');
        let arr = [];
        for (let str of s1) {
            if (str.trim().length > 0) {
                arr.push(str.trim());
            }
        }
        let res = '';
        for (let i = arr.length - 1; i >= 0; i--) {

            if (i !== 0) {
                res += arr[i] + ' ';
            } else {
                res += arr[i];
            }
        }
        return res;
    };
}
{
    var reverseWords = function (s) {
        const arr = s.split(' ');
        const res = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== '') {
                res.push(arr[i])
            }
        }
        return res.reverse().join(' ')
    };
}