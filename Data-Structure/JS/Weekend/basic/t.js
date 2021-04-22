
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

