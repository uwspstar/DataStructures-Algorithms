'''
a+b+c = 1000
a^2 + b^2 = c^2
'''


# very slow
import time


def fastMode():
    start_time = time.time()
    for a in range(0, 1000):
        for b in range(0, 1000):
            c = 1000 - a - b
            if a**2 + b**2 == c**2:
                print('a=', a, 'b=', b, 'c=', c)
    end_time = time.time()
    print('time', (end_time - start_time))
    print('----- done -----')


print('fastMode : ', fastMode())


def slowMode():
    start_time = time.time()
    for a in range(0, 1000):
        for b in range(0, 1000):
            for c in range(0, 1000):
                if a + b + c == 1000 and a**2 + b**2 == c**2:
                    print('a=', a, 'b=', b, 'c=', c)
    end_time = time.time()
    print('time', (end_time - start_time))
    print('----- done -----')


# print('slowMode : ', slowMode())
