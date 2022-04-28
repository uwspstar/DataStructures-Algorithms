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
        let arr = new Array(10).fill(-1); // 10 nums  0 ~ 9 
        num = Array.from(num.toString());

        //找到相同值最后出现的位置
        for (let i = 0; i < num.length; i++) {
            arr[num[i] - '0'] = i;
        }

        //console.log('arr=', arr);

        // 原数组从左到右遍历，索引数组从后往前遍历
        // 遇到比当前位值大的，交换，因为索引数组从后往前遍历的，所以保证了值为最大

        for (let i = 0; i < num.length; i++) {
            // 索引数组从后往前遍历 very important !!!
            for (let d = 9; d > num[i]; d--) {
                console.log('d=', d, 'last[d]=', arr[d], 'i=', i);
                if (arr[d] > i) {
                    let temp = num[arr[d]];
                    num[arr[d]] = num[i];
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
    var maximumSwap = function (num) {
        let arr = Array(10).fill(-1);
        num = Array.from(num.toString());

        console.log(typeof (num));

        for (let i = 0; i < num.length; i++) {
            arr[num[i] - '0'] = i;
        }

        console.log('arr = |', arr.join(' | '), '|');
        console.log('num = |', num.join(' | '), '|');

        for (let i = 0; i < num.length; i++) {
             
            // console.log('idx =', idx, 'num[i] = ', num[i], 'arr[idx]=', arr[idx], 'i=', i, 'num[i] - 0 =' , num[i] - '0');  
            
            // i : 0 ~ N;  idx: 9 ~ 0      
            for (let idx = 9; idx > num[i]; idx--) {
                if (arr[idx] > i) {
                    let temp = num[arr[idx]];
                    num[arr[idx]] = num[i];
                    num[i] = temp;
                    return Number(num.join(""));
                }
            }
        }

        return Number(num.join(""));
    }
}

console.log(maximumSwap(2736));