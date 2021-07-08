{
    //Using keys()
    //146. LRU Cache
    //https://leetcode.com/problems/lru-cache/submissions/
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys

    var myMap = new Map();
    myMap.set('0', 'foo');
    myMap.set(1, 'bar');
    myMap.set({}, 'baz');

    var mapIter = myMap.keys();

    console.log(mapIter.next().value); // "0"
    console.log(mapIter.next().value); // 1
    console.log(mapIter.next().value); // Object
}