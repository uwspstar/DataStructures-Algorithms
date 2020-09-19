/*
Given a list of points, an integer k, and a point p, find the k closest points to p.
*/
const closestPoints = (points, k, point) => {
    if (k > points.length) return points;
    let queue = []
    for (let i = 0; i < points.length; i++) {
        
    }
}

points = [
    Point(0, 0),
    Point(1, 1),
    Point(2, 2),
    Point(3, 3),
]
console.log('closestPoints', closestPoints(points, 2, Point(0, 2))) //[(0, 0), (1, 1)]



/*
A good data structure to keep track of the smallest numbers is to use a PriorityQueue, which in python is the library heapq. We calculate the distance between all points and the special point, and insert the distance and point as a tuple. After inserting into the heap, if the heap size is greater than k, then we pop out the largest element since there are already k elements smaller than that element.

Some things to note with the current structure of the code, since a class is used to store point data, we need to implement a comparator as when heapq evaluates the tuple, the two classes will be compared. Since we do not care which point gets returned, return True is sufficient. Also heapq is implemented as a min-heap, so in general if we want a max-heap, integers are inserted as negative numbers so the behavior is similar to a max-heap.

import heapq


class Point:
  def __init__(self, x=0, y=0):
    self.x = x
    self.y = y

  def __repr__(self):
    return f"({self.x}, {self.y})"

  # Doesn't matter which value is greater, first tuple value should
  # determine the ordering.
  def __gt__(self, p):
    return True


def point_dist_squared(p1, p2):
  return (p1.x - p2.x)**2 + (p1.y - p2.y)**2


def closest_points(points, k, p):
  closest = []

  for point in points:
    dist = point_dist_squared(p, point)
    heapq.heappush(closest, (-dist, point))
    if len(closest) > k:
      heapq.heappop(closest)

  return [point for _, point in closest]


points = [
    Point(0, 0),
    Point(1, 1),
    Point(2, 2),
    Point(3, 3),
]
print(closest_points(points, 2, Point(0, 2)))
# [(0, 0), (1, 1)]

The time complexity is O(n log k) since we are inserting/removing from a heap of size k. The space complexity is O(k) for keeping a heap of size k.
*/