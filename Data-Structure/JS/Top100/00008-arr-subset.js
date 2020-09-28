const arrSubset = (arr) => {
    if (arr.length === 1) return [[], arr]
    let result = [[]];
    for (let value of arr) {
        const len = result.length;
        for (let i = 0; i < len; i++) {
            let temp = result[i].slice(0);
            console.log('value', value, 'i', i, 'temp', temp, 'len', len);
            temp.push(value);
            result.push(temp);
        }
    }
    return result;
}
console.log('arrSubset', JSON.stringify(arrSubset([1, 2, 3])));