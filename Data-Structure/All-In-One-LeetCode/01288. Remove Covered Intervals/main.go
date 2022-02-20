package main

import (
	"fmt"
	"sort"
)

func main() {
	arr := [][]int{{1, 4}, {3, 6}, {2, 8}} //Slices
	fmt.Println(arr)
	fmt.Println(removeCoveredIntervals(arr))
}

func removeCoveredIntervals(intervals [][]int) int {

	ans, l, r := 0, -1, -1
	sort.Slice(intervals, func(a, b int) bool { return intervals[a][0] < intervals[b][0] })
	for _, v := range intervals {
		if v[0] > l && v[1] > r {
			l = v[0]
			ans++
		}
		r = max(r, v[1])
	}
	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

/*
func removeCoveredIntervals(intervals [][]int) int {
    sort.Slice(intervals, func(i, j int) bool {
        if intervals[i][0] != intervals[j][0] {
            return intervals[i][0] < intervals[j][0]
        } else {
            return intervals[i][1] > intervals[j][1]
        }
    })
    bound := -1
    ans := 0

    fmt.Println(intervals)

    for _, v := range intervals {
        fmt.Println(v)
        if v[1] <= bound {
            continue
        } else {
            bound = v[1]
            ans++
        }
    }
    return ans
}
*/
