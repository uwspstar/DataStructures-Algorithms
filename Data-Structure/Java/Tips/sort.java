// all have s

//Collections.sort
Collections.sort(list,(Point p1, Point p2)->
{
    if (p1.T == p2.T)
        return p1.S - p2.S;
    return p1.T - p2.T;
});

//Arrays.sort
Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
