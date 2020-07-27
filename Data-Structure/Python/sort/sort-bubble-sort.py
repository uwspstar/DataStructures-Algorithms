# O(N^2)
# two pointers, each loop find the biggest one, and put on the right
# outloop i--
# inner loop j++, j <i
# swap


def swap(list, i, j):
    list[i], list[j] = list[j], list[i]
    return list


def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1, -1, -1):  # range(stat, end, step)
        isSwap = False
        for j in range(0, i):
            if arr[j] > arr[j+1]:
                swap(arr, j, j+1)
                isSwap = True
        if isSwap == False:
            break

    return arr


arr = [5, 4, 3, 2, 1]
print('bubbleSort', bubble_sort(arr))
