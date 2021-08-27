{
    // T: O(N)
    // S: O(N)

    const twoSum = (arr, target) => {
        if (arr.length < 2) return [];
        let res = [];
        let map = new Map();
        for (let i = 0; i < arr.length; i++) {

            let key = arr[i];

            if (map.has(target - key)) {
                return [map.get(target - key), i];
            }
            
            map.set(key, i);
        }
        return res;
    }
    let nums = [2, 7, 11, 15];
    let target = 9;
    console.log('twoSum', twoSum(nums, target));
}
{
    var twoSum = function (arr, target) {
        if (arr.length < 2) return [];
        let map = new Map();
        for (let i = 0; i < arr.length; i++) {
            let key = target - arr[i];
            if (map.has(key)) {
                return [map.get(key), i];
            } else {
                map.set(arr[i], i)
            }
        }
        return [];
    };
}