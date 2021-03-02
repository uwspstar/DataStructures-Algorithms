console.log(NaN === NaN);
console.log(NaN == NaN);


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 2, 7, 4, 8];

//[...new Set(arr1), ...new Set(arr2)]

console.log('union two arr', [...new Set([...arr1, ...arr2])]);

let a = new Set(arr1);
let b = new Set(arr2);

arr1.filter(x => b.has(x));

console.log('and two arr', [...a].filter(x => b.has(x)));

console.log('different two arr', [...a].filter(x => !b.has(x)));

class arrUnionAndDifference {
    constructor() { };
    arrUnion(arr1, arr2) {
        return [...new Set([...arr1, ...arr2])];
    }
    arrAnd(arr1, arr2) {
        let a = [...new Set(arr1)];
        let b = new Set(arr2);
        return a.filter(x => b.has(x));
    }
    arrDifference(arr1, arr2) {
        let a = [...new Set(arr1)];
        let b = new Set(arr2);
        return a.filter(x => !b.has(x));
    }
}

let obj = new arrUnionAndDifference();
console.log('arr union', obj.arrUnion(arr1, arr2));
console.log('arr union', obj.arrAnd(arr1, arr2));
console.log('arr difference', obj.arrDifference(arr1, arr2));
