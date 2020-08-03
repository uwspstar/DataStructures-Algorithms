let hashmap = {};// object
let arr = [1,1,2,2,2,3,3,3,3]
for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    hashmap[key] = 0 || hashmap[key] + 1;
}

console.log(hashmap);
hashmap.length && console.log(hashmap);