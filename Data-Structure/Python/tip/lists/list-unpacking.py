nums = list(range(4))
first, second, third, fourth = nums
print(f'first={first}')
print(f'second={first}')

nums2 = list(range(4))
first, second, *others = nums2
print(f'others={others}')
