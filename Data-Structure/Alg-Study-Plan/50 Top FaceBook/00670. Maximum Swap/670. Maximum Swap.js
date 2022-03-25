// 670. Maximum Swap
/*
You are given an integer num. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.

Example 1:

Input: num = 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:

Input: num = 9973
Output: 9973
Explanation: No swap.
*/
{
    var maximumSwap = function (num) {
        let last = new Array(10).fill(-1);
        num = Array.from(num.toString());
        //找到相同值最后出现的位置
        for (let i = 0; i < num.length; i++) {
            last[num[i] - '0'] = i;
        }
        console.log('num=', num, 'last =', last.join('|'))
        //原数组从左到右遍历，索引数组从后往前遍历
        //遇到比当前位值大的，交换，因为索引数组从后往前遍历的，所以保证了值为最大
        for (let i = 0; i < num.length; i++) {
            for (let d = 9; d > (num[i] - '0'); d--) {

                if (last[d] > i) {
                    console.log('i=', i, 'num[i]=', num[i], 'd=', d, 'last[d]=', last[d], 'num[i] - "0" = ', num[i] - '0')
                    let temp = num[last[d]];
                    num[last[d]] = num[i];
                    num[i] = temp;
                    return Number(num.join(""));
                }
            }
        }
        return Number(num.join(""));
    };

    //https://leetcode-cn.com/problems/maximum-swap/solution/2021316-zui-da-jiao-huan-quan-chang-zui-ery0x/
}
{
    const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

    var maximumSwap = function (num) {
        let arr = (num + '').split('');

        for (let i = 0, len = arr.length; i < len; i++) {
            let maxInx = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[j] >= arr[maxInx]) {
                    maxInx = j;
                }
            }
            if (maxInx !== i && arr[maxInx] !== arr[i]) {
                swap(arr, maxInx, i);
                return +arr.join('');
            }
        }
        return num;
    };

    // Create Maximum Number (H)
}