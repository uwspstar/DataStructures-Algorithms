# range(start, stop[, step])


def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        current = arr[i]
        for j in range(i-1, -2, -1):  # need to use -2, not -1 for end ??
            if (current < arr[j]):
                arr[j+1] = arr[j]
            else:
                break

        arr[j + 1] = current

    return arr


arr = [12, 11, 13, 5, 6]
print("Sorted array is:", insertion_sort(arr))

"""
def insertion_sort(array):

    # We start from 1 since the first element is trivially sorted
    for index in range(1, len(array)):
        currentValue = array[index]
        currentPosition = index

        # As long as we haven't reached the beginning and there is an element
        # in our sorted array larger than the one we're trying to insert - move
        # that element to the right
        while currentPosition > 0 and array[currentPosition - 1] > currentValue:
            array[currentPosition] = array[currentPosition -1]
            currentPosition = currentPosition - 1


        # We have either reached the beginning of the array or we have found
        # an element of the sorted array that is smaller than the element
        # we're trying to insert at index currentPosition - 1.
        # Either way - we insert the element at currentPosition
        array[currentPosition] = currentValue
"""
"""
def insertionSort(arr): 
  
    # Traverse through 1 to len(arr) 
    for i in range(1, len(arr)): 
  
        key = arr[i] 
  
        # Move elements of arr[0..i-1], that are 
        # greater than key, to one position ahead 
        # of their current position 
        j = i-1
        while j >=0 and key < arr[j] : 
                arr[j+1] = arr[j] 
                j -= 1
        arr[j+1] = key 
"""
