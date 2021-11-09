# C++
```C++
int eraseOverlapIntervals(vector<vector<int>>& intervals) {
       if (intervals.empty()) {
return 0; }
– 6/143 –
         int n = intervals.size();
       sort(intervals.begin(), intervals.end(), [](vector<int>& a, vector<int>& b)
           {
          return a[1] < b[1];
       });
       int removed = 0, prev = intervals[0][1];
       for (int i = 1; i < n; ++i) {
          if (intervals[i][0] < prev) {
              ++removed;
          } else {
              prev = intervals[i][1];
} }
       return removed;
   }
```
# JS
```js
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]); // sort with end time

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
```
