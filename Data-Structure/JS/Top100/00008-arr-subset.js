/*
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

shallow copy : copy address
*/

const arrSubset = (arr) => {
    if (arr.length === 1) return [[], arr]
    let result = [[]];
    for (let value of arr) {
        const len = result.length;
        for (let i = 0; i < len; i++) {
            console.log('result[i] =', JSON.stringify(result[i]));
            let temp = result[i].slice(0); // using slice(0) does not change temp, because next step temp.push will change temp; if we use temp = result[i], result[i] change

            console.log('value =', value, ', i =', i, ', temp =', result[i].slice(0), ', len =', len, ', result[i] =', result[i]);

            temp.push(value);
            console.log('result[i] =', JSON.stringify(result[i]));
            console.log('result =', JSON.stringify(result));
            console.log('temp =', JSON.stringify(temp));
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
value = 1 , i = 0 , temp = [] , len = 1 , result[i] = []
temp = [1]
result = [[],[1]]
------------------
value = 2 , i = 0 , temp = [] , len = 2 , result[0] = []
temp = [2]
result = [[],[1],[2]]
------------------
value = 2 , i = 1 , temp = [ 1 ] , len = 2 , result[1] = [ 1 ]
temp = [1,2]
result = [[],[1],[2],[1,2]]
------------------
value = 3 , i = 0 , temp = [] , len = 4 , result[0] = []
temp = [3]
result = [[],[1],[2],[1,2],[3]]
------------------
value = 3 , i = 1 , temp = [ 1 ] , len = 4 , result[1] = [ 1 ]
temp = [1,3]
result = [[],[1],[2],[1,2],[3],[1,3]]
------------------
value = 3 , i = 2 , temp = [ 2 ] , len = 4 , result[i] = [ 2 ]
temp = [2,3]
result = [[],[1],[2],[1,2],[3],[1,3],[2,3]]
------------------<result = [[],[1],[2],[1,2]]> temp = result[i].slice(0)
value = 3 , i = 3 , temp = [ 1, 2 ] , len = 4 , result[i] = [ 1, 2 ]
temp = [1,2,3]
result = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
------------------
arrSubset [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

*/