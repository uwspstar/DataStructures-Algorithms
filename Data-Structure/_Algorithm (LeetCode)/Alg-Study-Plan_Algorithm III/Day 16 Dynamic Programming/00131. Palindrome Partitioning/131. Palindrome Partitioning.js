// 131. Palindrome Partitioning
{
    var partition = function (s) {
        let res = [];
        let path = [];

        const isPalindrome = (s) => {
            return s === s.split('').reverse().join('');
        }

        const backTracking = (start) => {
            if (start >= s.length) {
                res.push(path.slice());//deep copy string
            } else {
                for (let end = start; end < s.length; end++) {
                    let str = s.substring(start, end + 1);
                    if (isPalindrome(str)) {
                        path.push(str);
                        backTracking(end + 1);
                        path.pop();
                    }
                }
            }
        }

        backTracking(0);

        return res;
    };
}