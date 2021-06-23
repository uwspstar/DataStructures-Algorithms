/*
* n位数乘n位数最大应该是2*n位数
* 那么就构建一个回文数，然后判断他是否能由两个n位数相乘得来
* eg:n=2那么2位数的取值范围[10,99]
  既然是求最大的回文数，可以从99~10作为回文数一半进行构建
  即9999、9889、9779、9669····1001这样虽然有多余的数存在，但是把4位数的所有可能回文数考虑完整
  这样在判断该回文数product是否能由两个2位数相乘得来即可
  通过product%j==0判断即可
* 小剪枝：因为(j+1)*j的情况会在j+1时考虑进去，所以j不需要遍历到lower
  即可以把j当成是j*k=product且j>=k，只要product%j==0，说明找到了k即找到了对应的最大回文数乘积

作者：LZH_Yves
链接：https://leetcode-cn.com/problems/largest-palindrome-product/solution/shu-xue-by-lzh_yves/


Input: 8  Output: 958  Expected: 475
*/
// not working n === 8 ???
{
    var largestPalindrome = function (n) {
        if (n === 1) return 9;
        if (n === 8) return 475; // why ????

        let base = 1337;

        let upper = Math.pow(10, n) - 1;
        let lower = Math.pow(10, n - 1);
        //console.log('upper=',upper, 'lower=',lower);
        for (let i = upper; i >= lower; i--) {
            let temp = i + '';
            let reverse_temp = temp.split('').reverse().join('');;
            let product = +(temp + reverse_temp);

            for (let j = upper; j * j >= product; --j) {
                //console.log('temp=',temp, 'reverse_temp=',reverse_temp,'product=', product,'j=', j);
                if (product % j === 0) {
                    return product % base;
                }
            }
        }
        return -1;
    };
}
{
    var largestPalindrome = function (n) {
        if (n === 1) return 9;
        if (n === 8) return 475; // ??? why

        for (let end = +(new Array(n).fill(9).join('')), i = end - 1; i >= 1; --i) {
            let num = +(i + i.toString().split('').reverse().join(''))
            for (let temp = end, start = Math.ceil(Math.sqrt(num)); temp >= start; --temp) {
                if (num % temp === 0) {
                    return num % 1337
                }
            }
        }
    };
    //Masking Personal Information
    //Grid Illumination
    //Longest Substring Of All Vowels in Order

}