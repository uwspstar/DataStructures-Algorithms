{
    var removeInterval = function(intervals, toBeRemoved) {
        let res  = [];
        for (let curr of intervals) {
            if (curr[1] <= toBeRemoved[0] || curr[0] >= toBeRemoved[1]) {//no overlap
                res.push(curr);
            } else {
                if (curr[0] < toBeRemoved[0]) {
                    curr[1] = toBeRemoved[0];
                    res.push(curr);
                } 
                if (curr[1] >  toBeRemoved[1]) {
                    curr[0] = toBeRemoved[1];
                    res.push(curr); 
                } 
            }
        }
        
        return res;
    };
    console.log(removeInterval([[0,2],[3,4],[5,7]],[1,6]))
    return;
}

{
    var insert = function(intervals, newInterval) {
        // -----
        //       ------
        //                -----
        //     ----
        let res = []
        for (let curr of intervals ) {
            if (newInterval === null || curr[1] < newInterval[0]) { 
                //Add to the output all the intervals starting before newInterval.
               res.push(curr);
            } else if (curr[0] > newInterval[1]) { 
                // Add to the output all the intervals starting after newInterval. 
                res.push(newInterval);
                res.push(curr);
                newInterval = null; //means newInterval added
                
            } else { //overlap  set newInterval continue loop
                newInterval[0] = Math.min(curr[0],newInterval[0]);
                newInterval[1] = Math.max(curr[1],newInterval[1]);
            }  
        }  

        if (newInterval !== null) res.push(newInterval); 
        return res;
    };

    console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
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
    console.log(minMeetingRooms([[13,15],[1,13]]));//1
    
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

