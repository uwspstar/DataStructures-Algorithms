def merge(left, right):

    if len(left) == 0:
        return right
    if len(right) == 0:
        return left
    arr = []

    while len(left) > 0 and len(right) > 0:
        if left[0] < right[0]:
            arr.append(left.pop(0))
        else:
            arr.append(right.pop(0))

    print('left=', left, 'right=', right, 'arr=', arr)
    arr.append(left)
    arr.append(right)
    return arr


def merge_sort(arr):
    if len(arr) < 2:
        return arr
    mid = len(arr) >> 1
    left = merge_sort(arr[: mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)


print('merge_sort', merge_sort([1, 3, 5, 2, 4, 6]))
