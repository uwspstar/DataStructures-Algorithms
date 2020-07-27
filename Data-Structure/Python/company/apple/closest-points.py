# Given a list of points, an interger k, and a point p, find the k closest points to p.

# k =2 means find two closest points
# heapq. We calculate the distance between all points and the special point, and insert the distance and point as a tuple.

class Point:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"({self.x}, {self.y})"


def closest_points(points, k, p):
    pass
    # Fill this in.


points = [
    Point(0, 0),
    Point(1, 1),
    Point(2, 2),
    Point(3, 3),
]

print(closest_points(points, 2, Point(0, 2)))  # [(0, 0), (1, 1)]
