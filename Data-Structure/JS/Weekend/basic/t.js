{
    return;
}
{
    var verticalOrder = function(root) {
        if (root === null) return [];
        let res = [];
        let q = [[root,0]]; // [node, level]
        let columnTable = new Map();
        let minLevel = null;
        let maxLevel = null
        
        while (q.length > 0) {
            let [n, level] = q.shift();  
            let key = level;
            minLevel = minLevel !== null ? Math.min(minLevel, key) : key;
            maxLevel = maxLevel !== null ? Math.max(maxLevel, key) : key;
            let tmp = columnTable.has(key) ? columnTable.get(key) : [];
            tmp.push(n.val)
            columnTable.set(key, tmp);
            
            if (n.left !== null) {
                q.push([n.left, level - 1]);
            }
            if (n.right !== null) {
                q.push([n.right, level + 1]);
            }
        }
        
        for (let i = minLevel; i<= maxLevel; i++) {
            res.push(columnTable.get(i));
        }
        
        return res;
    };
}
{
    var removeCoveredIntervals = function (intervals) {
        //[[1,4],[2,8], [3,6]]
        // 1-------4
        //    2----------8
        //       3----6
        intervals.sort((a, b) => {
            if (a[0] == b[0]) return b[1] - a[1];
            else return a[0] - b[0];
        });
        let remove = 0;
        for (let i = 0; i < intervals.length - 1; i++) {
            if (intervals[i][1] >= intervals[i + 1][1]) {
                remove++;
                intervals[i + 1] = intervals[i]; // very important
            }
        }
        return intervals.length - remove;
    };

    console.log(removeCoveredIntervals([[1, 4], [2, 8], [3, 6]]));//2

}
{
    var eraseOverlapIntervals = function (intervals) {

        if (intervals.length === 0) {
            return 0;
        }

        intervals.sort((a, b) => (a[1] - b[1])); // sort with end time

        console.log('sorted intervals = ', intervals)

        let end = intervals[0][1];
        let count = 0;

        for (let i = 1; i < intervals.length; i++) {
            if (end <= intervals[i][0]) {
                end = intervals[i][1];
            } else {
                count++;
            }
        }

        return count;
    };
    // 1---2
    //     2---3
    // 1-------3
    //         3---4
    console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); //1
    // 1---2
    // 1---2
    // 1---2
    console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]));//2

}
{
    var removeInterval = function (intervals, toBeRemoved) {
        let res = [];
        for (let curr of intervals) {
            if (curr[1] <= toBeRemoved[0] || curr[0] >= toBeRemoved[1]) {//no overlap
                res.push(curr);
            } else {
                if (curr[0] < toBeRemoved[0]) {
                    curr[1] = toBeRemoved[0];
                    res.push(curr);
                }
                if (curr[1] > toBeRemoved[1]) {
                    curr[0] = toBeRemoved[1];
                    res.push(curr);
                }
            }
        }

        return res;
    };
    console.log(removeInterval([[0, 2], [3, 4], [5, 7]], [1, 6]))
    console.log(removeInterval([[0, 5]], [2, 3]));
    return;
}
{
    var insert = function (intervals, newInterval) {
        // -----
        //       ------
        //                -----
        //     ----
        let res = []
        for (let curr of intervals) {
            if (newInterval === null || curr[1] < newInterval[0]) {
                //Add to the output all the intervals starting before newInterval.
                res.push(curr);
            } else if (curr[0] > newInterval[1]) {
                // Add to the output all the intervals starting after newInterval. 
                res.push(newInterval);
                res.push(curr);
                newInterval = null; //means newInterval added

            } else { //overlap  set newInterval continue loop
                newInterval[0] = Math.min(curr[0], newInterval[0]);
                newInterval[1] = Math.max(curr[1], newInterval[1]);
            }
        }

        if (newInterval !== null) res.push(newInterval);
        return res;
    };

    console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));//[ [ 0, 1 ], [ 6, 7 ] ]
}
{
    var minMeetingRooms = function (intervals) {
        //[0,30],[5,10],[15,20]]
        //0 ---------------------------30
        //    5----10
        //              15-----20 
        let arr = [];
        let overlap = 0;
        let currNeed = 0
        for (let i = 0; i < intervals.length; i++) {
            arr.push([intervals[i][0], 1]);
            arr.push([intervals[i][1], -1]);
        }

        const sorted = (a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            else return a[0] - b[0];
        }
        arr.sort(sorted);

        for (let i = 0; i < arr.length; i++) {
            currNeed = currNeed + arr[i][1];
            overlap = Math.max(overlap, currNeed);
        }
        return overlap;
    };

    console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); //2
    console.log(minMeetingRooms([[7, 10], [2, 4]]));//1
    console.log(minMeetingRooms([[9, 10], [4, 9], [4, 17]]));//2
    console.log(minMeetingRooms([[13, 15], [1, 13]]));//1

}
{
    var canAttendMeetings = function (intervals) {

        intervals.sort((a, b) => a[0] - b[0]);

        console.log(intervals);

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < intervals[i - 1][1]) {
                return false;
            }
        }

        return true;

    };
    //console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]])) //false
    //console.log(canAttendMeetings([[7, 10], [2, 4]])) //true
}
{
    const countOfAirplanes = intervals => {
        let arr = [];
        let overlap = 0;
        let currNeed = 0
        for (let i = 0; i < intervals.length; i++) {
            arr.push([intervals[i][0], 1]);
            arr.push([intervals[i][1], -1]);
        }

        const sorted = (a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            else return a[0] - b[0];
        }
        arr.sort(sorted);

        for (let i = 0; i < arr.length; i++) {
            currNeed = currNeed + arr[i][1];
            overlap = Math.max(overlap, currNeed);
        }
        return overlap;
    }
    // 1 --------------------10
    //   2---3
    //            5---8
    //         4----7
    console.log(countOfAirplanes([[1, 10], [2, 3], [5, 8], [4, 7]]))
}

