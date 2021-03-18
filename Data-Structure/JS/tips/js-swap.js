// swap :  arr is working, not str , but you can loop str
// [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]] -- working
// [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]] -- not working 

// ES6
// 1 :
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
}
// 2 :
{
    let a = 123;
    let b = 456;
    a = a + b;
    b = a - b;
    a = a - b
}
// 3: 一种就是常见的交换数值：
{
    let tmp = s[i];
    s[i] = s[j];
    s[j] = tmp;
}
// 4 : 一种就是通过位运算：
{
    s[i] ^= s[j];
    s[j] ^= s[i];
    s[i] ^= s[j];
}
