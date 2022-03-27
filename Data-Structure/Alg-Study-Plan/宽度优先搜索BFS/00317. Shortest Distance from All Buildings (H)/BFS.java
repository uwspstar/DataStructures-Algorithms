/*
 * Our goal is to find the empty land cell with the shortest total distance to
 * all houses, so we must first find the shortest total distance to all houses
 * from each empty land cell.
 * As previously mentioned, this can be accomplished using BFS. For each empty
 * cell (cell value equals 0) in the grid, start a BFS and sum all the distances
 * to houses (cell value equals 1) from this cell.
 * We will also keep track of the number of houses we have reached from this
 * source cell (empty cell). If
 * we cannot reach all the houses from the current empty cell, then it is not a
 * valid empty cell. Furthermore, we can be certain that any cell visited during
 * this BFS also cannot reach all of the houses. So we will mark all cells
 * visited during this BFS as obstacles to ensure that we do not start another
 * BFS from this region.
 * Our graph is not weighted. We can consider each edge to have the same weight
 * of 1. Since the graph is unweighted, BFS can be used to find the shortest
 * path between a starting cell and any other reachable cell.
 * The actual distance calculation measures grid distance in terms of only
 * horizontal and vertical movements. Since we can only move up, down, left, and
 * right, we can apply BFS to calculate the actual distance. At each iteration
 * in the BFS, we will only consider expanding our search in the horizontal or
 * vertical direction.
 */