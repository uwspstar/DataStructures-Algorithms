# https://docs.python.org/3/howto/sorting.html#ascending-and-descending
#
# Python lists have a built-in list.sort() method that modifies the list in-place.

# There is also a sorted() built-in function that builds a new sorted list from an iterable.

# Another difference is that the list.sort() method is only defined for lists. In contrast, the sorted() function accepts any iterable.

vegetables = ['squash', 'pea', 'carrot', 'potato']

new_list = sorted(vegetables)

# new_list = ['carrot', 'pea', 'potato', 'squash']
print(new_list)

# vegetables = ['squash', 'pea', 'carrot', 'potato']
print(vegetables)

vegetables.sort()

# vegetables = ['carrot', 'pea', 'potato', 'squash']
print(vegetables)

sorted({1: 'D', 2: 'B', 3: 'B', 4: 'E', 5: 'A'})  # [1, 2, 3, 4, 5]
