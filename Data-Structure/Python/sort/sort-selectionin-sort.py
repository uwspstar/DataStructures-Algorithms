# O(N^2)
# find smallIndex
# swap

#


def swap(list, i, j):
    list[i], list[j] = list[j], list[i]
    return list


def selection_sort(list):
    if len(list) < 2:
        return list

    n = len(list)
    print(n)
    for i in range(n):
        small_index = i
        for j in range(i+1, n):  # NOT range(1, n):
            if list[j] < list[small_index]:
                small_index = j
        # print(f'i={i},j={j},small_index={small_index}')
        if small_index != i:
            swap(list, small_index, i)

    return list


print(selection_sort([5, 6, 3, 1, 2]))
