//Count Of Airplanes : try to use arr instead of map, faster, and map key is uniqu, land and start cannot be as same key
{  
    const countOfAirplanes = arr => {
        // arr[i][0] +1
        // arr[i][1] -1;
        let maxNum = 0; // history, overall max
        let currMax = 0; // same like the buy stack, need current Max in this moment
        let arrInterval = []
        for (let i = 0; i < arr.length; i++) {
            arrInterval.push([arr[i][0], 1]);
            arrInterval.push([arr[i][1], -1]);
        }   
        // sort by start time, 
        // check with interviewer, if the start time same, sort landing before start
        arrInterval.sort((a, b) => {
            /*if (a[0] === b[0]) {
                return a[1] - b[1];
            }*/
            return a[0] - b[0];
        }); 
        
        console.log('arrInterval = ', arrInterval);

        for (let i = 0; i < arrInterval.length; i++) {
            currMax = currMax + arrInterval[i][1];
            maxNum = Math.max(maxNum, currMax);
        }
        return maxNum;
    }
    console.log(countOfAirplanes([ [1, 10], [2, 3], [5, 8], [4, 7]]))//
}

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

        console.log('line = ',line);

        for (let i = 0; i < line.length; i++) {
            let key = line[i];
            let val = map.get(key);
            curr = curr + val;
            maxNum = Math.max(maxNum, curr);
            console.log('key=', key, maxNum);
        }
        return maxNum;
    }
    console.log(countOfAirplanes([[1, 10], [2, 3], [5, 8], [4, 7]]))//
}

