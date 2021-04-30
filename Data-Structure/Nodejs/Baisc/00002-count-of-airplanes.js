
//count Of Airplanes
{
    const countOfAirplanes = (arr) => {
        // write your code here
        //[(1, 10), (2, 3), (5, 8), (4, 7)]
        let maxNum = 0;
        let map = new Map();
        let line = [];
        let curr = 0;
        for (let i = 0; i < arr.length; i++) {
            let key1 = [...arr[i]][0];
            let key2 = [...arr[i]][1];
            map.set(key1, 1);
            map.set(key2, -1);
        }
        console.log(map);
        // first minus, then plus

        line = [...map.keys()].sort((a, b) => a - b);

        console.log(line);

        for (let i = 0; i < line.length; i++) {
            let key = line[i];
            let val = map.get(key);
            curr = curr + val;
            maxNum = Math.max(maxNum, curr);
            console.log('key=', key, maxNum);
        }
        return maxNum;
    }
    console.log(countOfAirplanes[[(1, 10), (2, 3), (5, 8), (4, 7)]])//
}