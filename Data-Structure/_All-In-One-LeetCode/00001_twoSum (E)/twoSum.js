const twoSum = (arr, target) => {
    if(arr.length < 2) return [];
    let res = [];
    let map = new Map();
    let N = arr.length;
    for (let i = 0; i < N; i++) {
        let key = arr[i];
        if (map.has(target - key)) {
            return [map.get(target - key) ,  i];
        }
        map.set(key, i);
    }
    return res;
}