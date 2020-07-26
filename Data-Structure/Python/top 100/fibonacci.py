# https://docs.python.org/3.8/tutorial/controlflow.html#defining-functions
# O(N)
def fibonacci(nth):
    if nth == 0:
        return 0
    if nth == 1:
        return 1

    list = [0, 1]
    for x in range(2, nth):
        list.append(list[x-1] + list[x-2])
    return list


print(fibonacci(5))

# 
def fib(n):
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()


fib(200)
