
def insertionSort(arr):
    for i in range(1, len(arr)):
        current = arr[i]
        for j in range(i-1, -2, -1):  # need to use -2, not -1 for end
            # print(f"current = {current}")
            # print(f"current j = {arr[j]}")
            if (current < arr[j]):
                arr[j+1] = arr[j]
            else:
                break

        arr[j + 1] = current


arr = [12, 11, 13, 5, 6]
print("Sorted array is:", insertionSort(arr))
