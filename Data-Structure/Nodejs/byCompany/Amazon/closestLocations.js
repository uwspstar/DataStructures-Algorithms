/*
Amazon is opening a new warehouse and your manager has tasked you with figuring out how to quickly get some of the inventory in the original warehouse to the new warehouse. You are given a list of the locations of all N packing crates in the facility, any of which is a candidate to be moved to the new facility. All crates are the same size, and the truck has capacity to move exactly M of them. The delivery driver needs to leave promptly, so it is your job to find the crates that are closest to the truck. Crates are heavy, so you can only carry one at a time.

Given an array of the locations of N packing crates, implement an algorithm to find the locations of the M crates closest to the truck.


Input
The input to the function/method consists of three arguments:
totalCrates, an integer representing the total number of packing crates in the facility (N);
allLocations, a list where each element consists of a pair of integers representing the x and y coordinates of the packing crates;
truckCapacity, an integer representing the number of packing crates that will be moved to the new facility (M).

Output
Return a list of pairs of integers representing the x and y coordinates of the packing crates that will be moved to the new facility. If there is no possible pair, return a list with empty pair - not just an empty list.

Constraints
truckCapacity ≤ totalCrates

Note
You begin at the truck’s location [0, 0].
The distance of the truck from a warehouse location (x, y) is the square root of x2 + y2.
If there are ties then return any of the locations as long as you satisfy returning M points.

Example
Input:
totalCrates = 3
allLocations = [[1, 2], [3, 4], [1, -1]]
truckCapacity = 2

Output:
[[1, -1], [1, 2]]

Explanation:
The distance of the truck from point [1, 2] is square root(5) = 2.236
The distance of the truck from point [3, 4] is square root(25) = 5
The distance of the truck from point [1, -1] is square root(2) = 1.414
num is 2, hence the output is [1, -1] and [1, 2].


Helper Description
The following class is used to represent a Pair of integers which is already implemented in the default code (Do not write this definition again in your code):


class PairInt
{
    int first, second;
    PairInt()
    {}
    PairInt(int first, int second)
    {
        this.first = first;
        this.second = second;
    }
};
*/
{
    const closestLocations = (totalCrates, allLocations, truckCapacity) => {
        allLocations.sort((a, b) => (a[0]*a[0] + a[1]* a[1]) - (b[0]*b[0] + b[1]* b[1]));
        if (allLocations.length > truckCapacity) {
            allLocations.length = truckCapacity;
        }
        return allLocations;
    }
    let totalCrates = 3;
    let allLocations = [[1, 2], [3, 4], [1, -1]];
    let truckCapacity = 2;

    console.log(closestLocations(totalCrates, allLocations, truckCapacity));
}