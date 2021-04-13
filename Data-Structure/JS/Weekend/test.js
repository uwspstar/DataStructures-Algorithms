
{
    var isAlienSorted = function(words, order) {
        let map = new Map();
        for (let i = 0; i < order.length; i++) {
            map.set(i, order[i]);
        }
        console.log(JSON.stringify(map))
    };
    isAlienSorted()
}