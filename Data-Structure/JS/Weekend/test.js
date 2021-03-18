let log = console.log;
{
    const Swap = (a = 1, b = 2) => {
        log('a:', a, 'b', b);
        if (a !== b) {
            a ^= b;
            b ^= a;
            a ^= b;
        }
        log('a:', a, 'b', b);
    }

    Swap(1, 2);
}

{
    const set = ['x', 'y', 'z'];
    function allSubsets(arr) {
        if (arr.length === 0) { return [[]]; }
        const prev = allSubsets(arr.slice(1));
        console.log('prev', prev)
        const next = prev.map(el => [...el, arr[0]]);
        return [...prev, ...next];
    }
    console.log('1: allSubsets', allSubsets(set));
}
/*
{
    const set = ['x', 'y', 'z'];
    function allSubsets(arr) {
        const maxIndex = arr.length - 1;
        let result = [[]];
        arr.forEach(el => {
            result.forEach(subset => {
                result.push([...subset, el]);
            })
        })
        return result;
    }
    console.log('2: allSubsets', allSubsets(set));
}
// Power Set : all sub set
{
    const set = ['x', 'y', 'z'];
    const powerSet = (arr = []) => {
        const res = [];
        const { length } = arr;
        const numberOfCombinations = 2 ** length;
        for (let combinationIndex = 0; combinationIndex < numberOfCombinations; combinationIndex += 1) {
            const subSet = [];
            for (let setElementIndex = 0; setElementIndex < arr.length;
                setElementIndex += 1) {
                if (combinationIndex & (1 << setElementIndex)) {
                    subSet.push(arr[setElementIndex]);
                };
            };
            res.push(subSet);
        };
        return res;
    };
    console.log(powerSet(set));
}
// Power Set : all sub set
{
    const set = ['x', 'y', 'z'];
    const powerSet = (arr = []) => {
        const res = [];
        const { length } = arr;
        const len = 2 ** length;
        for (let i = 0; i < len; i++) {
            const subSet = [];
            for (let j = 0; j < arr.length; j++) {
                if (i & (1 << j)) {
                    subSet.push(arr[j]);
                };
            };
            res.push(subSet);
        };
        return res;
    };
    console.log(powerSet(set));
}
*/