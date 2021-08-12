//Array of Doubled Pairs
/*Given an array of integers arr of even length, return true if and only if it is possible to reorder it such that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2.

 

Example 1:

Input: arr = [3,1,3,6]
Output: false
Example 2:

Input: arr = [2,1,2,6]
Output: false
Example 3:

Input: arr = [4,-2,2,-4]
Output: true
Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].
Example 4:

Input: arr = [1,2,4,16,8,4]
Output: false
*/
{
    var canReorderDoubled = function (arr) {
        var cntMap = new Map()
        for (var i = 0; i < arr.length; i++) {
            let val = cntMap.get(arr[i]) ? cntMap.get(arr[i]) + 1 : 1
            cntMap.set(arr[i], val);
        }
        console.log('arr=', arr);

        var tmp = [...arr];

        tmp.sort(function (a, b) { return Math.abs(a) - Math.abs(b) });

        console.log('tmp=', tmp);

        for (var i = 0; i < tmp.length; i++) {
            var x = tmp[i];

            if (cntMap.get(x) == 0) continue;

            if (cntMap.get(2 * x) == 0 || cntMap.get(2 * x) == undefined) return false;

            cntMap.set(x, cntMap.get(x) - 1);
            cntMap.set(2 * x, cntMap.get(2 * x) - 1);
        }
        return true;
    };
}