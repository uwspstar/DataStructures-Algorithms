# https://docs.python.org/3/howto/sorting.html#ascending-and-descending
#
# Python lists have a built-in list.sort() method that modifies the list in-place.
# There is also a sorted() built-in function that builds a new sorted list from an iterable.

vegetables = ['squash', 'pea', 'carrot', 'potato']

new_list = sorted(vegetables)

# new_list = ['carrot', 'pea', 'potato', 'squash']
print(new_list)

# vegetables = ['squash', 'pea', 'carrot', 'potato']
print(vegetables)

vegetables.sort()

# vegetables = ['carrot', 'pea', 'potato', 'squash']
print(vegetables)
