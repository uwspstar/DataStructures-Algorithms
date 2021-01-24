const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

//1. convertToF
{
    const convertToF = c => {
        return c * 9 / 5 + 32
    }
    console.log('convertToF 10 :', JSON.stringify(convertToF(10)));
}
//2.1 reverseString loop
{
    const reverseStr = str => {
        if (str.length < 2) return str;
        let result = '';
        for (let i = str.length - 1; i >= 0; i--) {
            result += str[i];
        }
        return result;
    }
    console.log('reverseStr 1 :', JSON.stringify(reverseStr('abcd')));
}
//2.2 reverseString find mid , switch head and mid
{
    const reverseStr = str => {
        if (str.length < 2) return str;
        let arr = str.split('');
        let i = 0;
        let j = arr.length - 1;
        while (i < j) {
            swap(arr, i, j);
            i++;
            j--;
        }
        return arr.join('');
    }
    console.log('reverseStr 2 :', JSON.stringify(reverseStr('abcd')));
}
//2.3 reverseString find mid , switch head and mid , 1 variable
{
    // i + j = 2 * mid
    const reverseStr = str => {
        if (str.length < 2) return str;
        let arr = str.split('');
        let i = 0;
        let mid = arr.length >> 1;
        while (i < mid) {
            swap(arr, i, 2 * mid - i);
            i++;
        }
        return arr.join('');
    }
    console.log('reverseStr 3-1 :', JSON.stringify(reverseStr('abcd')));
    console.log('reverseStr 3-2 :', JSON.stringify(reverseStr('abcde')));
}
//2.4 reverse
{
    const reverseStr = str => {
        if (str.length < 2) return str;
        return str.split('').reverse().join('');
    }
    console.log('reverseStr 4-1 :', JSON.stringify(reverseStr('abcd')));
    console.log('reverseStr 4-2 :', JSON.stringify(reverseStr('abcde')));
}