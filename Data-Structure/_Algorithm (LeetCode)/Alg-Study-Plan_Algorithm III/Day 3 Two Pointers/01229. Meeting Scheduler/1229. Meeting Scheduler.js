// 1229. Meeting Scheduler
/*
Given the availability time slots arrays slots1 and slots2 of two people and a meeting duration duration, return the earliest time slot that works for both of them and is of duration duration.

If there is no common time slot that satisfies the requirements, return an empty array.

The format of a time slot is an array of two elements [start, end] representing an inclusive time range from start to end.

It is guaranteed that no two availability slots of the same person intersect with each other. That is, for any two time slots [start1, end1] and [start2, end2] of the same person, either start1 > end2 or start2 > end1.

 

Example 1:

Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8
Output: [60,68]
*/
{
    var minAvailableDuration = function (slots1, slots2, duration) {
        slots1.sort((a, b) => a[0] - b[0]);
        slots2.sort((a, b) => a[0] - b[0]);

        let N1 = slots1.length;
        let N2 = slots2.length;

        let p1 = 0, p2 = 0;

        while (p1 < N1 && p2 < N2) {

            [x1, y1] = slots1[p1];
            [x2, y2] = slots2[p2];

            console.log('x1=', x1, 'y1=', y1, 'x2=', x2, 'y2=', y2);

            let overlap = Math.min(y1, y2) - Math.max(x1, x2); // important 

            console.log('overlap=', overlap)

            if (overlap >= duration)
                return [Math.max(x1, x2), Math.max(x1, x2) + duration];

            if (slots1[p1][1] < slots2[p2][1]) {
                p1++;
            }
            else {
                p2++;
            }

        }

        return [];
    };

    // Minimum Number of Moves to Make Palindrome (H)
    // Maximum Side Length of a Square with Sum Less than or Equal to Threshold (M)
    // Maximum Candies You Can Get from Boxes (H)
}