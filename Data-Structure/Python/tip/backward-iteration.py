# using reversed() to perform the back iteration
N = 6
print("The reversed numbers are : ", end="")
for num in reversed(range(N + 1)):
    print(num, end=" ")


# using range(N, -1, -1) to perform the back iteration
print("The reversed numbers are : ", end="")
for num in range(N, -1, -1):
    print(num, end=" ")
