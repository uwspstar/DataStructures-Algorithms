let hashmap = {};// object
let arr = [1, 1, 2, 2, 2, 3, 3, 3, 3]
for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    hashmap[key] = hashmap[key] + 1 || 1; // the order is verify important;
}

//console.log(hashmap);
hashmap.length && console.log('hashmap.length:',hashmap.length,'hashmap = ',hashmap);

// var port = process.env.PORT || 3000;