
var sortColors = function (arr) {
    if (arr.length < 2) return arr;

    const hashmap = {};
    let i = 0;
    
    arr.forEach((num) => (hashmap[num] = hashmap[num] + 1 || 1));

    [0, 1, 2].forEach((num) => {
        let count = hashmap[num];
        while (count) {
            arr[i++] = num;
            count--;
        }
    });

    return arr;
};
console.table(sortColors([2, 0, 2, 1, 1, 0]));