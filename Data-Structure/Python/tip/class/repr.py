# The repr() built-in function uses __repr__() to display the object.

# __repr__()  returns a printable representation of the object, one of the ways possible to create this object.

#  __repr__() is more useful for developers while __str__() is for end users.


class Point:

  def __init__(self, x=0, y=0):
    self.x = x
    self.y = y

  def __repr__(self):
    return f"({self.x}, {self.y})"


p = Point(3, 4)

print(p)
