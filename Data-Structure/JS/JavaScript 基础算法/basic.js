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
//2.4 reverseString reverse()
{
    const reverseStr = str => {
        if (str.length < 2) return str;
        return str.split('').reverse().join('');
    }
    console.log('reverseStr 4-1 :', JSON.stringify(reverseStr('abcd')));
    console.log('reverseStr 4-2 :', JSON.stringify(reverseStr('abcde')));
}
//2.5 reverseString recursive substring
{
    const reverseStr = str => {
        if (str.length < 2) return str;
        let end = str.length - 1;
        return str[end] + reverseStr(str.slice(1, end)) + str[0];
    }
    console.log('reverseStr 5-1 :', JSON.stringify(reverseStr('abcd')));
    console.log('reverseStr 5-2 :', JSON.stringify(reverseStr('abcde')));
}
//3.1 factorial  3* 2* 1
{
    const factorial = num => {
        //if (num === 0) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    console.log('factorial 1-1 :', JSON.stringify(factorial(3))); //6
    console.log('factorial 1-2 :', JSON.stringify(factorial(4))); //24
    console.log('factorial 1-3 :', JSON.stringify(factorial(0))); // 1;
}
//3.2 factorial  3* 2* 1
{
    const factorial = num => {
        if (num === 0) return 1;
        return num * factorial(num - 1);
    }
    console.log('factorial 2-1 :', JSON.stringify(factorial(3))); //6
    console.log('factorial 2-2 :', JSON.stringify(factorial(4))); //24
    console.log('factorial 2-3 :', JSON.stringify(factorial(0))); // 1;
}
//4.1 longestWordsLength  
{
    const longestWordsLength = str => {
        if (str.length < 2) return str.length;
        let maxLen = 0;
        let arr = str.split(' ');
        for (let i = 0; i < arr.length; i++) {
            maxLen = Math.max(maxLen, arr[i].length);
        }
        return maxLen;
    }
    console.log('longestWordsLength 4-1 :', JSON.stringify(longestWordsLength('the quick brown fox jumped'))); //6
    console.log('longestWordsLength 4-2 :', JSON.stringify(longestWordsLength('a bc d'))); // 2
    console.log('longestWordsLength 4-3 :', JSON.stringify(longestWordsLength('   '))); // 0;
}
// 5.1 Return Largest Numbers in Arrays 2 for loop
{
    const largestNum = arr => {
        let maxNum = -Infinity; //!important
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                maxNum = Math.max(maxNum, arr[i][j]);
            }
        }
        return maxNum;
    }
    console.log('largestNum 1-1 :', JSON.stringify(largestNum([[1, 2], [-4, 5]]))); //5
    console.log('largestNum 1-2 :', JSON.stringify(largestNum([[-1, -2], [-4, -5]]))); // -1
    console.log('largestNum 1-3 :', JSON.stringify(largestNum([[1, 2, -4, 5]]))); // 5
}

// repeatStrNTimes
{
    const repeatStrNTimes = (str, num) => {
        let array = new Array(num + 1); //empty arr
        return array.join(str);

    }
    console.log('repeatStrNTimes', repeatStrNTimes('abc', 3));
}