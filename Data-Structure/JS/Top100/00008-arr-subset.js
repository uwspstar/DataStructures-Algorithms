const arrSubset = (arr) => {
    if (arr.length === 1) return [[], arr]
    let result = [[]];
    for (let value of arr) {
        const len = result.length;
        for (let i = 0; i < len; i++) {
            let temp = result[i].slice(0);
            console.log('value=', value, 'i=', i, 'temp=result[i].slice(0)', result[i].slice(0), 'len=', len, 'result[i]', result[i]);

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