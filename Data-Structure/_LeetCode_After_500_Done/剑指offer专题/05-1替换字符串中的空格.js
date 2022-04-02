// 4.将一个字符串中的空格替换成“%20”。
// 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

// 思路:从后往前复制，数组长度会增加，或使用StringBuilder、StringBuffer类

{
    const replaceSpace = str => {
        if (str.length === 0) return '%20';

        let arr = str.split('');
        let count = 0;

        let N = arr.length;
        for (let a of arr) {
            if (a === ' ') {
                count++;
            }
        }

        while (count > 0) {
            arr.push('~');
            arr.push('~');
            count--;
        }

        for (let i = N - 1, j = arr.length - 1; i >= 0; i--) {

            if (arr[i] !== ' ') {
                arr[j--] = arr[i];
            } else {
                arr[j--] = '0';
                arr[j--] = '2';
                arr[j--] = '%';
            }
            /*
            if (arr[i] !== ' ') {
                arr[j] = arr[i];
                j--;
            } else {
                arr[j--] = '0';
                j--;
                arr[j--] = '2';
                j--;
                arr[j--] = '%';
                j--;
            }
            */
            //console.log(arr.join(''));
        }
        return arr.join('');
    }

    console.log('we are   =', replaceSpace('we are   '));
    console.log(' we are =', replaceSpace(' we are '));
    console.log('hope we are happy =', replaceSpace("hope we are happy"));
}
{
    function replace(str) {
        return str.replace(" ", "%20");
    }
}
{
    const replaceSpace = str => {
        let arr = str.split('');
        res = [];
        for (let i = arr.length; i >= 0; i--) {
            if (arr[i] !== ' ') {
                res.unshift(arr[i]);
            } else {
                res.unshift('%20');
            }
        }
        return res.join('');
    }

    console.log(replaceSpace("we are happy"))
}
