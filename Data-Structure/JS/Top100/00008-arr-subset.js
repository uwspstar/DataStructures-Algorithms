const arrSubset = (arr) => {
    if (arr.length === 1) return [[], arr]
    let result = [[]];
    for (let value of arr) {
        const len = result.length;
        for (let i = 0; i < len; i++) {
            let temp = result[i].slice(0);
            console.log('value =', value, 'i =', i, 'temp =', result[i].slice(0), 'len =', len, 'result[i] =', result[i]);

            temp.push(value);
            result.push(temp);
            console.log('temp =', JSON.stringify(temp));
            console.log('result =', JSON.stringify(result));
            console.log('------------------');
        }
    }
    return result;
}
console.log('arrSubset', JSON.stringify(arrSubset([1, 2, 3])));
/*
value = 1 i = 0 temp = [] len = 1 result[i] = []
temp = [1]
result = [[],[1]]
------------------
value = 2 i = 0 temp = [] len = 2 result[i] = []
temp = [2]
result = [[],[1],[2]]
------------------
value = 2 i = 1 temp = [ 1 ] len = 2 result[i] = [ 1 ]
temp = [1,2]
result = [[],[1],[2],[1,2]]
------------------
value = 3 i = 0 temp = [] len = 4 result[i] = []
temp = [3]
result = [[],[1],[2],[1,2],[3]]
------------------
value = 3 i = 1 temp = [ 1 ] len = 4 result[i] = [ 1 ]
temp = [1,3]
result = [[],[1],[2],[1,2],[3],[1,3]]
------------------
value = 3 i = 2 temp = [ 2 ] len = 4 result[i] = [ 2 ]
temp = [2,3]
result = [[],[1],[2],[1,2],[3],[1,3],[2,3]]
------------------
value = 3 i = 3 temp = [ 1, 2 ] len = 4 result[i] = [ 1, 2 ]
temp = [1,2,3]
result = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
------------------
arrSubset [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/